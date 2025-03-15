async function loadRecipeImages() {
    try {
      const response = await fetch('java/Recipes.json');
      const recipes = await response.json();
  
      const recipeList = document.getElementById('recipeList');
  
      if (recipeList) {
        const recipesToDisplay = recipes.slice(0, 9);
  
        recipesToDisplay.forEach(recipe => {
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          const img = document.createElement('img');
          const recipeName = document.createElement('p');
  
          img.src = recipe.imageURL;
          img.alt = recipe.name;
          img.style.maxWidth = '300px';
          img.style.margin = '10px';
  
          // Assuming you have HTML files named after your recipes (e.g., "Crock Pot Roast.html")
          link.href = recipe.name.replace(/ /g, '-') + '.html'; // Replace spaces with hyphens for filename
          link.appendChild(img);
  
          recipeName.textContent = recipe.name;
  
          listItem.appendChild(link);
          listItem.appendChild(recipeName);
          recipeList.appendChild(listItem);
        });
      } else {
        console.error("Error: recipeList element not found.");
      }
    } catch (error) {
      console.error('Error loading recipes:', error);
      if(document.getElementById('recipeList')){
        document.getElementById('recipeList').textContent = "Error loading recipe data.";
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadRecipeImages);