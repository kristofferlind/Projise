using System;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Newtonsoft.Json;
using Owin;
using Projise;
using Projise.App_Infrastructure;
using Projise.DomainModel.Entities;

//using Signalr.MongoDb;

[assembly: OwinStartup(typeof (Startup))]

namespace Projise
{
    public partial class Startup
    {
        private static readonly Lazy<JsonSerializer> JsonSerializerFactory = new Lazy<JsonSerializer>(GetJsonSerializer);

        private static JsonSerializer GetJsonSerializer()
        {
            var jsonSerializer = new JsonSerializer
            {
                ContractResolver = new FilteredCamelCasePropertyNamesContractResolver
                {
                    // 1) Register all types in specified assemblies:
                    AssembliesToInclude =
                    {
                        typeof (Startup).Assembly,
                        typeof (IEntity).Assembly
                    }

                    // 2) Register individual types:
                    //TypesToInclude =
                    //                {
                    //                    typeof(Hubs.Message),
                    //                }
                }
            };

            jsonSerializer.Converters.Add(new ObjectIdConverter());

            return jsonSerializer;
        }

        public void Configuration(IAppBuilder app)
        {
            //TODO: make this a bit more strict for production..
            app.UseCors(CorsOptions.AllowAll);
            ConfigureAuth(app);
            app.MapSignalR();
            GlobalHost.DependencyResolver.Register(typeof (JsonSerializer), () => JsonSerializerFactory.Value);


            //config for mongodb backplane, should probably use redis instead though
            //var mongoconf = new MongoScaleoutConfiguration("Mongo");
            //GlobalHost.DependencyResolver.UseMongoDb(mongoconf);
        }
    }
}