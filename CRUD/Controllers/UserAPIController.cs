using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUD.Common.Entities;
using CRUD.Common.Services;
using Microsoft.AspNetCore.Mvc;

namespace CRUD.Controllers
{
    [Route("api/v1/users")]
    public class UserAPIController : Controller
    {
        private readonly ICrudService crudService;

        public UserAPIController(ICrudService crudService)
        {
            this.crudService = crudService;
        }

        [HttpGet]
        public JsonResult Get()
        {
            var userList = crudService.GetUsersList().ToList();
            return new JsonResult(userList);
        }

        [HttpPost]
        public JsonResult Post([FromBody] User user)
        {
            if (this.ModelState.IsValid)
            {
                try
                {
                    var insertedUser = crudService.CreateUser(user);
                    return new JsonResult(new {
                        code = insertedUser ? 201 : 400,
                        message = insertedUser ? "User has been created" : "User has not been created",
                        entity = insertedUser
                    });
                }
                catch (Exception)
                {
                    return new JsonResult(false);
                }
            }

            return new JsonResult(false);
        }
    }
}
