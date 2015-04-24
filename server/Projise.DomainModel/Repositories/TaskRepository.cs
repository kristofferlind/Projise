using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using Projise.DomainModel.Entities;

namespace Projise.DomainModel.Repositories
{
    public class TaskRepository : RepositoryBase<Task>
    {
        private UserWithSessionVars _user;

        public TaskRepository(UserWithSessionVars user)
        {
            _user = user;
        }

        protected override IQueryable<Task> CollectionItems()
        {
            //return collection.FindAs<Task>(Query<Task>.Where(t => t.StoryId ==))
            throw new NotImplementedException();
        }

        public IEnumerable<Task> FindByStoryId(ObjectId storyId)
        {
            //return collection.FindAs<Entities.Task>(Query<Entities.Task>.Where(t => t.StoryId == storyId));
            throw new NotImplementedException();
        }
    }
}