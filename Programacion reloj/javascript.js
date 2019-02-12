	function get_elapsed_time_string(total_seconds) {
	function pretty_time_string(num) {
    return ( num < 10 ? "0" : "" ) + num;
  }

	var hours = Math.floor(total_seconds / 3600);
	total_seconds = total_seconds % 3600;

	var minutes = Math.floor(total_seconds / 60);
	total_seconds = total_seconds % 60;

	var seconds = Math.floor(total_seconds);

  
  hours = pretty_time_string(hours);
  minutes = pretty_time_string(minutes);
  seconds = pretty_time_string(seconds);

  
  var currentTimeString = hours + ":" + minutes + ":" + seconds;

  return currentTimeString;
}

var elapsed_seconds = 0;
setInterval(function() {
  elapsed_seconds = elapsed_seconds + 1;
  $('#box_header').text(getdate(elapsed_seconds));
}, 1000);

function getdate(){
                var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
             if(s<10){
                 s = "0"+s;
             }

             if(m<10){
             	m = "0"+m	
             };

             if(h<10){
             	h = "0"+h	
             };

            $("h1").text(h+" : "+m+" : "+s);
             setTimeout(function(){getdate()}, 500);
            }

        $("button").click(getdate);