using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using MongoDB.Bson;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;
using Projise.Models;

namespace Projise.App_Infrastructure
{
    [Authorize]
    //[CheckCSRF] - cant do it this way, was a rather bad solution anyway, figure out something better
    public class ApiControllerBase : ApiController
    {
        private readonly ApplicationUserManager _userManager;
        private UserWithSessionVars _user;
        protected SyncManager SyncManager;

        public ApiControllerBase()
        {
            var context = HttpContext.Current.GetOwinContext();
            _userManager = context.GetUserManager<ApplicationUserManager>();
            SyncManager = new SyncManager(SessionUser);
        }

        public User AppUser
        {
            get
            {
                var applicationUser = SessionUser;

                return new User
                {
                    Id = applicationUser.Id,
                    UserName = applicationUser.UserName,
                    Email = applicationUser.Email
                };
            }
        }

        public UserWithSessionVars SessionUser
        {
            get
            {
                if (_user == null)
                {
                    var userId = User.Identity.GetUserId();
                    var applicationUser = _userManager.FindById(userId);

                    _user = new UserWithSessionVars
                    {
                        Id = ObjectId.Parse(applicationUser.Id),
                        UserName = applicationUser.UserName,
                        Email = applicationUser.Email,
                        ActiveProject = applicationUser.ActiveProject,
                        ActiveTeam = applicationUser.ActiveTeam
                        //AccessToken = context.Request.Cookies.Where(c => c.Key == ".AspNet.ApplicationCookie").SingleOrDefault().Value,
                        //GoogleProviderKey = applicationUser.Logins.Where(l => l.LoginProvider == "Google").SingleOrDefault().ProviderKey
                        //GoogleAccessToken = applicationUser.Claims.FirstOrDefault(c => c.Type == "urn:tokens:googleplus:accesstoken").Value
                        //GoogleAccessToken = applicationUser.GoogleAccessToken
                    };
                }

                return _user;
            }
        }

        protected virtual void repository_OnChange(object sender, SyncEventArgs<IEntity> e)
        {
            SyncManager.OnChange(sender, e);
        }
    }
}