using System;
using System.Configuration;
using System.Linq;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;

namespace Projise.DomainModel.Repositories
{
    public class UserRepository
    {
        protected MongoCollection Collection;
        protected MongoDatabase Database;

        public UserRepository()
        {
            var client = new MongoClient(ConfigurationManager.ConnectionStrings["Mongo"].ConnectionString);
            Database = client.GetServer().GetDatabase("NETProjise");
            Collection = Database.GetCollection<User>("users");
        }

        public event EventHandler<SyncEventArgs<UserWithSessionVars>> OnChange;

        protected virtual void Sync(SyncEventArgs<UserWithSessionVars> e)
        {
            var handler = OnChange;
            if (handler != null)
            {
                handler(this, e);
            }
        }

        public UserWithSessionVars Update(UserWithSessionVars user)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<UserWithSessionVars>.EQ(e => e.Id, user.Id),
                Update = Update<UserWithSessionVars>.Set(e => e.ActiveProject, user.ActiveProject)
                    .Set(e => e.ActiveTeam, user.ActiveTeam)
                    .Set(e => e.GoogleAccessToken, user.GoogleAccessToken)
            });
            Sync(new SyncEventArgs<UserWithSessionVars>("save", user));
            return user;
        }

        public UserWithSessionVars SetGoogleToken(UserWithSessionVars user)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<UserWithSessionVars>.EQ(e => e.Id, user.Id),
                Update = Update<UserWithSessionVars>.Set(e => e.GoogleAccessToken, user.GoogleAccessToken)
            });
            return user;
        }

        public User FindByEmail(string email) //internal?
        {
            return Collection.FindAs<User>(Query<User>.Where(u => u.Email == email)).SingleOrDefault();
        }
    }
}