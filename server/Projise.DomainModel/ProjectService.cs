using System;
using System.Collections.Generic;
using MongoDB.Bson;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;

namespace Projise.DomainModel
{
    public class ProjectService : IEntityService<Project>
    {
        private readonly ProjectRepository _projectRepository;
        private readonly TeamRepository _teamRepository;
        private readonly UserRepository _userRepository;

        public ProjectService(User user, ProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
            _userRepository = new UserRepository();
            _teamRepository = new TeamRepository(user);
        }

        public IEnumerable<Project> All()
        {
            return _projectRepository.All();
        }

        public Project FindById(ObjectId id)
        {
            return _projectRepository.FindById(id);
        }

        public Project Add(Project collectionItem, ObjectId parentId)
        {
            return _projectRepository.Add(collectionItem);
        }

        public void Remove(Project collectionItem)
        {
            _projectRepository.Remove(collectionItem);
        }

        public Project Update(Project collectionItem)
        {
            return _projectRepository.Update(collectionItem);
        }

        public Project AddUser(ObjectId projectId, string email)
        {
            var user = _userRepository.FindByEmail(email);

            if (user == null)
            {
                throw new ArgumentException("No such user found.");
            }

            return _projectRepository.AddUser(projectId, user);
        }

        public Project AddTeam(ObjectId projectId, ObjectId teamId)
        {
            var team = _teamRepository.FindById(teamId);

            return _projectRepository.AddTeam(projectId, team);
        }

        public Project RemoveUser(ObjectId projectId, ObjectId userId)
        {
            return _projectRepository.RemoveUser(projectId, userId);
        }
    }
}