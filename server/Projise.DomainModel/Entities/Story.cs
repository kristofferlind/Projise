using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;

namespace Projise.DomainModel.Entities
{
    public class Story : IEntity
    {
        public ObjectId ProjectId { get; set; }
        public ObjectId SprintId { get; set; }
        public ObjectId UserId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [MaxLength(250)]
        public string Description { get; set; }

        [MaxLength(250)]
        public string Tags { get; set; }

        public int Priority { get; set; }
        public int Points { get; set; }

        [MaxLength(50)]
        public string Status { get; set; }

        public List<Task> Tasks { get; set; }
        public ObjectId Id { get; set; }
    }
}