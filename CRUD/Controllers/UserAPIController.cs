using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUD.Common.Entities;
using CRUD.Common.Services;
using CRUD.Web.Models;
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
        public JsonResult Post([FromBody] UserModel user)
        {
            if (this.ModelState.IsValid)
            {
                try
                {
                    var isInsertUser = crudService.CreateUser(user);
                    return new JsonResult(new
                    {
                        code = isInsertUser ? 201 : 400,
                        message = isInsertUser ? "User has been created" : "User has not been created",
                        entity = isInsertUser
                    });
                }
                catch (Exception)
                {
                    return new JsonResult(new
                    {
                        code = 400,
                        message = "User has not been created",
                        entity = false
                    });
                }
            }

            return new JsonResult(new
            {
                code = 400,
                message = "User has not been created",
                entity = false
            });
        }

        [HttpPut]
        public JsonResult Put([FromBody] User user)
        {
            if (this.ModelState.IsValid)
            {
                try
                {
                    var isSuccess = crudService.EditUser(user);
                    return new JsonResult(new
                    {
                        code = isSuccess ? 201 : 400,
                        message = isSuccess ? "User has been updated" : "User has not been updated",
                        entity = isSuccess
                    });
                }
                catch (Exception)
                {
                    return new JsonResult(new
                    {
                        code = 400,
                        message =  "User has not been updated",
                        entity = false
                    });
                }
            }

            return new JsonResult(new
            {
                code = 400,
                message = "User has not been updated",
                entity = false
            });
        }

        [HttpDelete("{ids}")]
        public JsonResult Delete(string ids)
        {
            try
            {
                var list = ids.Split('_').Select(x => int.Parse(x)).ToList();
                bool isSuccess = crudService.DeleteUser(list);
                return new JsonResult(new
                {
                    code = isSuccess ? 201 : 400,
                    message = isSuccess ? "Users has been deleted" : "Error",
                    entity = isSuccess
                });
            }
            catch (Exception)
            {
                return new JsonResult(new
                {
                    code = 400,
                    message = "Error",
                    entity = false
                });
            }
        }
    }
}
