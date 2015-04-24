using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Projise.DomainModel.Entities
{
    public class Idea : IEntity
    {
        public ObjectId ProjectId { get; set; }

        [MaxLength(50)]
        public string Name { get; set; }

        [MaxLength(250)]
        public string Description { get; set; }

        [BsonIgnoreIfNull]
        public List<ObjectId> UsersUp { get; set; }

        [BsonIgnoreIfNull]
        public List<ObjectId> UsersDown { get; set; }

        public int Score
        {
            get
            {
                var up = UsersUp != null ? UsersUp.Count : 0;
                var down = UsersDown != null ? UsersDown.Count : 0;
                return up - down;
            }
        }

        public ObjectId Id { get; set; }
    }
}