

namespace API.Entities;

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString(); // to generate identifier
    public required string DisplayName { get; set; }
    public required string Email { get; set; }
}
