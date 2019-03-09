using System;
using System.Collections.Generic;
using CRUD.Common.Entities;
using CRUD.Common.Repositories;

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
            return context.Users;
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
    }
}
