using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<PatientDbContext>(options => options.UseInMemoryDatabase("Patients"));

const string eCareOrigin = "e-care-web-origin";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: eCareOrigin,
    builder =>
    {
        builder.WithOrigins("http://localhost:3000",
                            "http://localhost");
    });
});

var app = builder.Build();
app.UseCors(builder => {
    builder.AllowAnyOrigin();
    builder.AllowAnyMethod();
    builder.AllowAnyHeader();
});

app.MapGet("/patients", async (PatientDbContext dbContext)
    => await dbContext.Patients.ToListAsync());

app.MapGet("/patients/{id}", async (int id, PatientDbContext dbContext)
    => await dbContext.Patients.FirstOrDefaultAsync(e => e.Id == id));

app.MapPost("/patients", async (Patient patient, PatientDbContext dbContext) =>
{   
    patient.CreatedAt = patient.UpdatedAt = DateTime.Now;
    dbContext.Patients.Add(patient);
    await dbContext.SaveChangesAsync();
    return patient;
}).RequireCors(eCareOrigin);

app.MapPut("/patients/{id}", async (int id, Patient patient, PatientDbContext dbContext) =>
{
    Patient? found = await dbContext.Patients.FindAsync(id);
    if(found != null) {
        found.Name = patient.Name;
        found.Celphone = patient.Celphone;
        found.DateOfBirth = patient.DateOfBirth;
        found.Gender = patient.Gender;
        found.Rg = patient.Rg;
        found.Cpf = patient.Cpf;
        found.Email = patient.Email;
        found.Status = patient.Status;
        found.Address = patient.Address;
        found.UpdatedAt = DateTime.Now;
        await dbContext.SaveChangesAsync();
    }
    return patient;
});

app.MapDelete("/patients/{id}", async (int id, PatientDbContext dbContext) => {
    Patient? found = await dbContext.Patients.FirstOrDefaultAsync((e) => e.Id == id);
    if(found != null) {
        dbContext.Patients.Remove(found);
        await dbContext.SaveChangesAsync();

    }
    return new { removed = true };
});

app.Run();
