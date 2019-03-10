using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CRUD.Repositories
{
    public class CrudDbContextFactory : IDesignTimeDbContextFactory<CrudDbContext>
    {
        public CrudDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "..", "CRUD"))
            .AddJsonFile("appsettings.json")
            .Build();

            var builder = new DbContextOptionsBuilder<CrudDbContext>();

            var connectionString = configuration.GetConnectionString("DefaultConnection");

            builder.UseSqlServer(connectionString);

            return new CrudDbContext(builder.Options);
        }
    }
}
