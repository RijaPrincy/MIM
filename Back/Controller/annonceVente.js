var AnnonceVente = require('../Model/annonceModel');
const jwt = require('jsonwebtoken');
const fs = require('fs');


module.exports.image = (req, res) => {
    try {
        let a = fs.readFileSync('./Controller/public/' + req.params.im + ".jpg")
        res.write(a)
        res.end()
    } catch (e) {
        console.log("tsy lasa le sary", e.stack);
    }
}

module.exports.venteImm = function (req, res) {

    var pays = req.body.pays,
        codePostale = req.body.codePostale,
        commune = req.body.commune,
        address = req.body.address,
        type = req.body.type,
        nbPiece = req.body.nbPiece,
        nbChambre = req.body.nbChambre,
        surfaceTerrain = req.body.surfaceTerrain,
        caracteristique = req.body.caracteristique,
        prix = req.body.prix,
        description = req.body.description,
        image = req.body.image,
        idPoster = req.body.idPoster,
        typeV=req.body.typeV //location ou 
        

    console.log("file", req.files);
    var imageFile = req.files.file;



    console.log(req.body.pays);


    if (typeV && pays && commune && type && nbPiece && surfaceTerrain && caracteristique && prix && description && idPoster) {

        jwt.verify(req.token, 'test', (err, authData) => {
            if (err) {
                console.log("forbidden2", req.token);

                res.sendStatus(403);
            } else {

                const articles = new AnnonceVente({date:new Date(), typeV,pays, codePostale, commune, address, type, nbPiece, nbChambre, surfaceTerrain, caracteristique, prix, description, image, idPoster });
                articles.save()
                    .then((note) => {
                        imageFile.mv(`${__dirname}/public/${image}.jpg`, function (err) {
                            if (err) {
                                return res.status(500).send(err);
                            }
                        });
                        res.json({
                            message: 'Post created...',
                            authData,
                            note
                        });

                    })
                    .catch(e => {
                        console.log(e);

                        res.status(500).send({ mes: e.mes || "erreur" })
                    })



            }
        });




    } else {
        console.log(req.file);
        res.send("not ok")
    }

}






module.exports.updateVenteIm = function (req, res) {

    var pays = req.body.pays,
        codePostale = req.body.codePostale,
        commune = req.body.commune,
        address = req.body.address,
        type = req.body.type,
        nbPiece = req.body.nbPiece,
        nbChambre = req.body.nbChambre,
        surfaceTerrain = req.body.surfaceTerrain,
        caracteristique = req.body.caracteristique,
        prix = req.body.prix,
        description = req.body.description,
        image = req.body.image,
        idPoster = req.body.idPoster


    var imageFile = req.files.file;
    console.log(req.files.file.length);




    if (pays && commune && type && nbPiece && surfaceTerrain && caracteristique && prix && description && idPoster) {

        jwt.verify(req.token, 'test', (err, authData) => {
            if (err) {
                console.log("forbidden2", req.token);

                res.sendStatus(403);
            } else {
                AnnonceVente.findByIdAndUpdate(req.params.id, { pays, codePostale, commune, address, type, nbPiece, nbChambre, surfaceTerrain, caracteristique, prix, description, image, idPoster })
                    .then((note) => {
                        imageFile.mv(`${__dirname}/public/${image}.jpg`, function (err) {
                            if (err) {
                                return res.status(500).send(err);
                            }
                        });
                        res.json({
                            message: 'Post created...',
                            authData,
                            note
                        });

                    })
                    .catch(e => {
                        console.log(e);

                        res.status(500).send({ mes: e.mes || "erreur" })
                    })

            }
        });



    } else {
       
        res.send("not ok")
    }

}


module.exports.deleteVenteIm = function (req, res) {
    jwt.verify(req.token, 'test', (err, authData) => {
        if (err) {
            console.log("forbidden2", req.token);

            res.sendStatus(403);
        } else {
            AnnonceVente.findByIdAndDelete(req.params.id)
                .then(re => {
                    console.log(re);
                    res.send(re)

                }).catch(er => {
                    console.log(er);

                })
        }

    })
}

module.exports.getVenteIm = function (req, res) {
    var id1 = req.body.id1,
        id2 = req.body.id2
    AnnonceVente.find({ "_id": { $gte: id1, $lt: id2 } })
        .then(re => {
            res.send(re)
        }).catch(er => {
            res.send(er)
        })

}

module.exports.getAll = function (req, res) {
    AnnonceVente.find()
        .then(re => {
            res.send(re)
        }).catch(er => {
            res.send(er)
        })

}

module.exports.getOne = function (req, res) {
    AnnonceVente.findById(req.params.id)
        .then(re => {
            res.send(re)
        }).catch(er => {
            res.send(er)
        })

}