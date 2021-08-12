using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Quotes;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class QuotesController : BaseApiController
    {
        private readonly IMediator _mediator;
        public QuotesController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet]
        public async Task<ActionResult<List<Quote>>> GetQuotes()
        {
            return await _mediator.Send(new List.Query());
        }

        // [HttpGet("{id}")]
        // public async Task<ActionResult<Quote>> GetActivity(Guid id)
        // {
        //     return await _context.Quotes.FindAsync(id);
        // }
    }
}