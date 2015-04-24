using System;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using Newtonsoft.Json;

namespace Projise.DomainModel.Entities
{
    public class Message : IEntity
    {
        public ObjectId ProjectId { get; set; }

        [MaxLength(50)]
        public string Channel { get; set; }

        public User User { get; set; }
        public DateTime Date { get; set; }

        [JsonProperty(PropertyName = "message")]
        [MaxLength(500)]
        public string Text { get; set; }

        public ObjectId Id { get; set; }
    }
}