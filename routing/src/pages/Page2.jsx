import { useLoaderData } from "react-router-dom";
export default function Page2(){
    const {response} = useLoaderData();
    return (<div>
        <h1>Page 2</h1>
        <p>Message from page 2 {response.strMeal}</p>
    </div>)}