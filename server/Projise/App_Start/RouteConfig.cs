using System.Web.Mvc;
using System.Web.Routing;

namespace Projise
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute("manifest", "manifest", new {controller = "Home", action = "Manifest"});
            routes.MapRoute("emptymanifest", "emptymanifest", new {controller = "Home", action = "Manifest"});

            routes.MapMvcAttributeRoutes();

            routes.MapRoute("Login", "login", new {controller = "Account", action = "APILogin"}
                );

            routes.MapRoute("Default", "{controller}/{action}/{id}",
                new {controller = "Home", action = "Index", id = UrlParameter.Optional}
                );
        }
    }
}