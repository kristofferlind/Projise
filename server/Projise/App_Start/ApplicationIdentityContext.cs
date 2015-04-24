using System;
using System.Configuration;
using AspNet.Identity.MongoDB;
using MongoDB.Driver;

namespace Projise
{
    public class ApplicationIdentityContext : IdentityContext, IDisposable
    {
        public ApplicationIdentityContext(MongoCollection users, MongoCollection roles) : base(users, roles)
        {
        }

        public void Dispose()
        {
        }

        public static ApplicationIdentityContext Create()
        {
            var client = new MongoClient(GetMongoDbConnectionString());
            var database = client.GetServer().GetDatabase(ConfigurationManager.AppSettings.Get("mongoDatabaseName"));
            var users = database.GetCollection<IdentityUser>("users");
            var roles = database.GetCollection<IdentityRole>("roles");
            return new ApplicationIdentityContext(users, roles);
        }

        private static string GetMongoDbConnectionString()
        {
            return ConfigurationManager.AppSettings.Get("MONGOLAB_URI") ??
                   ConfigurationManager.ConnectionStrings["Mongo"].ConnectionString;
        }
    }
}