using System;
using System.Collections.Generic;
using System.Text;
using CRUD.Common.Entities;

namespace CRUD.Common.Services
{
    public interface ICrudService
    {
        IEnumerable<User> GetUsersList();

        bool CreateUser(User user);
    }
}
