import { getBreeds, getBreedByID } from "./api/breeds.js";
import { getDogFacts } from "./api/facts.js";
import { getDogGroups } from "./api/groups.js";

import { renderBreeds } from "./ui/renderBreeds.js";
import { renderBreedDetails } from "./ui/renderBreedDetails.js";
import { renderFacts } from "./ui/renderFacts.js";
import { renderGroups } from "./ui/renderGroups.js";

const toggle = document.getElementById("theme-toggle");


async function init() {
    try {

    const breeds = await getBreeds();
    renderBreeds(breeds, handleBreedSelection);

    const facts = await getDogFacts();
    renderFacts(facts);

    const groups = await getDogGroups();
    renderGroups(groups);   
        
    } catch (error) {
        console.error("Error initializing app:", error);

    }
    

}

async function handleBreedSelection(id) {
    
    try {
        const breedDetails = await getBreedByID(id);
        console.log("Breed Details:", breedDetails);
        renderBreedDetails(breedDetails);

        document.getElementById("breed-list").classList.add("hidden");
        document.getElementById("back-button").classList.remove("hidden");
   

    } catch (error) {
        console.error("Error handling breed selection:", error);
    }
}

document.getElementById("back-button").addEventListener("click", () => {
  document.getElementById("breed-list").classList.remove("hidden");


  document.getElementById("breed-details").innerHTML = "";
  document.getElementById("back-button").classList.add("hidden");
});
document.getElementById("back-button").classList.remove("hidden");


toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggle.textContent = 
    document.body.classList.contains("dark") 
      ? "Light Mode" 
      : "Dark Mode";
});

init();