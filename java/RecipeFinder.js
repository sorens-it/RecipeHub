async function main(){
    try {
      const element = document.getElementById('recipeName');
      const className = element.className; // Returns "myClass"
      const response = await fetch('java/Recipes.json'); // Fetch the JSON file
      const recipes = await response.json();
    
        // Example: Accessing and displaying recipe data
      const recipeName = className; // Recipe to access
    
      const foundRecipe = recipes.find(recipe => recipe.name === recipeName);
    
        if (foundRecipe) {
          document.getElementById('recipeName').textContent = foundRecipe.name;
    
          let ingredientsList = "<ul>";
          foundRecipe.ingredients.forEach(ingredient => {
            ingredientsList += `<li>${ingredient.quantity} ${ingredient.name} (${ingredient.type})</li>`;
          });
          ingredientsList += "</ul>";
          document.getElementById('ingredients').innerHTML = ingredientsList;
    
          let stepsList = "<ol>";
          foundRecipe.steps.forEach(step => {
            stepsList += `<li>${step}</li>`;
          });
          stepsList += "</ol>";
          document.getElementById('steps').innerHTML = stepsList;
    
          document.getElementById('image').src = foundRecipe.imageURL;
          document.getElementById('originalURL').href = foundRecipe.originalURL;
          document.getElementById('originalURL').textContent = "The Original Recipe";
    
        } else {
          document.getElementById('recipeName').textContent = "Recipe not found.";
        }
    
      } catch (error) {
        console.error('Error loading recipes:', error);
        document.getElementById('recipeName').textContent = "Error loading recipe data.";
      }
    }
async function getData(){
    const res = await fetch("java/Recipes.json")
    const data = await res.json();
    return data;
}
document.addEventListener('DOMContentLoaded', main);