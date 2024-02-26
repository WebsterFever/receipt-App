import { Link } from "react-router-dom";
import { Container } from "./styles";

export const Card = ({recipe}) => {
    return (
        <Container>
            <Link to={`${recipe.id}`}>
                <img src={recipe.image} alt={recipe.category}/>
                <span>{recipe.category}</span>
                <span>{recipe.title}</span>
            </Link>
        </Container>
    )
}