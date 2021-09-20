$(document).ready(() => {
	$('.nav').append(
		`
			<div class="nav-r1">
      	<a href="whatsup.html">Whats up</a>
				<a href="friends.html">friends</a>
				<a href="invites.html">Invites</a>
				<i id="home" class="fas fa-home"></i>
			</div>
			<div class="nav-r2">
				<a href="nightplan.html">night plan</a>
				<a href="nightout.html">night out</a>
				<a href="previous.html">previous</a>
				<i id="settings" class="fas fa-cog"></i>
			</div>
			<a href="home.html">Home</a>
		`,
	);
	$('#home').click(() => {
		$.get('/pages/home.html');
	});

	$('#settings').click(() => {
		alert('Settings has been clicked');
	});
});
