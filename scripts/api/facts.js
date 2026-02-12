export async function getDogFacts() {
    const response = await fetch("https://dogapi.dog/api/v2/facts");
    if (!response.ok) {
        throw new Error("Failed to fetch dog facts");
    }
    const json = await response.json();
    return json.data;
}