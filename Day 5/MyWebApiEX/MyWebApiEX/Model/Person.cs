﻿using MyWebApiEX.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApiEX.Model
{
    public class Person
    {
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        [MyCustomValidation]
        public DateTime Birthdate { get; set; }
    }
}
