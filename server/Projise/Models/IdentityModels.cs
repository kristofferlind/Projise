﻿using AspNet.Identity.MongoDB;
using Microsoft.AspNet.Identity;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Projise.Models {
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager) {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }

        //public List<ObjectId> Projects { get; set; }      //Projects/Teams här skulle vara rejält mycket effektivare(prestandamässigt), men försvårar generiskt repo
        //public List<ObjectId> Teams { get; set; }         //Sätter index på arrayerna istället..
        public ObjectId ActiveProject { get; set; }
        public ObjectId ActiveTeam { get; set; }
        public string GoogleAccessToken { get; set; }
    }
}