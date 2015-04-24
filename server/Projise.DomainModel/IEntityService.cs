using System.Collections.Generic;
using MongoDB.Bson;

namespace Projise.DomainModel
{
    public interface IEntityService<T>
    {
        IEnumerable<T> All();
        T FindById(ObjectId id);
        T Add(T collectionItem, ObjectId parentId);
        void Remove(T collectionItem);
        T Update(T collectionItem);
    }
}