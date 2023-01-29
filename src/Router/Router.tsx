import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home/Index";



export function Router (){


    return(

        <Routes>
            <Route path="/" element ={<DefaultLayout/>} >
                <Route path="/" element={<Home/>}/>
            </Route>
            
        </Routes>
    )
}