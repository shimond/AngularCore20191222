using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApiEX.Validations
{
    [System.AttributeUsage(AttributeTargets.Property, Inherited = false, AllowMultiple = true)]
    public class MyCustomValidationAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            DateTime d = (DateTime)value;
            if(d > DateTime.Today)
            {
                return false;
            }

            return true;
        }
        public MyCustomValidationAttribute()
        {
            this.ErrorMessage = "Birdate bigger then today... Ya Maafan";
        }
    }
}
