using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;

namespace Projise.DomainModel.Repositories
{
    public class TeamRepository : RepositoryBase<Team>
    {
        private readonly User _user;

        public TeamRepository(User user)
        {
            _user = user;
        }

        protected override IQueryable<Team> CollectionItems()
        {
            return
                Collection.FindAs<Team>(Query<Team>.Where(t => t.Users.Any(u => u.Id == _user.Id))).AsQueryable<Team>();
        }

        public override Team Update(Team team)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<Team>.Where(t => t.Id == team.Id),
                Update = Update<Team>.Set(t => t.Name, team.Name)
                    .Set(t => t.Description, team.Description)
            });
            Sync(new SyncEventArgs<IEntity>("save", team));
            return team;
        }

        public override Team Add(Team collectionItem)
        {
            if (collectionItem.Users == null)
            {
                collectionItem.Users = new List<User>();
            }
            collectionItem.Users.Clear();
            collectionItem.Users.Add(_user);
            Collection.Insert(collectionItem);
            Sync(new SyncEventArgs<IEntity>("save", collectionItem));
            return collectionItem;
        }

        public Team AddUser(ObjectId teamId, User user)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<Team>.Where(t => t.Id == teamId),
                Update = Update<Team>.AddToSet(t => t.Users, user)
            });
            var team = FindById(teamId);
            Sync(new SyncEventArgs<IEntity>("save", team));
            return team;
        }

        public Team RemoveUser(ObjectId teamId, ObjectId userId)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<Team>.EQ(t => t.Id, teamId),
                Update = Update<Team>.Pull(t => t.Users, builder => builder.EQ(u => u.Id, userId))
            });

            var team = FindById(teamId);
            Sync(new SyncEventArgs<IEntity>("save", team));
            return team;
        }
    }
}