using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyWebApiEX.Contracts;
using MyWebApiEX.Exceptions;
using MyWebApiEX.Model;

namespace MyWebApiEX.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private IPeopleService _peopleService;
        private ILogger<PeopleController> _logger;

        [HttpGet]
        public ActionResult<List<Person>> GetAll()
        {
            _logger.LogWarning("Get all people");
            var res = _peopleService.GetAllPeople();
            return Ok(res);
        }

        [HttpGet("{id}")]
        public ActionResult<Person> GetById(int id)
        {
            var product = _peopleService.GetPersonById(id);
            if(product != null)
            {
                return Ok(product);
            }
            return NotFound();
        }

        [HttpDelete("{id}")]
        public ActionResult DeletePerson(int id)
        {
            try
            {
                _peopleService.DeletePerson(id);
                return Ok();
            }
            catch (ItemNotFoundException ex)
            {
                _logger.LogError("failed to delete person", ex);

                return NotFound();
            }
        }

        [HttpPost]
        public ActionResult<Person> AddNew(Person person)
        {
            Thread.Sleep(5000);
            return Unauthorized();
            var personAfterInsert = _peopleService.AddNewPerson(person);
            return Ok(personAfterInsert);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(400)]
        public ActionResult<Person> Update(int id, Person person)
        {
            try
            {
                person.ID = id;
                var personAfterUpdate = _peopleService.UpdatePeron(person);
                return Ok(personAfterUpdate);
            }
            catch (ItemNotFoundException ex)
            {
                _logger.LogError("failed to update person", ex);
                return NotFound();
            }
        }

        public PeopleController(IPeopleService peopleService, ILogger<PeopleController> logger)
        {
            this._peopleService = peopleService;
            this._logger = logger;
        }

    }
}