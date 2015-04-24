using System;
using System.Collections.Generic;
using MongoDB.Bson;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Events;
using Projise.DomainModel.Repositories;

namespace Projise.DomainModel
{
    public class TeamService : IEntityService<Team>
    {
        private readonly TeamRepository _teamRepository;
        private readonly UserRepository _userRepository;

        public TeamService(User user)
        {
            _userRepository = new UserRepository();
            _teamRepository = new TeamRepository(user);
            _teamRepository.OnChange += teamRepository_OnChange;
        }

        public IEnumerable<Team> All()
        {
            return _teamRepository.All();
        }

        public Team FindById(ObjectId id)
        {
            return _teamRepository.FindById(id);
        }

        public Team Add(Team collectionItem, ObjectId parentId)
        {
            return _teamRepository.Add(collectionItem);
        }

        public void Remove(Team collectionItem)
        {
            _teamRepository.Remove(collectionItem);
        }

        public Team Update(Team collectionItem)
        {
            return _teamRepository.Update(collectionItem);
        }

        private void teamRepository_OnChange(object sender, SyncEventArgs<IEntity> e)
        {
            Sync(new SyncEventArgs<IEntity>(e.Operation, e.Item));
        }

        public virtual event EventHandler<SyncEventArgs<IEntity>> OnChange;

        protected virtual void Sync(SyncEventArgs<IEntity> e)
        {
            var handler = OnChange;
            if (handler != null)
            {
                handler(this, e);
            }
        }

        public Team AddUser(ObjectId teamId, string userEmail)
        {
            var user = _userRepository.FindByEmail(userEmail);
            return _teamRepository.AddUser(teamId, user);
        }

        public Team RemoveUser(ObjectId teamId, ObjectId userId)
        {
            return _teamRepository.RemoveUser(teamId, userId);
        }
    }
}