using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;

namespace Projise.DomainModel.Entities
{
    public class Task : IEntity
    {
        //public ObjectId StoryId { get; set; }
        [MaxLength(250)]
        public string Description { get; set; }

        public bool IsDone { get; set; }
        public ObjectId Id { get; set; }
    }
}