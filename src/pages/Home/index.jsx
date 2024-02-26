import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { api } from "../../services/api";
import { Card } from "../../components/Card";

import { Header } from "../../components/Header";

export const Home = () => {

    const [recipes, setRecipes] = useState([]);
    const [searchParams] = useSearchParams()
    console.log(searchParams)

    useEffect(() => {
        async function getRecipes() {
            const response = await api.get("recipes" , {
                params: {
                    name_like: searchParams.get('search') || ''
                }
            });
            
            setRecipes(response.data);
        }

        getRecipes();
    }, [searchParams.get('search')]);


    return (
        <main>
            <section>
                <Header/>
                <Outlet/>
                <h1>Test de la page home</h1>
                <ul>
                    {recipes.map((recipe) => (

                       <Card key={recipe.id} recipe={recipe}/>

                    ))}
                </ul>
            </section>
        </main>
    )
}