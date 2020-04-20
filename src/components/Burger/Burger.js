import React from "react";

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients) // ["salad", "bacon", "cheese", "meat"]
        .map(igKey => { 
            // e.g. if (cheese: 2) -> [...Array(2)] -> [ , ] 
            // -> <BurgerIngredient key={"cheese1"} type={"cheese"} />
            //    <BurgerIngredient key={"cheese2"} type={"cheese"} />
            return [...Array(props.ingredients[igKey])].map((_,index) => { 
                return <BurgerIngredient key={igKey + index} type={igKey} />;
            });
        }).reduce((flat, toFlatten) => { 
            return flat.concat(toFlatten); 
        }, []) // [] : initial flat value

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;