<?php header('Access-Control-Allow-Origin: *');?>

<?php  
$light = $_GET['light'];
if($light == "on") {  
    $file = fopen("lampje.txt", "w") or die("can't open file");
    fwrite($file, '1');
    fclose($file);
} 
else if ($light == "off") {  
    $file = fopen("lampje.txt", "w") or die("can't open file");
    fwrite($file, '0');
    fclose($file);
}
?>
<html>
    <head>
        <style>
            body {
                background-color: #2c3e50;
                background-image: -webkit-linear-gradient(top left, #1abc9c, #3498db 100%);
                background-image: -o-linear-gradient(top left, #1abc9c, #3498db 100%);
                background-image: linear-gradient(to bottom right, #1abc9c, #3498db 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                padding: 10em 0;
            }
            h1 {
                font-family: "Lato";
                color: white;
                width: 100vw;
                text-align: center;
            }
            .off, .on {
                border: none;
                border-bottom: 5px solid #ecf0f1;
                width: 4em;
                font-family: "Lato";
                font-size: 2em;
                background-color: white;
                border-radius: 10px;
                padding: .5em;
            }
            .on {
                color: #2ecc71;
            }
            .off {
                color: #e74c3c;
            }
            
            .on:focus {
                border-bottom: none;
                transform: translateY(5px);
            }
            .off:focus {
                border-bottom: none;
                transform: translateY(5px);
            }
            a {
                text-decoration: none;
                margin: .5em;
            }
            .turn {
                font-family: 'Lato';
                color: white;
                width: 100%;
                text-align: center;
            }

        </style>
    </head>
    <body>
        <h1>Turn the lights!</h1>
        <a href="?light=on" class="on">Turn On</a>  
        <a href="?light=off" class="off">Turn Off</a>  
        <div class="turn">  
            <?php
                if($light=="on") {
                    echo("Turn LED on.");
                }
                else if ($light=="off") {
                    echo("Turn LED off.");
                }
                else {
                    echo ("Do something.");
                }
            ?>
        </div>              
    </body>
</html>







