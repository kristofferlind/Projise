using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projise.DomainModel.Repositories
{
    public class DocumentRepository : RepositoryBase<Document>
    {
        private UserWithSessionVars user;

        public DocumentRepository(UserWithSessionVars user)
        {
            this.user = user;
        }
        protected override IQueryable<Document> CollectionItems()
        {
            return collection.FindAs<Document>(Query<Document>.Where(d => d.ProjectId == user.ActiveProject)).AsQueryable<Document>();
        }
    }
}
