$(document).ready(function() {

	console.log ("ready");
		
	var searchText = $('.search-query'),
		searchButton = $('.search-btn'),
		movie = $('.movie'),
		progressBar = $('.progresser'),
		movieTitle = $('.movie-title'),
		moviePoster = $('.movie-poster'),
		plot = $('.plot'),
		genre = $('.genre'),
		director = $('.director'),
		cast = $('.cast'),
		runtime = $('.runtime'),
		releaseDate = $('.release-date'),
		rating = $('.rating');

	searchButton.on('click', function() {
		console.log (searchText.val());
		movie.addClass('hidden').css('opacity', '0');
		progressBar.removeClass('hidden');
		search();
	});

	function search() {

		var query = searchText.val();
		if (query.length<3) {
			searchText.val('').attr("placeholder", "please enter longer query");
			progressBar.addClass('hidden');
			return;
		}

		query = query.split(' ');
		query = query.join('+');
		//$.getJSON ("http://www.imdbapi.com/?t="+query, function(data) {
		$.getJSON ("./test/search.php?search="+query, function(data) {	
			console.log (data);
			if (data.Response=="False") {
				searchText.val('').attr("placeholder", "no results found");
				progressBar.addClass('hidden');
			}
			else {
				//movie.show('slow');
				//movie.removeClass('hidden');
				
				//movie.css('visibility', 'hidden');
				//progressBar.hide('slow');
				movieTitle.html(data.Title);
				if (data.Poster=="N/A") data.Poster="../assets/img/movie.jpg";
				moviePoster.attr('src', data.Poster);
				plot.html(data.Plot);
				genre.html(data.Genre);
				director.html(data.Director);
				cast.html(data.Actors);
				runtime.html(data.Runtime);
				releaseDate.html(data.Released);
				rating.html(data.Rated);
				moviePoster.on('load', function() {
					movie.removeClass('hidden').css('opacity','0');
					progressBar.addClass('hidden');

					movie.animate({
						'opacity': '1'
					}, 'slow');
					//movie.show('slow');
					//progressBar.hide('slow');
				});
			}
		});
	}
});	