
export function renderBreeds(breeds, onSelect) {
    const list = document.getElementById("breed-list");
    list.innerHTML = "";

    breeds.forEach(breed => {
        const item = document.createElement("li");
        item.textContent = breed.attributes.name;
        item.addEventListener("click", () => onSelect(breed.id));
        list.appendChild(item);
    });
}

