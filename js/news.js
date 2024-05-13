$(function() {
	$.getJSON('http://flask-env.eba-g2wprrbz.us-west-2.elasticbeanstalk.com/news', function(result) {
		$.each(result, function(i, item) {
			var news_datetime = Date.parse(item['publishedAt'])
			var news_item = `<a href=${item['url']}> <h2>${item['title']} </h2></a>` +
				`<p> ${item['source']} | ${timeSince(news_datetime)} ago  </p>` +
				`<img src="${item['urlToImage']}" alt="news image" width="500" height="300"><br><hr><br>`
			$('#news-container').append(news_item)
		})
	})
})

function timeSince(timeStamp) {
  var now = new Date(),
    secondsPast = (now.getTime() - timeStamp) / 1000;
  if (secondsPast < 60) {
    return parseInt(secondsPast) + 's';
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + 'm';
  }
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + 'h';
  }
  if (secondsPast > 86400) {
    day = timeStamp.getDate();
    month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
    year = timeStamp.getFullYear() == now.getFullYear() ? "" : " " + timeStamp.getFullYear();
    return day + " " + month + year;
  }
}