const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var url = require('../Config/config')

var connection = mongoose.createConnection(url.url, {
    useNewUrlParser: true
  });
autoIncrement.initialize(connection);


const AnnonceVente = mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    pays:String,
    codePostale:String,
    commune:String,
    address:String,
    type:String,
    nbPiece:String,
    nbChambre:String,
    surfaceTerrain:String,
    caracteristique:String,
    prix:String,
    description:String,
    image:String,
    idPoster:String,
    typeV:String,
    date:String
    
}, {
    timestamps: true
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)

AnnonceVente.plugin(autoIncrement.plugin, 'AnnonceVente');
module.exports = mongoose.model('AnnonceVente',AnnonceVente);