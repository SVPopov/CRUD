using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUD.Common.Entities;
using CRUD.Common.Services;
using Microsoft.AspNetCore.Mvc;

namespace CRUD.Controllers
{
    [Route("api/v1/departments")]
    public class DepartmentAPIController : Controller
    {
        private readonly ICrudService crudService;

        public DepartmentAPIController(ICrudService crudService)
        {
            this.crudService = crudService;
        }

        [HttpGet]
        public JsonResult Get()
        {
            var departmentsList = crudService.GetDepartmentsList();
            return new JsonResult(departmentsList);
        }
    }
}
