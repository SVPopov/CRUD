using System.ComponentModel.DataAnnotations;
using CRUD.Common.Entities;
using Newtonsoft.Json;

namespace CRUD.Web.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        [JsonProperty("name")]
        [Required]
        public string Name { get; set; }

        [JsonProperty("departmentId")]
        public int DepartmentId { get; set; }

        public static explicit operator UserModel(User user)
        {
            return new UserModel
            {
                Id = user.Id,
                Name = user.Name,
                DepartmentId = user.DepartmentId
            };
        }

        public static implicit operator User(UserModel user)
        {
            return new User
            {
                Id = user.Id,
                Name = user.Name,
                DepartmentId = user.DepartmentId
            };
        }
    }
}
