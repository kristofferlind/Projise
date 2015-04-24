using System.Web;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNet.SignalR;
using MongoDB.Bson;
using Projise.DomainModel.Entities;
using Projise.Models;
using Task = System.Threading.Tasks.Task;

namespace Projise.App_Infrastructure
{
    [Authorize]
    public class ProjectHub : Hub
    {
        private UserWithSessionVars _user;

        private UserWithSessionVars SessionUser
        {
            get
            {
                if (_user == null)
                {
                    var context = HttpContext.Current.GetOwinContext();
                    var userManager = context.GetUserManager<ApplicationUserManager>();

                    var userId = Context.User.Identity.GetUserId(); // User.Identity.GetUserId();
                    var applicationUser = userManager.FindById(userId);

                    _user = new UserWithSessionVars
                    {
                        Id = ObjectId.Parse(applicationUser.Id),
                        UserName = applicationUser.UserName,
                        Email = applicationUser.Email,
                        ActiveProject = applicationUser.ActiveProject,
                        ActiveTeam = applicationUser.ActiveTeam,
                        GoogleAccessToken = applicationUser.GoogleAccessToken
                    };
                }

                return _user;
            }
        }

        public override Task OnConnected()
        {
            Groups.Add(Context.ConnectionId, SessionUser.ActiveProject.ToString());
            return base.OnConnected();
        }
    }
}