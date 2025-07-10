type Movie = {
    readonly title: string,
    year: number,
    [key: string | number] : string | number | boolean
};

type Movies = {
    [key: string] : Movie
};

let movies = {
    movie1 : {
        title: "A Origem",
        year: 2010,
        isFavorite: true,
        genre: "ficção cientifica",
        director: "Christopher Nolan"
    },
    movie2 : {
        title: "Scott Pilgrim",
        year: 2010,
        isFavorite: true,
        genre: "ação/fantasia",
        director: "Edgar Wright"
    },
    movie3 : {
        title: "Donnie Darko",
        year: 2001,
        isFavorite: false,
        genre: "suspense",
    }
};

export function showMovies(movies: Movies){
    console.log(movies)
};


// read only aplicado apenas no parametro e não no objeto, sendo assim ainda é possível alterar 
// para evitar alteração mesmo fora da função usar type anotation.
//movies.movie1.title = "mama"

showMovies(movies)