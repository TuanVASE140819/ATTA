import CustomImage from "./CustomImage"
import { Link } from "react-router-dom";
export default function RecipeCard({recipe}){
    return (
      <div className="recipe-card">
        <CustomImage imgSrc={recipe.image} pt="65%" />
        <div className="recipe-card-info">
          <img className="auther-img" src={recipe.authorImg} alt="" />
          <p className="recipe-title">{recipe.title}</p>
          {/* <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
          <Link className="view-btn" to={`/recipe/${recipe.title}`}>
            VIEW RECIPE
          </Link>
        </div>
      </div>
    );
}