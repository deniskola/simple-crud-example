using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class QuotesController : BaseApiController
    {
        private readonly DataContext _context;
        public QuotesController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Quote>>> GetQuotes()
        {
            return await _context.Quotes.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Quote>> GetActivity(Guid id)
        {
            return await _context.Quotes.FindAsync(id);
        }
    }
}