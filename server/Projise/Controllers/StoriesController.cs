using System.Collections.Generic;
using System.Web.Http;
using MongoDB.Bson;
using Projise.App_Infrastructure;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;

namespace Projise.Controllers
{
    public class StoriesController : ApiControllerBase
    {
        private readonly StoryRepository _storyRepository;

        public StoriesController()
        {
            _storyRepository = new StoryRepository(SessionUser);
            _storyRepository.OnChange += SyncManager.OnChange;
        }

        // GET: api/Stories
        public IEnumerable<Story> Get()
        {
            return _storyRepository.All();
        }

        // GET: api/Stories/5
        public Story Get(string id)
        {
            var storyId = ObjectId.Parse(id);
            return _storyRepository.FindById(storyId);
        }

        // POST: api/Stories
        [ValidateModel]
        public Story Post([FromBody] Story story)
        {
            story.ProjectId = SessionUser.ActiveProject;
            return _storyRepository.Add(story);
        }

        // PUT: api/Stories/5
        [ValidateModel]
        public Story Put([FromBody] Story story)
        {
            return _storyRepository.Update(story);
        }

        // DELETE: api/Stories/5
        public void Delete(string id)
        {
            var storyId = ObjectId.Parse(id);
            _storyRepository.Remove(storyId);
        }
    }
}