using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;

namespace Projise.DomainModel.Entities
{
    public interface IEntity
    {
        [BsonId]
        [JsonProperty(PropertyName = "_id")]
        ObjectId Id { get; set; }
    }
}