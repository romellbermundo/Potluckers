import React, { useState } from "react";
import "./recipecard.css";
import PopupRecipe from "./PopupRecipe";

function RecipeCard({ recipe }) {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div style={{ width: "310px", marginBottom: "20px" }} className="cardR">
        <div className="cardR__side cardR__side--front">
          <div
            className="cardR__picture"
            style={{
              backgroundImage: `url(${recipe.image})`,
              backgroundSize: "cover",
              margin: "-20px -20px 0 -20px",
            }}
          >
            &nbsp;
          </div>
          <h4 className="cardR__heading">
            <span className="cardR__heading-span cardR__heading-span--1">
              {recipe.title}
            </span>
          </h4>
          <div className="cardR__details">
            <ul>
              <li>
                🍽️<b>Servings:</b> {recipe.servings}
              </li>
              <li>
                ⏰<b>Ready in:</b> {recipe.readyInMinutes}mins
              </li>

              {recipe.cuisines.length > 0 ? (
                <li>
                  <b>Cuisines:</b> {recipe.cuisines.join(", ")}
                </li>
              ) : (
                <></>
              )}

              {recipe.dishTypes.length > 0 ? (
                <li>
                  <b>Type:</b> {recipe.dishTypes.join(", ")}
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
        <div className="cardR__side cardR__side--back-1">
          <div className="cardR__cta">
            <a onClick={() => setButtonPopup(true)} className="btn btn--white">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <PopupRecipe
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        id={recipe.id}
      />
    </>
  );
}

export default RecipeCard;
