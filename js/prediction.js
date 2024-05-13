$(function(){
  google.charts.load('current', {packages: ['corechart']});

  $("#submit_btn").click(function() {
  	var state = $("#state").val()
  	var day = $("#day").val()
  	if ($("#category option:selected").text() === 'positive cases daily increase') {
  		var category = 'positiveIncrease'
  	} else {
  		var category = 'deathIncrease'
  	}
  	$.get(`http://flask-env.eba-g2wprrbz.us-west-2.elasticbeanstalk.com/predict?state=${state}&day=${day}&category=${category}`, function(data, status) {
      drawChart($.parseJSON(data).map(x => [new Date(x[0] * 1000), x[1]]))
  	})
  })

  function drawChart(data) {
    var chartData = google.visualization.arrayToDataTable([
          ['Date', 'Cases'], ...data
        ]);

        var options = {
          title: 'Number of cases, in meters',
          legend: { position: 'none' },
        };

    // Instantiate and draw the chart.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(chartData, null);
  }
});