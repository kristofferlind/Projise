using System;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;

namespace Projise.DomainModel.Entities
{
    public class Sprint : IEntity
    {
        public ObjectId ProjectId { get; set; }

        [MaxLength(50)]
        public string Name { get; set; }

        [MaxLength(250)]
        public string Goal { get; set; }

        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public ObjectId Id { get; set; }
    }
}