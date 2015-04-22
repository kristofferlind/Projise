using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
