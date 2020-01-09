using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApiEX.Exceptions
{

    [Serializable]
    public class ItemNotFoundException : Exception
    {
        public int ItemId { get; set; }
        public ItemNotFoundException(int itemId) {
            this.ItemId = itemId;
        }
        public ItemNotFoundException(string message) : base(message) { }
        public ItemNotFoundException(string message, Exception inner) : base(message, inner) { }
        protected ItemNotFoundException(
          System.Runtime.Serialization.SerializationInfo info,
          System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
    }
}
