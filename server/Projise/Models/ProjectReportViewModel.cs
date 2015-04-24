using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;

namespace Projise.Models
{
    public class ProjectReportViewModel
    {
        //private ObjectId projectId;
        public Project Project;
        public IEnumerable<Story> Stories;
        public string UsernameList;
        public List<string> Usernames;

        public ProjectReportViewModel(ObjectId projectId)
        {
            //this.projectId = projectId;
            var projectRepository = new ProjectRepository();
            var storyRepository = new StoryRepository();

            Project = projectRepository.FindById(projectId);
            Stories = storyRepository.FindByProjectId(projectId);
            Stories = Stories.OrderBy(s => s.Name).ThenBy(s => s.Status);

            Usernames = new List<string>();
            foreach (var user in Project.Users)
            {
                Usernames.Add(user.UserName);
            }

            UsernameList = string.Join(", ", Usernames);
        }

        public string GetClass(string status)
        {
            switch (status)
            {
                case "completed":
                    return "success";
                case "in progress":
                    return "warning";
                case "not started":
                    return "danger";
                default:
                    return "";
            }
        }
    }
}