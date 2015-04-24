using System;
using MongoDB.Bson;
using Newtonsoft.Json;

namespace Projise.App_Infrastructure
{
    public class ObjectIdConverter : JsonConverter
    {
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            if (value.ToString() != "000000000000000000000000")
            {
                serializer.Serialize(writer, value.ToString());
            }
            else
            {
                serializer.Serialize(writer, null);
            }
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue,
            JsonSerializer serializer)
        {
            //TODO: needs exception handling?
            return ObjectId.Parse(reader.Value.ToString());
        }

        public override bool CanConvert(Type objectType)
        {
            return typeof (ObjectId).IsAssignableFrom(objectType);
        }
    }
}