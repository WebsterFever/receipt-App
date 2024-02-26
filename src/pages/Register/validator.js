import * as z from 'zod';

 export const schema = z.object({
    name: z.string().nonempty('the name is obligartory'),
    image: z.string().url("must be an URL"),
    published: z.string().nonempty("the date is obligatory"),
    category: z.string().nonempty('the category is obligartory'),
    description: z.string().nonempty('the description is obligartory'),
    numberPlate: z.coerce.number().min(1, "must be a number")

})