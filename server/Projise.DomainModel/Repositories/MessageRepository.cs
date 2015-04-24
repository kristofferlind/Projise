using System.Linq;
using MongoDB.Driver.Builders;
using Projise.DomainModel.Entities;

namespace Projise.DomainModel.Repositories
{
    public class MessageRepository : RepositoryBase<Message>
    {
        private readonly UserWithSessionVars _user;

        public MessageRepository(UserWithSessionVars user)
        {
            _user = user;
        }

        protected override IQueryable<Message> CollectionItems()
        {
            return
                Collection.FindAs<Message>(Query<Message>.Where(m => m.ProjectId == _user.ActiveProject))
                    .AsQueryable<Message>();
        }
    }
}