using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;

namespace Projise.DomainModel.Repositories
{
    public abstract class RepositoryBase<T> : IRepository<T> where T : IEntity
    {
        protected MongoCollection Collection;
        protected MongoDatabase Database;

        protected RepositoryBase()
        {
            var client = new MongoClient(GetMongoDbConnectionString());
            Database = client.GetServer().GetDatabase(ConfigurationManager.AppSettings.Get("mongoDatabaseName"));
            var collectionName = typeof (T).Name.ToLower() + "s";
            Collection = Database.GetCollection<T>(collectionName);
        }

        public virtual event EventHandler<SyncEventArgs<IEntity>> OnChange;

        public IEnumerable<T> All()
        {
            return CollectionItems().AsEnumerable();
        }

        public virtual T FindById(ObjectId id)
        {
            return Collection.FindOneByIdAs<T>(id);
        }

        public virtual T Add(T collectionItem)
        {
            Collection.Insert(collectionItem);
            Sync(new SyncEventArgs<IEntity>("save", collectionItem));
            return collectionItem;
        }

        //Ta bort?
        public virtual void Remove(T collectionItem)
        {
            Collection.Remove(Query<T>.Where(t => t.Id == collectionItem.Id));
            Sync(new SyncEventArgs<IEntity>("remove", collectionItem));
        }

        public virtual T Update(T collectionItem)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<T>.Where(e => e.Id == collectionItem.Id),
                Update = Update<T>.Replace(collectionItem)
            });
            Sync(new SyncEventArgs<IEntity>("save", collectionItem));
            return collectionItem;
        }

        protected virtual void Sync(SyncEventArgs<IEntity> e)
        {
            var handler = OnChange;
            if (handler != null)
            {
                handler(this, e);
            }
        }

        protected abstract IQueryable<T> CollectionItems();

        public virtual void Remove(ObjectId collectionId)
        {
            var collectionItem = FindById(collectionId);
            Collection.Remove(Query<T>.Where(t => t.Id == collectionItem.Id));
            Sync(new SyncEventArgs<IEntity>("remove", collectionItem));
        }

        private string GetMongoDbConnectionString()
        {
            return ConfigurationManager.AppSettings.Get("MONGOLAB_URI") ??
                   ConfigurationManager.ConnectionStrings["Mongo"].ConnectionString;
        }
    }
}