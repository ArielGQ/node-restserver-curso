const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


// []
// {}

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: 'El {VALUE} no es un rol valido'
}


let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    }, //no es obligatoria
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos,
    }, //default: 'USER_ROLE'
    estado: {
        type: Boolean,
        default: true
    }, //Boolean
    google: {
        type: Boolean,
        default: false
    }, //Boolean
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let UserObject = user.toObject();
    delete UserObject.password;

    return UserObject;
}

usuarioSchema.plugin(uniqueValidator, { message: 'El {PATH} debe de ser único' })


module.exports = mongoose.model('Usuario', usuarioSchema);