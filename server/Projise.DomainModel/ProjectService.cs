using MongoDB.Bson;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projise.DomainModel
{
    public class ProjectService : IEntityService<Project>
    {
        private ProjectRepository projectRepository;
        private UserRepository userRepository;
        private TeamRepository teamRepository;

        public ProjectService(User user, ProjectRepository projectRepository)
        {
            this.projectRepository = projectRepository;
            userRepository = new UserRepository();
            teamRepository = new TeamRepository(user);
        }

        public IEnumerable<Project> All()
        {
            return projectRepository.All();
        }

        public Project FindById(ObjectId id)
        {
            return projectRepository.FindById(id);
        }

        public Project Add(Project collectionItem, ObjectId parentId)
        {
            return projectRepository.Add(collectionItem);
        }

        public void Remove(Project collectionItem)
        {
            projectRepository.Remove(collectionItem);
        }

        public Project Update(Project collectionItem)
        {
            return projectRepository.Update(collectionItem);
        }

        public Project AddUser(ObjectId projectId, string email)
        {
            var user = userRepository.FindByEmail(email);

            if (user == null)
            {
                throw new ArgumentException("No such user found.");
            }

            return projectRepository.AddUser(projectId, user);
        }

        public Project AddTeam(ObjectId projectId, ObjectId teamId)
        {
            var team = teamRepository.FindById(teamId);

            return projectRepository.AddTeam(projectId, team);
        }

        public Project RemoveUser(ObjectId projectId, ObjectId userId)
        {
            return projectRepository.RemoveUser(projectId, userId);
        }
    }
}
