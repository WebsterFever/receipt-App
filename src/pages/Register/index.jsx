import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { zodResolver } from "@hookform/resolvers/zod";
import {schema} from "./validator";



export const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });
    const navigate = useNavigate();

    const handleRegister = async (data) => {
        try {
            console.log(data)
             await api.post('/recipes', data)
             navigate('/home')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <section>
                <h1>Register</h1>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset>
                        <legend>Register</legend>
                        <Input
                            type="text"
                            id="name"
                            label="name"
                            placeholder="name"
                            error={errors.name?.message}
                            {...register("name")} />
                       

                        <Input
                            type="text"
                            id="category"
                            label="category"
                            placeholder="category"
                            error={errors.category?.message}
                            {...register("category")} />
                         
                        <Input
                            type="text"
                            id="description"
                            label="description"
                            placeholder="description"
                            error={errors.description?.message}
                            {...register("description")} />
                        
                        <Input
                            type="text"
                            id="image"
                            label="image"
                            placeholder="ex : https://image.com"
                            error={errors.image?.message}
                            {...register("image")} />
                    
                        <Input
                            type="text"
                            id="published"
                            label="published"
                            placeholder="ex : may 2024"
                            error={errors.published?.message}
                            {...register("published")} />
                            

                        <Input
                            type="number"
                            id="numberPlate"
                            label="N. of plates"
                            placeholder="N. of plates"
                            error={errors.numberPlate?.message}
                            {...register("numberPlate")} />
            

                    </fieldset>

                    <button>Save</button>





                </form>
            </section>
        </main>
    )
}