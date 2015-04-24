using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;

namespace Projise.DomainModel.Repositories
{
    public class IdeaRepository : RepositoryBase<Idea>
    {
        private readonly UserWithSessionVars _user;

        public IdeaRepository(UserWithSessionVars user)
        {
            _user = user;
        }

        protected override IQueryable<Idea> CollectionItems()
        {
            return
                Collection.FindAs<Idea>(Query<Idea>.Where(i => i.ProjectId == _user.ActiveProject)).AsQueryable<Idea>();
        }

        public Idea VoteUp(ObjectId id, ObjectId userId)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<Idea>.Where(i => i.Id == id),
                Update = Update<Idea>.AddToSet(i => i.UsersUp, userId)
                    .Pull(i => i.UsersDown, userId)
            });
            var idea = FindById(id);
            Sync(new SyncEventArgs<IEntity>("save", idea));
            return idea;
        }

        public Idea VoteDown(ObjectId id, ObjectId userId)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<Idea>.Where(i => i.Id == id),
                Update = Update<Idea>.AddToSet(i => i.UsersDown, userId)
                    .Pull(i => i.UsersUp, userId)
            });
            var idea = FindById(id);
            Sync(new SyncEventArgs<IEntity>("save", idea));
            return idea;
        }
    }
}