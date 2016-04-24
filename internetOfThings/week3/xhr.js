$("#on-linda").click(function(){
    $.get("http://lindavandijkdesign.nl/iot/index.php",
    {
        light: "day"
    },
    function(data, status){
    	console.log(data + status)
    });
});
$("#off-linda").click(function(){
    $.get("http://lindavandijkdesign.nl/iot/index.php",
    {
        light: "night"
    },
    function(data, status){
    	console.log(data + status)
    });
});
