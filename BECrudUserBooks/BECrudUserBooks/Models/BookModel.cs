using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BECrudUserBooks.Models
{
    public class BookModel
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public int NumberOfPages { get; set; }
        
    }
}
