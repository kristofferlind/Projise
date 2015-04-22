﻿using Microsoft.AspNet.SignalR;
using MongoDB.Bson;
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
    public class IdeasController : ApiControllerBase
    {
        private IdeaRepository ideaRepository;
        public IdeasController()
        {
            ideaRepository = new IdeaRepository(SessionUser);
            ideaRepository.OnChange += SyncManager.OnChange;
        }

        // GET: api/Ideas
        public IEnumerable<Idea> Get()
        {
            return ideaRepository.All();
        }

        // GET: api/Ideas/5
        public Idea Get(string id)
        {
            var ideaId = ObjectId.Parse(id);
            return ideaRepository.FindById(ideaId);
        }

        // POST: api/Ideas
        [ValidateModel]
        public Idea Post([FromBody]Idea idea)
        {
            idea.ProjectId = SessionUser.ActiveProject;
            return ideaRepository.Add(idea);
        }

        // PUT: api/Ideas/5
        [ValidateModel]
        public Idea Put(string id, [FromBody]Idea idea)
        {
            return ideaRepository.Update(idea);
        }

        // DELETE: api/Ideas/5
        public void Delete(string id)
        {
            var ideaId = ObjectId.Parse(id);
            ideaRepository.Remove(ideaId);
        }

        [HttpPut]
        [Route("api/ideas/{id}/up")]
        public Idea VoteUp(string id)
        {
            var ideaId = ObjectId.Parse(id);
            return ideaRepository.VoteUp(ideaId, SessionUser.Id);
        }

        [HttpPut]
        [Route("api/ideas/{id}/down")]
        public Idea VoteDown(string id)
        {
            var ideaId = ObjectId.Parse(id);
            return ideaRepository.VoteDown(ideaId, SessionUser.Id);
        }
    }
}
