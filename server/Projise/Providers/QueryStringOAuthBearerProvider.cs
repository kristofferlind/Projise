﻿using System.Threading.Tasks;
using Microsoft.Owin.Security.OAuth;

namespace Projise.Providers
{
    public class QueryStringOAuthBearerProvider : OAuthBearerAuthenticationProvider
    {
        public override Task RequestToken(OAuthRequestTokenContext context)
        {
            var value = context.Request.Headers.Get("Authorization");

            if (string.IsNullOrEmpty(value))
            {
                value = context.Request.Query.Get("token");
            }

            if (!string.IsNullOrEmpty(value))
            {
                context.Token = value;
            }

            return Task.FromResult<object>(null);
        }
    }
}