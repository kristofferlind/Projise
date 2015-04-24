using System.Web.Mvc;
using MongoDB.Bson;
using Projise.Models;

namespace Projise.Controllers
{
    public class ProjectReportController : Controller
    {
        // GET: ProjectReport
        public ActionResult Index(string id)
        {
            var projectId = ObjectId.Parse(id);
            var model = new ProjectReportViewModel(projectId);

            return View(model);
        }
    }
}