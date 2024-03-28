import React from "react";

const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.date}</p>
    </div>
  );
}

export default RecipeDetail;