import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {Link ,  useParams } from "react-router-dom"
import { Container } from "../Card/styles"; 

export const Preview = () =>{
   
    const { id } = useParams();

    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(recipes)

    useEffect(() => {
        async function getRecipes() {
            try {
                const response = await api.get(`recipes/${id}`);
                console.log(response.data);
                setRecipes(response.data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }

        }

        getRecipes()
    }, [id]);

    if(loading){
        return <p>Search for a food...</p>
    }

    if (!recipes) {
        return <p>there is no food </p>
    }


    return (
        <main>
            <section>
                <h1>Test de la Preview</h1>
                <Container>
                    <img src={recipes.image} alt={recipes.category} />
                    <Link to={`/info/${recipes.id}`}>More info</Link>
                </Container>

            </section>
        </main>
    )

       
    }