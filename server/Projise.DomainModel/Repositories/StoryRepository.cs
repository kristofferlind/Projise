using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver.Builders;
using Projise.DomainModel.Entities;

namespace Projise.DomainModel.Repositories
{
    public class StoryRepository : RepositoryBase<Story>
    {
        private readonly UserWithSessionVars _user;

        public StoryRepository(UserWithSessionVars user)
        {
            _user = user;
        }

        public StoryRepository()
        {
        }

        protected override IQueryable<Story> CollectionItems()
        {
            return
                Collection.FindAs<Story>(Query<Story>.Where(s => s.ProjectId == _user.ActiveProject))
                    .AsQueryable<Story>();
        }

        public IEnumerable<Story> FindByProjectId(ObjectId projectId)
        {
            return Collection.FindAs<Story>(Query<Story>.Where(s => s.ProjectId == projectId));
        }
    }
}