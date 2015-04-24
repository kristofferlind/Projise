using System.Collections.Generic;
using System.Web.Http;
using MongoDB.Bson;
using Projise.App_Infrastructure;
using Projise.DomainModel;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;

namespace Projise.Controllers
{
    public class ProjectsController : ApiControllerBase
    {
        private readonly ProjectRepository _projectRepository;
        private readonly ProjectService _projectService;

        public ProjectsController()
        {
            _projectRepository = new ProjectRepository(AppUser);
            _projectRepository.OnChange += SyncManager.OnChange;
            _projectService = new ProjectService(AppUser, _projectRepository);
        }

        // GET: api/Project
        public IEnumerable<Project> Get()
        {
            return _projectService.All();
        }

        // GET: api/Project/5
        public Project Get(string id)
        {
            var projectId = ObjectId.Parse(id);
            return _projectService.FindById(projectId);
        }

        // POST: api/Project
        [ValidateModel]
        public Project Post([FromBody] Project project)
        {
            return _projectRepository.Add(project);
        }

        // PUT: api/Project/5
        [ValidateModel]
        public Project Put(string id, [FromBody] Project project)
        {
            var projectId = ObjectId.Parse(id);
            project.Id = projectId;
            return _projectService.Update(project);
        }

        // DELETE: api/Project/5
        public void Delete(string id)
        {
            var projectId = ObjectId.Parse(id);
            var project = _projectRepository.FindById(projectId);
            _projectService.Remove(project);
        }

        [HttpPut]
        [Route("api/projects/{id}/users")]
        [ValidateModel]
        public Project AddUser(string id, [FromBody] User user)
        {
            var projectId = ObjectId.Parse(id);
            var email = user.Email;
            return _projectService.AddUser(projectId, email);
        }

        [HttpPut]
        [Route("api/projects/{pId}/users/{tId}")]
        public Project AddTeam(string pId, string tId)
        {
            var projectId = ObjectId.Parse(pId);
            var teamId = ObjectId.Parse(tId);
            return _projectService.AddTeam(projectId, teamId);
        }

        [HttpDelete]
        [Route("api/projects/{pId}/users/{uId}")]
        public Project RemoveUser(string pId, string uId)
        {
            var projectId = ObjectId.Parse(pId);
            var userId = ObjectId.Parse(uId);
            return _projectService.RemoveUser(projectId, userId);
        }
    }
}