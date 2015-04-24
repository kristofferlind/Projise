using System.Collections.Generic;
using System.Web.Http;
using MongoDB.Bson;
using Projise.App_Infrastructure;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;

namespace Projise.Controllers
{
    public class SprintsController : ApiControllerBase
    {
        private readonly SprintRepository _sprintRepository;

        public SprintsController()
        {
            _sprintRepository = new SprintRepository(SessionUser);
            _sprintRepository.OnChange += SyncManager.OnChange;
        }

        // GET: api/Sprint
        public IEnumerable<Sprint> Get()
        {
            return _sprintRepository.All();
        }

        // POST: api/Sprint
        [ValidateModel]
        public Sprint Post([FromBody] Sprint sprint)
        {
            sprint.ProjectId = SessionUser.ActiveProject;
            return _sprintRepository.Add(sprint);
        }

        // PUT: api/Sprint/5
        [ValidateModel]
        public Sprint Put([FromBody] Sprint sprint)
        {
            sprint.ProjectId = SessionUser.ActiveProject;
            return _sprintRepository.Update(sprint);
        }

        // DELETE: api/Sprint/5
        public void Delete(string id)
        {
            var sprintId = ObjectId.Parse(id);
            _sprintRepository.Remove(sprintId);
        }
    }
}