using System;
using System.Collections.Generic;
using System.Linq;
using CRUD.Common.Entities;
using CRUD.Common.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace CRUD.Repositories
{
    public class CrudRepository : IRepository
    {
        private readonly CrudDbContext context;

        public CrudRepository(CrudDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<User> GetUserList()
        {
            return context.Users.Include(u => u.Department);
        }

        public bool CreateUser(User user)
        {
            try
            {
                context.Users.Add(user);
                context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public IEnumerable<Department> GetDepartmentList()
        {
            if (context.Department.Count() == 0)
            {
                PrepareDataForDepartments();
            }

            return context.Department;
        }

        // Temporary solve until not implement CRUD functionality for departments
        private void PrepareDataForDepartments()
        {
            context.Department.AddRange( new List<Department> {
                new Department{ Title="IT"},
                new Department{ Title="QA"},
                new Department{ Title="DevOps"},
            });

            context.SaveChanges();
        }
    }
}
