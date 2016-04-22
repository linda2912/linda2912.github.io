<?php  
$light = $_GET['light'];
if($light == "on") {  
  $file = fopen("output.txt", "w") or die("can't open file");
  fwrite($file, 'on');
  fclose($file);
} 
else if ($light == "off") {  
  $file = fopen("output.txt", "w") or die("can't open file");
  fwrite($file, 'off');
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
                padding: 3em 0;
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
                width: 10em;
                font-family: "Lato";
                font-size: 2em;
                background-color: white;
                border-radius: 10px;
                padding: .5em;
            }
            
            .on, .aOn {
                color: #2ecc71;
            }
            .off, .aOff {
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
            button {
                margin: .4em .2em;
                cursor: pointer;
            }
            .history {
                color: white;
                border-bottom: 3px solid white;
                font-size: 1.3em;
                padding-bottom: .2em;
            }
            .history:hover {
                border-bottom: 5px solid white;
                transition: all ease 50ms;  
            }
           
        </style>
    </head>
    <body>

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

    <h1>Check je plantje</h1>

    <?php
        if($light=="HIGH") {
            echo("Je plantjes is 1cm");
        }
        else if ($light=="off") {
            echo("Turn LED off.");
        }
        else {
            echo ("Do something.");
        }
    ?>
    
    <h2>Geschiedenis plantje</h2>

        <div>
            <button id="off-linda" class="off"><a href="?light=off" class="aOff">Click off Linda</a></button>
            <button id="on-linda" class="on"><a href="?light=on" class="aOn">Click on Linda</a></button>
        </div>

        
    
        
    
    
    <div class="turn">
        <a href="output.txt" class="history">Check history</a>
    </div>

    <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
    <script src="xhr.js"></script>
 
    </body>
</html>







