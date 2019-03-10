using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUD.Repositories.Migrations
{
    public partial class TypoFixTitle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Titile",
                table: "Department",
                newName: "Title");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Department",
                newName: "Titile");
        }
    }
}
