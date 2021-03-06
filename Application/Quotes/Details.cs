using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Quotes
{
    public class Details
    {
        public class Query : IRequest<Quote>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Quote>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Quote> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Quotes.FindAsync(request.Id);
            }
        }
    }
}