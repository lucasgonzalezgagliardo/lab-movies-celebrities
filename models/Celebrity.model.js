//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//crear celebritySchema
const celebritySchema = new Schema({
    // _id: {
    //     type: Schema.Types.ObjectId
    // },
    name: {
        type: String,
    },
    occupation: {
        type: String,
    },
    catchPhrase: {
        type: String,   
    },
}, {
    timestamps: true
});
//crear modelo a partir del movieSchema
const Celebrity = mongoose.model("Celebrity", celebritySchema); //collection campuses
//exportar modelo
module.exports = Celebrity;