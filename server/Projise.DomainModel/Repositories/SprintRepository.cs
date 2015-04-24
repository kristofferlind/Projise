using System.Linq;
using MongoDB.Driver.Builders;
using Projise.DomainModel.Entities;

namespace Projise.DomainModel.Repositories
{
    public class SprintRepository : RepositoryBase<Sprint>
    {
        private readonly UserWithSessionVars _user;

        public SprintRepository(UserWithSessionVars user)
        {
            _user = user;
        }

        protected override IQueryable<Sprint> CollectionItems()
        {
            return
                Collection.FindAs<Sprint>(Query<Sprint>.Where(s => s.ProjectId == _user.ActiveProject))
                    .AsQueryable<Sprint>();
        }
    }
}