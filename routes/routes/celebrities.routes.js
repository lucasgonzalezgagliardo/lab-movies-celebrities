// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
/* GET home page */
router.get("/celebrities/create", (req, res, next) => {
  
        res.render("celebrities/new-celebrity", data);
    })

// router.get("/add", (req, res, next)=>{
//     res.render("movieadd");
// })
// router.post("/add", (req, res, next)=>{
//     let movie = {
//         title: req.body.titulo,
//         year: req.body.year,
//         director: req.body.director
//     };
//     Movie.create(movie)
//     .then(result => {
//         console.log("result: ",result);
//         // res.send(result);
//         res.redirect(result._id);      //?
//     })
//     .catch(err => next(err))
// })



module.exports = router;