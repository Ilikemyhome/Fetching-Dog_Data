export function renderFacts(facts) {
  const container = document.getElementById("facts");
  container.innerHTML = facts
    .map(fact => `<p>• ${fact.attributes.body}</p>`)
    .join("");
}