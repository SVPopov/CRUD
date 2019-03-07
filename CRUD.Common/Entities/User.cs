using System;

namespace CRUD.Common.Entities
{
    public class User
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int DepartmentId { get; set; }

        public virtual Department Department { get; set; }
    }
}
