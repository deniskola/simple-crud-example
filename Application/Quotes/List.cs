using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace Application.Quotes
{
    public class List
    {
        public class Query : IRequest<List<Quote>> { }


        public class Handler : IRequestHandler<Query, List<Quote>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Quote>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Quotes.ToListAsync();
            }
        }
    }
}