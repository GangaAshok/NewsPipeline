using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace NewsPipeline.Domain.Entities
{
    public class NewsFeedDetail
    {
        [Key]

        public int NewsID { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }

       
    }
}
