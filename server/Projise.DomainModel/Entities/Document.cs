using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;

namespace Projise.DomainModel.Entities
{
    public class Document : IEntity
    {
        public ObjectId ProjectId { get; set; }

        [MaxLength(50)]
        public string Name { get; set; }

        [MaxLength(250)]
        public string Description { get; set; }

        public string Data { get; set; } //Borde inte följa med förrän vid get av enskilt dokument 
        public ObjectId Id { get; set; }
    }

    //public class DocumentWithData : IEntity
    //{
    //    public ObjectId Id { get; set; }
    //    public ObjectId ProjectId { get; set; }
    //    public string Name { get; set; }
    //    public string Description { get; set; }
    //    public string Data { get; set; }
    //}
}