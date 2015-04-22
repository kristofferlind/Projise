using Microsoft.AspNet.Identity.Owin;
using Projise.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using AspNet.Identity.MongoDB;
using System.Threading.Tasks;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;
using MongoDB.Bson;
using Microsoft.AspNet.SignalR;
using Projise.App_Infrastructure;
using Projise.DomainModel;

namespace Projise.Controllers
{
    public class ProjectsController : ApiControllerBase
    {
        private ProjectRepository projectRepository;
        private ProjectService projectService;

        public ProjectsController()
        {
            projectRepository = new ProjectRepository(AppUser);
            projectRepository.OnChange += SyncManager.OnChange;
            projectService = new ProjectService(AppUser, projectRepository);
        }

        // GET: api/Project
        public IEnumerable<Project> Get()
        {
            return projectService.All();
        }

        // GET: api/Project/5
        public Project Get(string id)
        {
            var projectId = ObjectId.Parse(id);
            return projectService.FindById(projectId);
        }

        // POST: api/Project
        [ValidateModel]
        public Project Post([FromBody]Project project)
        {
            return projectRepository.Add(project);
        }

        // PUT: api/Project/5
        [ValidateModel]
        public Project Put(string id, [FromBody]Project project)
        {
            var projectId = ObjectId.Parse(id);
            project.Id = projectId;
            return projectService.Update(project);
        }

        // DELETE: api/Project/5
        public void Delete(string id)
        {
            var projectId = ObjectId.Parse(id);
            var project = projectRepository.FindById(projectId);
            projectService.Remove(project);
        }

        [HttpPut]
        [Route("api/projects/{id}/users")]
        [ValidateModel]
        public Project AddUser(string id, [FromBody]User user)
        {
            var projectId = ObjectId.Parse(id);
            var email = user.Email;
            return projectService.AddUser(projectId, email);
        }

        [HttpPut]
        [Route("api/projects/{pId}/users/{tId}")]
        public Project AddTeam(string pId, string tId)
        {
            var projectId = ObjectId.Parse(pId);
            var teamId = ObjectId.Parse(tId);
            return projectService.AddTeam(projectId, teamId);
        }

        [HttpDelete]
        [Route("api/projects/{pId}/users/{uId}")]
        public Project RemoveUser(string pId, string uId)
        {
            var projectId = ObjectId.Parse(pId);
            var userId = ObjectId.Parse(uId);
            return projectService.RemoveUser(projectId, userId);
        }
    }
}
