export async function getBreeds() {
    const response = await fetch("https://dogapi.dog/api/v2/breeds");
    if (!response.ok) {
        throw new Error("Failed to fetch breeds");
    }
    const json = await response.json();
    return json.data;
    
}

export async function getBreedByID(id) {
    const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch breed by ID");
    }
    const json = await response.json();
    return json.data;
}