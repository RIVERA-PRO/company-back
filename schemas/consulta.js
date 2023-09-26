import Joi from "joi"

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'El nombre debe tener al menos 3 caracteres',
                'string.empty': 'El nombre no puede estar vacío',
                'any.required': 'Se requiere un nombre'
            },
        ),

    email: Joi
        .string()
        .required()
        .min(8)
        .email({ minDomainSegments: 2 })
        .messages(
            {
                'string.min': 'El correo electrónico debe tener al menos 8 caracteres',
                'string.empty': 'El correo electrónico no puede estar vacío',
                'any.required': 'Se requiere un correo electrónico',
                'string.email': 'Es necesario un correo electrónico válido'
            }
        ),

    question: Joi
        .string()
        .required()
        .min(3)
        .max(500)
        .messages(
            {
                'string.min': 'La consulta debe tener al menos 3 caracteres',
                'string.max': 'La consulta no puede exceder los 500 caracteres'
            }
        ),

})
export default schema