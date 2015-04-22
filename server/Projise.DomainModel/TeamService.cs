using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using Projise.DomainModel.Entities;
using Projise.DomainModel.Repositories;
using Projise.DomainModel.Events;

namespace Projise.DomainModel
{
    public class TeamService : IEntityService<Team>
    {
        private UserRepository userRepository;
        private TeamRepository teamRepository;

        public TeamService(User user)
        {
            userRepository = new UserRepository();
            teamRepository = new TeamRepository(user);
            teamRepository.OnChange += teamRepository_OnChange;
        }

        void teamRepository_OnChange(object sender, Events.SyncEventArgs<IEntity> e)
        {
            Sync(new SyncEventArgs<IEntity>(e.Operation, e.Item));
        }


        public virtual event EventHandler<SyncEventArgs<IEntity>> OnChange;
        protected virtual void Sync(SyncEventArgs<IEntity> e)
        {
            EventHandler<SyncEventArgs<IEntity>> handler = OnChange;
            if (handler != null)
            {
                handler(this, e);
            }
        }

        public IEnumerable<Team> All()
        {
            return teamRepository.All();
        }

        public Team FindById(ObjectId id)
        {
            return teamRepository.FindById(id);
        }

        public Team Add(Team collectionItem, ObjectId parentId)
        {
            return teamRepository.Add(collectionItem);
        }

        public void Remove(Team collectionItem)
        {
            teamRepository.Remove(collectionItem);
        }

        public Team Update(Team collectionItem)
        {
            return teamRepository.Update(collectionItem);
        }

        public Team AddUser(ObjectId teamId, string userEmail)
        {
            var user = userRepository.FindByEmail(userEmail);
            return teamRepository.AddUser(teamId, user);
        }

        public Team RemoveUser(ObjectId teamId, ObjectId userId)
        {
            return teamRepository.RemoveUser(teamId, userId);
        }
    }
}
