using Microsoft.AspNet.SignalR;

namespace Projise.App_Infrastructure
{
    public class ChatHub : Hub
    {
        //static void repository_OnChange(object sender, DomainModel.Events.SyncEventArgs<DomainModel.Entities.Project> e)
        //{
        //    throw new NotImplementedException();
        //}
        public void SendMessage()
        {
            //messageservice.send()     //skapa, lägg till validering och liknande där..
        }
    }
}