using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace CRUD
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((hostContext, config) =>
                {
                    config.SetBasePath(hostContext.HostingEnvironment.ContentRootPath);
                    config.AddJsonFile("appsettings.json", optional: true);
                    config.AddJsonFile("appsettings_connection_params.json", optional: true);
                    config.AddEnvironmentVariables();
                })
                .UseStartup<Startup>();
    }
}
