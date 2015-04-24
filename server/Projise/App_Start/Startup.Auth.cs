using System;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using Owin;
using Projise.Models;
using Projise.Providers;

namespace Projise
{
    public partial class Startup
    {
        public static OAuthAuthorizationServerOptions OAuthServerOptions { get; private set; }
        public static OAuthBearerAuthenticationOptions OAuthOptions { get; private set; }
        public static string PublicClientId { get; private set; }
        // For more information on configuring authentication, please visit http://go.microsoft.com/fwlink/?LinkId=301864
        public void ConfigureAuth(IAppBuilder app)
        {
            // Configure the db context, user manager and role manager to use a single instance per request
            app.CreatePerOwinContext(ApplicationIdentityContext.Create);
            app.CreatePerOwinContext<ApplicationUserManager>(ApplicationUserManager.Create);
            app.CreatePerOwinContext<ApplicationRoleManager>(ApplicationRoleManager.Create);
            app.UseCookieAuthentication(new CookieAuthenticationOptions());
            app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);

            // Enables the application to temporarily store user information when they are verifying the second factor in the two-factor authentication process.
            //app.UseTwoFactorSignInCookie(DefaultAuthenticationTypes.TwoFactorCookie, TimeSpan.FromMinutes(5));

            // Enables the application to remember the second login verification factor such as phone or email.
            // Once you check this option, your second step of verification during the login process will be remembered on the device where you logged in from.
            // This is similar to the RememberMe option when you log in.
            //app.UseTwoFactorRememberBrowserCookie(DefaultAuthenticationTypes.TwoFactorRememberBrowserCookie);


            PublicClientId = "projise";
            OAuthServerOptions = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/Token"),
                Provider = new ApplicationOAuthProvider(PublicClientId),
                AuthorizeEndpointPath = new PathString("/api/Authentication/ExternalLogin"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(14),
                AllowInsecureHttp = true
            };

            OAuthOptions = new OAuthBearerAuthenticationOptions
            {
                Provider = new QueryStringOAuthBearerProvider()
            };

            // Enable the application to use bearer tokens to authenticate users
            app.UseOAuthBearerAuthentication(OAuthOptions);
            app.UseOAuthBearerTokens(OAuthServerOptions);

            //External
            //app.UseMicrosoftAccountAuthentication(
            //    clientId: "",
            //    clientSecret: "");

            //app.UseTwitterAuthentication(
            //   consumerKey: "",
            //   consumerSecret: "");

            //app.UseFacebookAuthentication(
            //   appId: "",
            //   appSecret: "");

            //var googleOptions = new GoogleOAuth2AuthenticationOptions
            //{
            //    ClientId = ConfigurationManager.AppSettings["googleClientId"],
            //    ClientSecret = ConfigurationManager.AppSettings["googleClientSecret"],
            //    Provider = new GoogleOAuth2AuthenticationProvider
            //    {
            //        OnAuthenticated = async user =>
            //        {
            //            user.Identity.AddClaim(new Claim("urn:tokens:googleplus:accesstoken", user.AccessToken));
            //        }
            //    }
            //};

            //googleOptions.Scope.Add("openid");
            //googleOptions.Scope.Add("profile");
            //googleOptions.Scope.Add("email");

            //app.UseGoogleAuthentication(googleOptions);
        }
    }
}