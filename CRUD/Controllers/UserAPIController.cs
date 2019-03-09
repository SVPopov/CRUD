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
            var userList = crudService.GetUsersList();
            return new JsonResult(userList);
        }
    }
}
