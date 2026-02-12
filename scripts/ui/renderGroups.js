export function renderGroups(groups) {
  const container = document.getElementById("groups");
  container.innerHTML = groups
    .map(group => `
      <p>
        <strong>${group.attributes.name}</strong>: 
        ${group.attributes.description || "No description available."}
      </p>
    `)
    .join("");
}