using Microsoft.EntityFrameworkCore;

class PatientDbContext : DbContext {
    public PatientDbContext(DbContextOptions options) : base(options) {

    }

    public DbSet<Patient> Patients {get; set;}
}