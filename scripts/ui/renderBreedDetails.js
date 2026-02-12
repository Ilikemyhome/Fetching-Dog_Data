export function renderBreedDetails(breed) {
    const detailsContainer = document.getElementById("breed-details");

    detailsContainer.innerHTML = `

        <h2>${breed.attributes.name}</h2>

        <p>${breed.attributes.description || "No description available."}</p>

        <p><strong>Life span:</strong> ${breed.attributes.life.min}–${breed.attributes.life.max} years</p>

        <p><strong>Male weight:</strong> ${breed.attributes.male_weight.min}–${breed.attributes.male_weight.max} lbs</p>

        <p><strong>Female weight:</strong> ${breed.attributes.female_weight.min}–${breed.attributes.female_weight.max} lbs</p>
        
    `;
}