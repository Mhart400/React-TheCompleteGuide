import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";
import { load } from "signal-exit";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const url = "https://learnreact1-f6c9e-default-rtdb.firebaseio.com/meals.json";

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const x in responseData) {
        loadedMeals.push({
          id: x,
          name: responseData[x].name,
          description: responseData[x].description,
          price: responseData[x].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
    
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>LOADING...</p>
      </section>
    );
  }

  if (httpError) {
    return <section>
      <p className={classes.MealsError}>{httpError}</p>
    </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
