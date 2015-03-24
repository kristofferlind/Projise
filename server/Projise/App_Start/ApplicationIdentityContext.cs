﻿namespace Projise
{
	using System;
	using AspNet.Identity.MongoDB;
	using MongoDB.Driver;

	public class ApplicationIdentityContext : IdentityContext, IDisposable
	{
		public ApplicationIdentityContext(MongoCollection users, MongoCollection roles) : base(users, roles)
		{
		}

		public static ApplicationIdentityContext Create()
		{
			// todo add settings where appropriate to switch server & database in your own application
            //var client = new MongoClient("mongodb://localhost:27017");
            var client = new MongoClient(System.Configuration.ConfigurationManager.ConnectionStrings["Mongo"].ConnectionString);
            var database = client.GetServer().GetDatabase("NETProjise");
            var users = database.GetCollection<IdentityUser>("users");
			var roles = database.GetCollection<IdentityRole>("roles");
			return new ApplicationIdentityContext(users, roles);
		}

		public void Dispose()
		{
		}
	}
}