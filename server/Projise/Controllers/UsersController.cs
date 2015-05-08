using System.Web.Http;
using Microsoft.AspNet.SignalR;
using MongoDB.Bson;
using Projise.App_Infrastructure;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;
using Projise.DomainModel.Repositories;

namespace Projise.Controllers
{
    //[System.Web.Http.Authorize]
    public class UsersController : ApiControllerBase
    {
        private readonly UserRepository _userRepository;

        public UsersController()
        {
            _userRepository = new UserRepository();
            //_userRepository.OnChange += userRepository_OnChange;
        }

        //private void userRepository_OnChange(object sender, SyncEventArgs<UserWithSessionVars> e)
        //{
        //    GlobalHost.ConnectionManager.GetHubContext<ProjectHub>().Clients.All.onChange(e.Operation, "user", e.Item);
        //    //type will be wrong here, setting manually to "user"
        //}

        [Route("api/users/me"), HttpGet]
        public UserWithSessionVars Me()
        {
            return SessionUser;
        }

        [HttpPut]
        [Route("api/users/me/activate/team/{id}")]
        [ValidateModel]
        public UserWithSessionVars ActivateTeam(string id)
        {
            var teamId = ObjectId.Parse(id);
            SessionUser.ActiveTeam = teamId;
            return _userRepository.Update(SessionUser);
        }

        [HttpPut]
        [Route("api/users/me/activate/project/{id}")]
        [ValidateModel]
        public UserWithSessionVars ActivateProject(string id)
        {
            var projectId = ObjectId.Parse(id);
            //TODO: check that user is part of project
            SessionUser.ActiveProject = projectId;
            return _userRepository.Update(SessionUser);
        }
    }
}