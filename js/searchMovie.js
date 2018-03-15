$(document).ready(() => {
  $('#searchForm').on('submit',(e) => {
      let searchText = $('#searchText').val();
      getMovies(searchText); 
     e.preventDefault();   
  });
});

//below function is triggering search movie
function getMovies(searchText) {
    axios.get('http://www.omdbapi.com/?t='+searchText+'&apikey=cfab1cef')
    .then((response) => {
        console.log(response);
        let movieInfo = response.data;
        let movieoutput = `
        <div class="col-md">
        <div class="well text-center">
        <img id="poster" src="${movieInfo.Poster}">
        <h4>${movieInfo.Title}</h4>
        <a onclick="movieSelected('${movieInfo.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
        </div>
        </div>`;

    $('#movies').html(movieoutput);

    })
    .catch((err) => {
        console.log(err);

    }); }


    function movieSelected(id){
        sessionStorage.setItem('movieId', id);
        window.location.href = "movie.html";
        return false;
      }
  