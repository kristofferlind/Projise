using System.Collections.Generic;
using System.Web.Http;
using MongoDB.Bson;
using Projise.App_Infrastructure;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;

namespace Projise.Controllers
{
    //TODO: not currently used, tasks have been moved to stories, might however be a good idea to manage them by themselves

    public class TasksController : ApiControllerBase
    {
        private readonly TaskRepository _taskRepository;

        public TasksController()
        {
            _taskRepository = new TaskRepository(SessionUser);
            _taskRepository.OnChange += SyncManager.OnChange;
        }

        // GET: api/Tasks
        public IEnumerable<Task> Get(string id)
        {
            //return taskRepository.All();
            var storyId = ObjectId.Parse(id);
            return _taskRepository.FindByStoryId(storyId);
        }

        // POST: api/Tasks
        [ValidateModel]
        public Task Post([FromBody] Task task)
        {
            return _taskRepository.Add(task);
        }

        // PUT: api/Tasks/5
        [ValidateModel]
        public Task Put([FromBody] Task task)
        {
            return _taskRepository.Update(task);
        }

        // DELETE: api/Tasks/5
        public void Delete(string id)
        {
            var taskId = ObjectId.Parse(id);
            _taskRepository.Remove(taskId);
        }
    }
}