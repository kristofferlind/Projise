using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Projise.DomainModel.Entities
{
    [BsonIgnoreExtraElements]
    public class User : IEntity
    {
        public string UserName { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        public ObjectId Id { get; set; }
    }

    [BsonIgnoreExtraElements]
    public class UserWithSessionVars : IEntity
    {
        public string UserName { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        public ObjectId ActiveProject { get; set; }
        public ObjectId ActiveTeam { get; set; }
        public string GoogleAccessToken { get; set; }
        public ObjectId Id { get; set; }
    }
}