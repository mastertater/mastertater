$(document).ready(() => {
	$('._main').append(`
    <div id="slideshow">
      <div>
        <img src="http://farm6.static.flickr.com/5224/5658667829_2bb7d42a9c_m.jpg">
      </div>
      <div>
        <img src="http://farm6.static.flickr.com/5230/5638093881_a791e4f819_m.jpg">
      </div>
       <div>
        <img src="http://farm6.static.flickr.com/5230/5638093881_a791e4f819_m.jpg">
      </div>
    /div>

`);

	setInterval(() => {
		$('div').animate({ left: '250px' });
	}, 3000);
});
