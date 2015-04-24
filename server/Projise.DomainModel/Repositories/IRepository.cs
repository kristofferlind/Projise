using System;
using System.Collections.Generic;
using MongoDB.Bson;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;

namespace Projise.DomainModel.Repositories
{
    public interface IRepository<T> where T : IEntity
    {
        event EventHandler<SyncEventArgs<IEntity>> OnChange;
        IEnumerable<T> All();
        T FindById(ObjectId id);
        T Add(T collectionItem);
        void Remove(T collectionItem);
        T Update(T collectionItem);
    }
}