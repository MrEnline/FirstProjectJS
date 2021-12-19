const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        
        personalMovieDB.count = +prompt("Сколько фильмов Вы посмотрели?", "");
        numberOfFilms = personalMovieDB.count;
    
        while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Какой фильм Вы посмотрели последним?", ""),
                  b = prompt("Насколько оцените его?", "");
            if (a != null && b != null && a != "" && b != "" && a.length < 50 && b) {
                personalMovieDB.movies[a] = b;
                console.log("Done");
            }
            else {
                i--;
                console.log("error");
            }
        }
    },
    
    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
   
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
   
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (genre == null || genre == "") {
                i--;
                console.log("Введите еще раз название жанра");
                continue;
            }
            personalMovieDB.genres[i] = genre;
        }

        // for (let i = 0; i < personalMovieDB.genres.length; i++) {
        //     console.log(`Ваш любимый жанр под номером ${i + 1} - ${personalMovieDB.genres[i]}`);            
        // }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр под номером ${i + 1} - ${item}`);
        })
    },

    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }
   
};