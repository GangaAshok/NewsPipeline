using Microsoft.EntityFrameworkCore.Migrations;

namespace NewsPipeline.Domain.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Comment",
                table: "NewsFeedDetails",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Like",
                table: "NewsFeedDetails",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Comment",
                table: "NewsFeedDetails");

            migrationBuilder.DropColumn(
                name: "Like",
                table: "NewsFeedDetails");
        }
    }
}
