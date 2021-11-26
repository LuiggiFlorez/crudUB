using BECrudUserBooks.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BECrudUserBooks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly AplicationDbContext _context;
        public BookController(AplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<BookController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listBooks = await _context.Book.ToListAsync();
                return Ok(listBooks);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // GET api/<BookController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var Book = await _context.Book.FindAsync(id);

                if (Book == null)
                {
                    return NotFound();
                }

                return Ok(Book);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<BookController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] BookModel Book)
        {

            try
            {

                _context.Add(Book);
                await _context.SaveChangesAsync();

                return Ok(Book);

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // PUT api/<BookController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] BookModel Book)
        {
            try
            {
                if (id != Book.Id)
                {
                    return BadRequest();
                }

                _context.Update(Book);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Book updated!" });

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // DELETE api/<BookController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {

                var Book = await _context.Book.FindAsync(id);

                if (Book == null)
                {
                    return NotFound();
                }

                _context.Book.Remove(Book);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Book deleted!" });

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }
    }
}
