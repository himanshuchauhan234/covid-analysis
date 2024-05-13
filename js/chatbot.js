$(function(){
  $("#submit_btn").click(function() {
  	var question = $("#question").val()
  	$.get("http://flask-env.eba-g2wprrbz.us-west-2.elasticbeanstalk.com//chatbot?question=" + question, function(data, status) {
  		$("#answer").text(data)
  	})
  })
});