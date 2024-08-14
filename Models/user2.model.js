const mongoose = require('mongoose');

const userModel = mongoose.Schema(
    {
        nomComplet:{
            type: String,
            required: true
        },
        phone:{
            type: Number,
            required: true,
            unique: true
        },
        adress:{
            type: String,
        }
    },
    {
        timestamps: true
    }
)

module.exports.UsersModel2 = mongoose.model('users2', userModel);