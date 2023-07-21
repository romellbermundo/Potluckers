// import React, { useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecipeById } from "../api/recipeAPIs";
import "./PopupRecipe.css";

function PopupRecipe(props) {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        console.log(props.id);
        const fetchedInformation = await getRecipeById(props.id);
        setRecipe(fetchedInformation);
      } catch (error) {
        console.log(error);
      }
    };
    if (props.trigger) {
      fetchRecipe();
    }

    return () => {};
  }, [props.trigger]);

  return props.trigger && recipe ? (
    <>
      <div className="popupR" id="popupR">
        <div className="popupR__content">
          <a onClick={() => props.setTrigger(false)} className="popupR__close">
            &times;
          </a>

          <div className="popupR__left">
            <img src={recipe.image} alt="Tour photo" className="popupR__img" />
          </div>

          <div className="popupR__right">
            <h2 className="heading-secondary u-margin-bottom-small">
              {recipe.title}
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Always A Hit &ndash; Add this item to your next potluck menu!
            </h3>
          </div>

          <div className="popupR__right">
            <h2>Instructions</h2>
            <p className="popupR__text">
              {recipe.analyzedInstructions[0].steps.map(
                (instructions, index) => (
                  <>
                    <p>
                      {index + 1}. {instructions.step}
                    </p>
                  </>
                )
              )}
            </p>
          </div>

          <div className="popupR__left_bottom">
            <h2>Ingredients</h2>
            {recipe.extendedIngredients.map((ingredients, index) => (
              <p>
                {index + 1}. {ingredients.name} -{" "}
                {ingredients.measures.metric.amount}{" "}
                {ingredients.measures.metric.unitLong}
              </p>
            ))}{" "}
          </div>
          {/* <div className="popupR__bottomlink">
            <Link to="/home" className="btn btn--green">
              Save to Favorites
            </Link>
          </div> */}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default PopupRecipe;
