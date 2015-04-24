using System.Linq;
using MongoDB.Driver.Builders;
using Projise.DomainModel.Entities;

namespace Projise.DomainModel.Repositories
{
    public class DocumentRepository : RepositoryBase<Document>
    {
        private readonly UserWithSessionVars _user;

        public DocumentRepository(UserWithSessionVars user)
        {
            _user = user;
        }

        protected override IQueryable<Document> CollectionItems()
        {
            return
                Collection.FindAs<Document>(Query<Document>.Where(d => d.ProjectId == _user.ActiveProject))
                    .AsQueryable<Document>();
        }
    }
}