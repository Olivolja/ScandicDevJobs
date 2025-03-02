namespace ScandicDevJobApi.Models
{
    public class JobListing
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int SalaryRangeMin { get; set; }
        public int SalaryRangeMax { get; set; }
        public User Owner { get; set; }

        // Many-to-Many Relationship
        //public List<Tag> Tags { get; set; }

    }
}
