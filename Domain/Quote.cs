using System;

namespace Domain
{
    public class Quote
    {
        public Guid Id { get; set; }
        public string Paragraph { get; set; }
        public DateTime Date { get; set; }

    }
}