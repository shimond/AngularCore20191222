using MyWebApiEX.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApiEX.Contracts
{
    public interface IPeopleService
    {
        List<Person> GetAllPeople();
        Person GetPersonById(int id);

        void DeletePerson(int id);

        Person AddNewPerson(Person p);

        Person UpdatePeron(Person p);
    }
}
