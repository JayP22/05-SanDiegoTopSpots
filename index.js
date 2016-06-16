$.getJSON('topspot.json', function(data) {
		var r = [],
		myRow = '';
		r[0] = '<tr><th>Name</th><th>Description</th><th>Location</th></tr>\n';
		for (var key = 0; key <= data.length - 1; key++) {
			myRow = '<tr><td>' + data[key].name + '</td><td class="nameinformation">' + data[key].description + '</td><td class="descriptioninformation">' + '<a href="https://www.google.com/maps?q=' + data[key].location + '"<button type="button" class="btn btn-info">GOOGLE MAPS</a></td></tr>';
			r.push(myRow);

		}
		$("#print").html(r.join(''));
});