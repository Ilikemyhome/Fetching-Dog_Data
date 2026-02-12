export async function getDogGroups() {
    const response = await fetch("https://dogapi.dog/api/v2/groups");
    if (!response.ok) {
        throw new Error("Failed to fetch dog groups");
    }
    const json = await response.json();
    return json.data;
}