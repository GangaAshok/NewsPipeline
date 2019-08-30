using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewsPipeline.Domain.Context;
using NewsPipeline.Domain.Entities;

namespace NewsPipeline.Services.Controllers
{
    [Route("api/newsfeed")]
    [ApiController]
    public class NewsFeedDetailsController : ControllerBase
    {
        private readonly NewsFeedDetailsContext _context;


        public NewsFeedDetailsController(NewsFeedDetailsContext context)
        {
            _context = context;
        }

        // GET: api/NewsFeedDetails
        [HttpGet]
        public IEnumerable<NewsFeedDetail> GetNewsFeedDetails()
        {
            return _context.NewsFeedDetails;
        }

        // GET: api/NewsFeedDetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetNewsFeedDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newsFeedDetail = await _context.NewsFeedDetails.FindAsync(id);

            if (newsFeedDetail == null)
            {
                return NotFound();
            }

            return Ok(newsFeedDetail);
        }

        // PUT: api/NewsFeedDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNewsFeedDetail([FromRoute] int id, [FromBody] NewsFeedDetail newsFeedDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != newsFeedDetail.NewsID)
            {
                return BadRequest();
            }

            _context.Entry(newsFeedDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewsFeedDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/NewsFeedDetails
        [HttpPost]
        public async Task<IActionResult> PostNewsFeedDetail([FromBody] NewsFeedDetail newsFeedDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

             _context.NewsFeedDetails.Add(newsFeedDetail);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/NewsFeedDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNewsFeedDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newsFeedDetail = await _context.NewsFeedDetails.FindAsync(id);
            if (newsFeedDetail == null)
            {
                return NotFound();
            }

            _context.NewsFeedDetails.Remove(newsFeedDetail);
            await _context.SaveChangesAsync();

            return Ok(newsFeedDetail);
        }

        private bool NewsFeedDetailExists(int id)
        {
            return _context.NewsFeedDetails.Any(e => e.NewsID == id);
        }
    }
}