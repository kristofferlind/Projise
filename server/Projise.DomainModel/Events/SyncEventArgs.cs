using Projise.DomainModel.Entities;

namespace Projise.DomainModel.Events
{
    public class SyncEventArgs<T> where T : IEntity
    {
        public SyncEventArgs(string operation, T item)
        {
            Item = item;
            Type = item.GetType().Name.ToLower();
            Operation = operation;
        }

        public T Item { get; private set; }
        public string Type { get; private set; }
        public string Operation { get; set; }
    }
}