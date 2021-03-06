﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Projise.DomainModel.Entities
{
    [BsonIgnoreExtraElements]
    public class Project : IEntity
    {
        [MaxLength(50)]
        public string Name { get; set; }

        [MaxLength(250)]
        public string Description { get; set; }

        //public List<ObjectId> Users { get; set; }   //Lagra minimal user med email här?
        public List<User> Users { get; set; }
        public ObjectId Id { get; set; }
    }
}