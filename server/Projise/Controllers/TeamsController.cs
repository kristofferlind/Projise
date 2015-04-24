using System;
using System.Collections.Generic;
using System.Web.Http;
using MongoDB.Bson;
using Projise.App_Infrastructure;
using Projise.DomainModel;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;

namespace Projise.Controllers
{
    public class TeamsController : ApiControllerBase
    {
        private readonly TeamRepository _teamRepository;
        private readonly TeamService _teamService;

        public TeamsController()
        {
            _teamRepository = new TeamRepository(AppUser);
            _teamService = new TeamService(AppUser);
            _teamRepository.OnChange += SyncManager.OnChange;
            _teamService.OnChange += SyncManager.OnChange;
        }

        // GET: api/Team
        public IEnumerable<Team> Get()
        {
            return _teamRepository.All();
        }

        // GET: api/Team/5
        public Team Get(string id)
        {
            return _teamRepository.FindById(ObjectId.Parse(id));
        }

        // POST: api/Team
        [ValidateModel]
        public Team Post([FromBody] Team team)
        {
            return _teamRepository.Add(team);
        }

        // PUT: api/Team/5
        [ValidateModel]
        public Team Put(string id, [FromBody] Team team)
        {
            return _teamRepository.Update(team);
        }

        // DELETE: api/Team/5
        public void Delete(string id)
        {
            var team = _teamRepository.FindById(ObjectId.Parse(id));
            _teamRepository.Remove(team);
        }

        [HttpPut]
        [Route("api/teams/users/")]
        [ValidateModel]
        public Team AddUser([FromBody] User user)
        {
            if (SessionUser.ActiveTeam == new ObjectId("000000000000000000000000"))
            {
                throw new ArgumentNullException("user", "Active team needed to add member.");
            }
            return _teamService.AddUser(SessionUser.ActiveTeam, user.Email);
        }

        [HttpDelete]
        [Route("api/teams/users/{id}")]
        public Team RemoveUser(string id)
        {
            var userId = ObjectId.Parse(id);
            return _teamService.RemoveUser(SessionUser.ActiveTeam, userId);
        }
    }
}