$(function () {

    function generate_data() {
    	var x1 = Math.round(Math.random()*100)/100;
    	var x2 = Math.round(Math.random()*100)/100;
    	var x3 = Math.round(Math.random()*100)/100;
      
        var target;
    	if (x1 > 0.3) target = 1;
    	else target = 0;

    	return target + ' ' + x1 + ',' + x2 + ',' + x3;
    }

	$("#generate-send").click(function () {
		var data_row = generate_data();

		$.post("http://lsls.xvm.mit.edu:3000/", 
			{
				data_row:data_row
			},
			function(data) {
				console.log(data);
			});
		
		$("#data-list").prepend("<li>" + data_row + "</li>");
	});

});