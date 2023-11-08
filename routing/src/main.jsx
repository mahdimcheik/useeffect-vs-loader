import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import axios from 'axios'
import './index.css'
import Page1 from './pages/page1';
import Page3 from './pages/page3';
import Page2 from './pages/Page2';
import App from './App';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2/:id",
        element: <Page2	 />,
        loader: async ({params}) => {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
          );
          console.log(response.data.meals.find(ele => ele.idMeal === params.id));
          return {response: response.data.meals.find(ele => ele.idMeal === params.id)}
        }
      },
      {
        path: "/page3",
        element: <Page3 />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider  router={router}/>);


