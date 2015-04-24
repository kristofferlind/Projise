using System;
using System.Collections.Generic;
using System.Web.Http;
using Projise.App_Infrastructure;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;

namespace Projise.Controllers
{
    public class MessagesController : ApiControllerBase
    {
        private readonly MessageRepository _messageRepository;

        public MessagesController()
        {
            _messageRepository = new MessageRepository(SessionUser);
            _messageRepository.OnChange += SyncManager.OnChange;
        }

        // GET: api/Message
        public IEnumerable<Message> Get()
        {
            return _messageRepository.All();
        }

        // POST: api/Message
        [ValidateModel]
        public Message Post([FromBody] Message message)
        {
            message.ProjectId = SessionUser.ActiveProject;
            message.User = AppUser;
            message.Date = DateTime.Now;
            return _messageRepository.Add(message);
        }
    }
}