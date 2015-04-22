using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNet.SignalR;
using MongoDB.Bson;
using Projise.App_Infrastructure;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;
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
using Projise.DomainModel;

namespace Projise.Controllers
{
    public class TeamsController : ApiControllerBase
    {
        private TeamRepository teamRepository;
        private TeamService teamService;

        public TeamsController()
        {
            teamRepository = new TeamRepository(AppUser);
            teamService = new TeamService(AppUser);
            teamRepository.OnChange += SyncManager.OnChange;
            teamService.OnChange += SyncManager.OnChange;
        }

        // GET: api/Team
        public IEnumerable<Team> Get()
        {
            return teamRepository.All();
        }

        // GET: api/Team/5
        public Team Get(string id)
        {
            return teamRepository.FindById(ObjectId.Parse(id));
        }

        // POST: api/Team
        [ValidateModel]
        public Team Post([FromBody]Team team)
        {
            return teamRepository.Add(team);
        }

        // PUT: api/Team/5
        [ValidateModel]
        public Team Put(string id, [FromBody]Team team)
        {
            return teamRepository.Update(team);
        }

        // DELETE: api/Team/5
        public void Delete(string id)
        {
            var team = teamRepository.FindById(ObjectId.Parse(id));
            teamRepository.Remove(team);
        }

        [HttpPut]
        [Route("api/teams/users/")]
        [ValidateModel]
        public Team AddUser([FromBody]User user)
        {
            if (SessionUser.ActiveTeam == new ObjectId("000000000000000000000000"))
            {
                throw new ArgumentNullException("Active team needed to add member.");
            }
            return teamService.AddUser(SessionUser.ActiveTeam, user.Email);
        }

        [HttpDelete]
        [Route("api/teams/users/{id}")]
        public Team RemoveUser(string id)
        {
            var userId = ObjectId.Parse(id);
            return teamService.RemoveUser(SessionUser.ActiveTeam, userId);
        }
    }
}
