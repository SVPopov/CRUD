﻿using System;
using System.Collections.Generic;
using System.Text;
using CRUD.Common.Entities;

namespace CRUD.Common.Repositories
{
    public interface IRepository
    {
        IEnumerable<User> GetUserList();

        IEnumerable<Department> GetDepartmentList();

        bool CreateUser(User user);
    }
}
