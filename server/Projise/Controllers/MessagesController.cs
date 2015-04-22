using Microsoft.AspNet.SignalR;
using Projise.App_Infrastructure;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Projise.Controllers
{
    public class MessagesController : ApiControllerBase
    {
        private MessageRepository messageRepository;

        public MessagesController()
        {
            messageRepository = new MessageRepository(SessionUser);
            messageRepository.OnChange += SyncManager.OnChange;
        }

        // GET: api/Message
        public IEnumerable<Message> Get()
        {
            return messageRepository.All();
        }

        // POST: api/Message
        [ValidateModel]
        public Message Post([FromBody]Message message)
        {
            message.ProjectId = SessionUser.ActiveProject;
            message.User = AppUser;
            message.Date = DateTime.Now;
            return messageRepository.Add(message);
        }
    }
}
