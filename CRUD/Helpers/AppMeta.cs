using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json.Linq;
using System.Linq;

namespace CRUD.Web.Helpers
{
    /// Provides access to app JSON metadata
    public class AppMeta
    {
        private string cssPath;
        private string jsPath;
        private string jsMainPath;
        private string jsBundlePath;

        /// Initializes app meta instance for given app name
        public static AppMeta GetAppInstance(IHostingEnvironment hostingEnvironment, string appName)
        {
            string contentRootPath = hostingEnvironment.ContentRootPath;
            string path = contentRootPath + "/ClientApp/build/asset-manifest.json";
            JObject json = LoadJson(path);
            var dymanicNameOfChunkJs = json.Children().FirstOrDefault(x => x.Path.EndsWith("chunk.js']"));
            AppMeta meta = new AppMeta
            {
                cssPath = json["main.css"].ToString(),
                jsPath = dymanicNameOfChunkJs.Path.Replace("['", "/").Replace("']", ""),
                jsMainPath = json["main.js"].ToString(),
                jsBundlePath = json["runtime~main.js"].ToString(),
            };
            return meta;
        }

        /// Gets the css path.
        public string CssPath => this.cssPath;

        /// Gets the js path.
        public string JsPath => this.jsPath;

        /// Gets the js path.
        public string JsMainPath => this.jsMainPath;

        /// Gets the bundle js path.
        public string JsBundlePath => this.jsBundlePath;

        private AppMeta()
        {
        }

        private static JObject LoadJson(string filePath)
        {
            var json = System.IO.File.ReadAllText(filePath);
            JObject data = JObject.Parse(json);
            return data;
        }
    }
}
