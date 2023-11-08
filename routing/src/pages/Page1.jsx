import { useEffect, useState } from "react";
import axios from 'axios'

// useEffect to fetch data at loading page 
export default function Page1() {
    const [items,setItems] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
      );
      setItems(response.data.meals);
      console.log(response.data.meals);
    }
    getData();
  }, []);
  return (
    <div>
      <h1>Page 1</h1>
      <p>Loading data at start using useEffect</p>
      <ul>
        {items && items.map(ele => (<li>{ele.strMeal}</li>))}
      </ul>
    </div>
  );
}
