using Microsoft.EntityFrameworkCore;
using NewsPipeline.Domain.Entities;

namespace NewsPipeline.Domain.Context
{
    public class NewsFeedDetailsContext:DbContext
    {
        public NewsFeedDetailsContext(DbContextOptions<NewsFeedDetailsContext> options) : base(options)

        {

        }
        public DbSet<NewsFeedDetail> NewsFeedDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

        {

            optionsBuilder.UseSqlServer("Server =.; Database = NewsFeedDB; Trusted_Connection = true");

        }


    }
}

