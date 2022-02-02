using Microsoft.EntityFrameworkCore;

class PatientDbContext : DbContext {
    public PatientDbContext(DbContextOptions options) : base(options) {

    }

     protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Patient>()
            .ToTable("Patients");
    }

    public DbSet<Patient> Patients {get; set;}
    
}