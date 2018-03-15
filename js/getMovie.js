    
function getMovie(){

        movieId = sessionStorage.getItem('movieId');
        axios.get('http://www.omdbapi.com?i='+movieId+'&apikey=cfab1cef')
          .then((response) => {
            console.log(response);
            let movie = response.data;
            let output =`
    <div class="row">
                <div class="col-md-4">
                  <img src="${movie.Poster}" class="thumbnail">
                </div>
                
            <div class="col-md-8">
                <div> <h3 class="card-header">${movie.Title}</h3></div>
                <ul class="list-group">

                    <li class="list-group-item">

                            <strong><strong>IMDB Rating: </strong>${movie.Ratings[0].Value}</strong> 
                            <div class="progress">
                            <script> 
                                let imdbRateIs= "width: "+Math.round(100*${movie.Ratings[0].Value})+"%";
                                document.getElementById("imdbBar").style = imdbRateIs;
                            </script>
                                <div class="progress-bar progress-bar-striped bg-warning progress-bar-animated" id="imdbBar" role="progressbar" value="40" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                
                            <strong><strong>Rotten Tomatoes: </strong>${movie.Ratings[1].Value}</strong> 
                            <div class="progress">
                            <script> 
                                let rottenRateIs= "width: ${movie.Ratings[1].Value}";
                                document.getElementById("rottenBar").style = rottenRateIs;
                            </script>
                                <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" id="rottenBar" role="progressbar" value="40" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <strong><strong>Metacritic: </strong>${movie.Ratings[2].Value}</strong> 
                            <div class="progress">
                            <script> 
                                let metacriticRateIs= "width: " +(${movie.Ratings[2].Value} * 100 )+"%";
                                document.getElementById("metacriticBar").style = metacriticRateIs;
                            </script>
                                <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" id="metacriticBar" role="progressbar" value="40" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                    </li>
                    <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                    <li class="list-group-item"><strong>Year:</strong> ${movie.Year}</li>
                    <li class="list-group-item"><strong>Runtime:</strong> ${movie.Runtime}</li>
                    <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                    <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                    <li class="list-group-item"><strong>Awards:</strong> ${movie.Awards}</li>
                    <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>         
                </ul>
            </div>
    </div>

        <div class="row">
            <div class="col-md-12">
        <br>
                <div class="alert alert-dismissible alert-secondary" id="plot">
                    <button type="button" class="close" data-dismiss="alert" onclick="hidePlot()">&times;</button>
                    <h4 class="alert-heading">Plot</h4>
                    <p class="mb-0">${movie.Plot}</p>
                    <script> 
                        function hidePlot() {
                        var x = document.getElementById("plot");
                        if (x.style.display === "none") {
                        x.style.display = "block"; } 
                        else {
                        x.style.display = "none";}}
                    </script>
                </div>
            
            <div class="well">
                <hr>
                <div class="col-md-4">
                    <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                    <a href="index.html" class="btn btn-default">Go Back To Search</a>
                </div>
            </div>
        </div>
        </div>`;

            $('#movie').html(output);
           
          })
          .catch((err) => {
            console.log(err);
          });
      }

