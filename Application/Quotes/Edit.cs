using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Quotes
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Quote Quote { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var quote = await _context.Quotes.FindAsync(request.Quote.Id);

                quote.Paragraph = request.Quote.Paragraph ?? quote.Paragraph;
                quote.Date = request.Quote.Date;

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}