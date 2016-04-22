$("#on-linda").click(function(){
    $.get("http://lindavandijkdesign.nl/iot/index.php",
    {
        light: "on"
    },
    function(data, status){
    	console.log(data + status)
    });
});
$("#off-linda").click(function(){
    $.get("http://lindavandijkdesign.nl/iot/index.php",
    {
        light: "off"
    },
    function(data, status){
    	console.log(data + status)
    });
});
