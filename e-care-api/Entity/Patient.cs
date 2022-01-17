using System.ComponentModel.DataAnnotations;

class Patient {
    [Key]
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Celphone { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public string? Gender { get; set; }
    public string? Rg { get; set; }
    public string? Cpf { get; set; }
    public string? Email { get; set; }
    public int? Status { get; set; }
    public string? Address { get; set; }
    public DateTime? CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
}