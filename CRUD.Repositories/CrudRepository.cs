using System.Collections.Generic;
using CRUD.Common.Entities;
using CRUD.Common.Repositories;

namespace CRUD.Repositories
{
    public class CrudRepository : IRepository
    {
        public IEnumerable<User> GetUserList()
        {
            // TODO: To implement read data from EF Context
            return new List<User> {
                new User{ Id = 1, Name = "Tom", Department = new Department{ Id = 1, Titile = "IT" }, DepartmentId = 1},
                new User{ Id = 2, Name = "Sam", Department = new Department{ Id = 2, Titile = "QA" }, DepartmentId = 2},
                new User{ Id = 3, Name = "John", Department = new Department{ Id = 1, Titile = "IT" }, DepartmentId = 1},
            };
        }
    }
}
