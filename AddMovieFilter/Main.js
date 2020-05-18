const movieInformationBtn = document.querySelector(".submitting-form");
const movieSearchBtn = document.querySelector(".submitting-movie-search");


const movies = [];

let renderMovies = () =>{

    if(movies.length !== 0){
        movies.forEach((element =>{
            const movieElement = document.createElement("li");
            let text = element.title + ": " + element.genre + " | " + element.rating;
        }))
    }
}

let addMovieHandler = () =>{
    let movieRating = document.querySelector(".movie-rating");
    let movieTitle = document.querySelector(".movie-name");
    let movieGenre = document.querySelector(".movie-genre");

    let newMovie = {
        title: movieTitle.value,
        rating: movieRating.value,
        genre: movieGenre.value
    }
    
}
movieInformationBtn.addEventListener("click", addMovieHandler);


