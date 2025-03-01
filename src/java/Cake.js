async function main(){
    const recipes = await getData()
    const ul = document.querySelector(".Info")
    for (const Recipe of recipes) {
        ul.innerHTML += `<p>${Recipe.name}</p>`;
    }
}
async function getData(){
    const res = await fetch("java/Recipes.json")
    const data = await res.json();
    return data;
}
main();