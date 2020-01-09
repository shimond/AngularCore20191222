using MyWebApiEX.Contracts;
using MyWebApiEX.Exceptions;
using MyWebApiEX.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApiEX.Services
{
    public class PeopleServiceFromMemory : IPeopleService
    {
        private static List<Person> _list = new List<Person>();

        public List<Person> GetAllPeople()
        {
            return _list;
        }

        public Person GetPersonById(int id)
        {
            return _list.FirstOrDefault(x => id == x.ID);
        }

        public Person AddNewPerson(Person p)
        {
            p.ID = _list.Last().ID + 1;
            _list.Add(p);
            return p;
        }
        public Person UpdatePeron(Person p)
        {
            var personToUpdate = GetPersonById(p.ID);
            if (personToUpdate == null)
            {
                throw new ItemNotFoundException(p.ID);
            }

            personToUpdate.Birthdate = p.Birthdate;
            personToUpdate.Name = p.Name;
            personToUpdate.Email = p.Email;
            return personToUpdate;
        }


        public void DeletePerson(int id)
        {
            var personToDelete = GetPersonById(id);
            if (personToDelete != null)
            {
                _list.Remove(personToDelete);
            }
            else
            {
                throw new ItemNotFoundException(id);
            }

        }

        static PeopleServiceFromMemory()
        {
            for (int i = 1; i < 10; i++)
            {
                _list.Add(new Person
                {
                    ID = i,
                    Name = "NameOf" + i,
                    Birthdate = DateTime.Today.AddDays(-1 * i),
                    Email = $"NameOf{i}@gmail.com"
                });
            }
        }
    }
}
