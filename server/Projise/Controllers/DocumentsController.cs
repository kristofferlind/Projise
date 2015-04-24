using System.Collections.Generic;
using System.Web.Http;
using MongoDB.Bson;
using Projise.App_Infrastructure;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;

namespace Projise.Controllers
{
    public class DocumentsController : ApiControllerBase
    {
        private readonly DocumentRepository _documentRepository;

        public DocumentsController()
        {
            _documentRepository = new DocumentRepository(SessionUser);
            _documentRepository.OnChange += SyncManager.OnChange;
        }

        // GET: api/Documents
        public IEnumerable<Document> Get()
        {
            return _documentRepository.All();
        }

        // GET: api/Documents/5
        public Document Get(string id)
        {
            var documentId = ObjectId.Parse(id);
            return _documentRepository.FindById(documentId);
        }

        // POST: api/Documents
        [ValidateModel]
        public Document Post([FromBody] Document document)
        {
            document.ProjectId = SessionUser.ActiveProject;
            return _documentRepository.Add(document);
        }

        // PUT: api/Documents/5
        [ValidateModel]
        public Document Put([FromBody] Document document)
        {
            return _documentRepository.Update(document);
        }

        // DELETE: api/Documents/5
        public void Delete(string id)
        {
            var documentId = ObjectId.Parse(id);
            _documentRepository.Remove(documentId);
        }
    }
}