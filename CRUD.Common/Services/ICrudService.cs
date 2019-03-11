using System;
using System.Collections.Generic;
using System.Text;
using CRUD.Common.Entities;

namespace CRUD.Common.Services
{
    public interface ICrudService
    {
        IEnumerable<User> GetUsersList();

        IEnumerable<Department> GetDepartmentsList();

        bool DeleteUser(IList<int> ids);

        bool CreateUser(User user);

        bool EditUser(User user);
    }
}
