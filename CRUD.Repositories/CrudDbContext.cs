using System;
using System.Linq;
using CRUD.Common.Entities;
using Microsoft.EntityFrameworkCore;

namespace CRUD.Repositories
{
    public class CrudDbContext : DbContext
    {
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Department> Department { get; set; }

        public CrudDbContext(DbContextOptions<CrudDbContext> options) : base(options)
        {
            try
            {
                this.Database.Migrate();
            }
            catch {
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .Property(i => i.Id)
                .UseSqlServerIdentityColumn();

            modelBuilder.Entity<Department>()
                .Property(i => i.Id)
                .UseSqlServerIdentityColumn();
        }
    }
}
