using System.Collections.Generic;
using System.Web.Http;
using MongoDB.Bson;
using Projise.App_Infrastructure;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;

namespace Projise.Controllers
{
    public class IdeasController : ApiControllerBase
    {
        private readonly IdeaRepository _ideaRepository;

        public IdeasController()
        {
            _ideaRepository = new IdeaRepository(SessionUser);
            _ideaRepository.OnChange += SyncManager.OnChange;
        }

        // GET: api/Ideas
        public IEnumerable<Idea> Get()
        {
            return _ideaRepository.All();
        }

        // GET: api/Ideas/5
        public Idea Get(string id)
        {
            var ideaId = ObjectId.Parse(id);
            return _ideaRepository.FindById(ideaId);
        }

        // POST: api/Ideas
        [ValidateModel]
        public Idea Post([FromBody] Idea idea)
        {
            idea.ProjectId = SessionUser.ActiveProject;
            return _ideaRepository.Add(idea);
        }

        // PUT: api/Ideas/5
        [ValidateModel]
        public Idea Put(string id, [FromBody] Idea idea)
        {
            return _ideaRepository.Update(idea);
        }

        // DELETE: api/Ideas/5
        public void Delete(string id)
        {
            var ideaId = ObjectId.Parse(id);
            _ideaRepository.Remove(ideaId);
        }

        [HttpPut]
        [Route("api/ideas/{id}/up")]
        public Idea VoteUp(string id)
        {
            var ideaId = ObjectId.Parse(id);
            return _ideaRepository.VoteUp(ideaId, SessionUser.Id);
        }

        [HttpPut]
        [Route("api/ideas/{id}/down")]
        public Idea VoteDown(string id)
        {
            var ideaId = ObjectId.Parse(id);
            return _ideaRepository.VoteDown(ideaId, SessionUser.Id);
        }
    }
}