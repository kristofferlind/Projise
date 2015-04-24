using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;

namespace Projise.DomainModel.Repositories
{
    public class ProjectRepository : RepositoryBase<Project>
    {
        private readonly User _user;

        public ProjectRepository(User user)
        {
            _user = user;
        }

        public ProjectRepository()
        {
        }

        protected override IQueryable<Project> CollectionItems()
        {
            return
                Collection.FindAs<Project>(Query<Project>.Where(p => p.Users.Any(u => u.Id == _user.Id)))
                    .AsQueryable<Project>();
        }

        public override Project Update(Project project)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<Project>.Where(p => p.Id == project.Id),
                Update = Update<Project>.Set(p => p.Name, project.Name)
                    .Set(p => p.Description, project.Description)
            });
            Sync(new SyncEventArgs<IEntity>("save", project));
            return project;
        }

        public override Project Add(Project collectionItem)
        {
            collectionItem.Users.Clear();
            collectionItem.Users.Add(_user);
            Collection.Insert(collectionItem);
            Sync(new SyncEventArgs<IEntity>("save", collectionItem));
            return collectionItem;
        }

        public Project AddUser(ObjectId projectId, User user)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<Project>.Where(p => p.Id == projectId),
                Update = Update<Project>.AddToSet(p => p.Users, user)
            });
            var project = FindById(projectId);
            Sync(new SyncEventArgs<IEntity>("save", project));
            return project;
        }

        public Project AddTeam(ObjectId projectId, Team team)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<Project>.Where(p => p.Id == projectId),
                Update = Update<Project>.AddToSetEach(p => p.Users, team.Users)
            });
            var project = FindById(projectId);
            Sync(new SyncEventArgs<IEntity>("save", project));
            return project;
        }

        public Project RemoveUser(ObjectId projectId, ObjectId userId)
        {
            Collection.FindAndModify(new FindAndModifyArgs
            {
                Query = Query<Project>.EQ(p => p.Id, projectId),
                Update = Update<Project>.Pull(p => p.Users, builder => builder.EQ(u => u.Id, userId))
            });

            var project = FindById(projectId);
            Sync(new SyncEventArgs<IEntity>("save", project));
            return project;
        }
    }
}