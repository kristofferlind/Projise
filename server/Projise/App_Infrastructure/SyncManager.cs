using Microsoft.AspNet.SignalR;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;

namespace Projise.App_Infrastructure
{
    public class SyncManager
    {
        private readonly UserWithSessionVars _user;

        public SyncManager(UserWithSessionVars user)
        {
            _user = user;
        }

        public void OnChange(object sender, SyncEventArgs<IEntity> e)
        {
            //No need for keeping track of the following, signalr solves it using buffering
            //Might need it for clients that are disconnected for a long time
            //Check which users are currently connected (needs a list of users that should be here?)
            //save operations for users that are not connected and send at reconnect?
            GlobalHost.ConnectionManager.GetHubContext<ProjectHub>()
                .Clients.Group(_user.ActiveProject.ToString())
                .onChange(e.Operation, e.Type, e.Item);
        }
    }
}