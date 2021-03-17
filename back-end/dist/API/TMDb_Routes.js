"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TMDb_Controller_1 = require("../API/TMDb_Controller");
var router = express_1.Router();
var genresList = new TMDb_Controller_1.ControllerGenres();
var moviesList = new TMDb_Controller_1.ControllerMovies();
router.get("/routeTest", function (request, response) {
    return response.json({
        message: "Its Working!"
    });
});
router.get("/genresList", genresList.getGenres);
router.get("/moviesList/:genre", moviesList.getMoviesByGenres);
exports.default = router;
