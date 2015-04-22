using Microsoft.AspNet.SignalR;
using MongoDB.Bson;
using Projise.App_Infrastructure;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;
using Projise.DomainModel.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Projise.Controllers
{
    public class SprintsController : ApiControllerBase
    {
        private SprintRepository sprintRepository;
        public SprintsController()
        {
            sprintRepository = new SprintRepository(SessionUser);
            sprintRepository.OnChange += SyncManager.OnChange;
        }

        // GET: api/Sprint
        public IEnumerable<Sprint> Get()
        {
            return sprintRepository.All();
        }

        // POST: api/Sprint
        [ValidateModel]
        public Sprint Post([FromBody]Sprint sprint)
        {
            sprint.ProjectId = SessionUser.ActiveProject;
            return sprintRepository.Add(sprint);
        }

        // PUT: api/Sprint/5
        [ValidateModel]
        public Sprint Put([FromBody]Sprint sprint)
        {
            sprint.ProjectId = SessionUser.ActiveProject;
            return sprintRepository.Update(sprint);
        }

        // DELETE: api/Sprint/5
        public void Delete(string id)
        {
            var sprintId = ObjectId.Parse(id);
            sprintRepository.Remove(sprintId);
        }
    }
}
