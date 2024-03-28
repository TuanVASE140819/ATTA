import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
     const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/thuyanh.jpg",
      date: "2024-03-26",
    },
    {
      title: "THỰC ĐƠN NGÀY 26/07/2024",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/thuyanh.jpg",
      date: "2024-03-27",
    },
    {
      title: "THỰC ĐƠN NGÀY 27/07/2024",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/tuan.png",
        date: "2024-03-28",
    },
    {
      title: "THỰC ĐƠN NGÀY 28/07/2024",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/thuyanh.jpg",
      date: "2024-03-21",
    },
  ].sort(() => Math.random() - 0.5);

    
     const handleSearchChange = (event) => {
       setSearchTerm(event.target.value);
     };
  const filteredRecipes = recipes
    .filter((recipe) => (selectedDate ? recipe.date === selectedDate : true))
    .filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

const handleDateChange = (event) => {
  setSelectedDate(event.target.value);
  console.log(event.target.value);
};
    const handleRecipeClick = (recipe) => {
      navigate(`/recipes/${recipe.title}`, { state: { recipe } }); 
      
    };
     

const viewAllRecipes = () => {
  setSelectedDate(null);
};
  return (
    <div>
      <PreviousSearches />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Tìm kiếm món ăn..."
            onChange={handleSearchChange}
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
              outline: "none",
              transition: "box-shadow 0.3s ease",
              marginRight: "10px",
              marginBottom: "10px",
            }}
          />
        </div>
        <input
          type="date"
          onChange={handleDateChange}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
            outline: "none",
            transition: "box-shadow 0.3s ease",
            marginRight: "10px",
            marginBottom: "10px",
          }}
          onFocus={(e) => {
            e.target.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
          }}
          onBlur={(e) => {
            e.target.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.15)";
          }}
        />
        <button
          onClick={viewAllRecipes}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
            outline: "none",
            transition: "box-shadow 0.3s ease",
            marginRight: "10px",
            marginBottom: "10px",
          }}
        >
          Xem tất cả
        </button>
      </div>
      <div className="recipes-container">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe}
            onClick={() => handleRecipeClick(recipe)}
          />
        ))}
      </div>
    </div>
  );
}
