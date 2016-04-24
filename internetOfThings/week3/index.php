<?php  
$light = $_GET['light'];
if($light == "day") {  
  $file = fopen("output.txt", "w") or die("can't open file");
  fwrite($file, 'day');
  fclose($file);
} 
else if ($light == "night") {  
  $file = fopen("output.txt", "w") or die("can't open file");
  fwrite($file, 'night');
  fclose($file);
}

// Get the first measurement of a value
function getFirstMeasurement($array, $value) {
    foreach ($array as $key => $measurement) {
        if ($measurement['plant'] === $value) {
            return $measurement;
        }
    } 
}

?>

<?php 
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
      
        $data = $_POST["plant"];

        $timestamp = new DateTime();
        $time = $timestamp->format("Y-m-d H:i:s");

        $message = array("time" => $time, "plant" => $data);

        $inp = file_get_contents("plant.json");
        $tempArray = json_decode($inp);
        array_push($tempArray, $message);
        $jsonData = json_encode($tempArray);
        file_put_contents("plant.json", $jsonData);
    }
?>

<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    </head>
    <body>

        <a href="http://lindavandijkdesign.nl/iot/eindopdracht"><h1>Check je plantje</h1></a>
        <?php 
            $getData = file_get_contents("plant.json");
            $array = json_decode($getData, true);
            $last = end($array);
            $height = $last["plant"];
            if ($height == "5") {
                echo "<div class=\"ready\"> Je kunt je plantje gaan verpotten! <img src=\"img/verpotten.png\"width=\"100\"></div>";
                
            }
        ?>
       
        <h2>Je plantje is op dit moment</h2>
        <div class="growed">
            <h3>
                <?php
                echo $height;  
                ?> cm
            </h3>
            <?php 
                if ($height == "1") {
                    echo "<img src=\"img/plant-01.png\" width=\"70\"height=\"180\">";
                }
                if ($height == "2") {
                    echo "<img src=\"img/plant-02.png\" width=\"70\"height=\"180\">";
                }
                if ($height == "3") {
                    echo "<img src=\"img/plant-03.png\" width=\"70\"height=\"180\">";
                }
                if ($height == "4") {
                    echo "<img src=\"img/plant-04.png\" width=\"70\"height=\"180\">";
                }
                if ($height == "5") {
                    echo "<img src=\"img/plant-05.png\" width=\"70\"height=\"180\">";
                }
            ?>
        </div>

        
        
        <h4>Geschiedenis plantje</h4>
        <hr/>

        <div class="history">
            <?php
                print "<div>";
                    $one = getFirstMeasurement($array, "1");
                    $height = $one["plant"];
                    $date = $one["time"];
           
                    print "<div class=\"height\">" . $height . "cm" . "</div>";
                    print "<div class=\"date\">" . $date . "</div>";
                print "</div>";

                print "<div>";
                    $two = getFirstMeasurement($array, "2");
                    $height = $two["plant"];
                    $date = $two["time"];
                    print "<div class=\"height\">" . $height . "cm" . "</div>";
                    print "<div class=\"date\">" . $date . "</div>";
                print "</div>";

                print "<div>";
                    $three = getFirstMeasurement($array, "3");
                    $height = $three["plant"];
                    $date = $three["time"];
                    print "<div class=\"height\">" . $height . "cm" . "</div>";
                    print "<div class=\"date\">" . $date . "</div>";
                print "</div>";

                print "<div>";
                    $four = getFirstMeasurement($array, "4");
                    $height = $four["plant"];
                    $date = $four["time"];
                    print "<div class=\"height\">" . $height . "cm" . "</div>";
                    print "<div class=\"date\">" . $date . "</div>";
                print "</div>";

                print "<div>";
                    $five = getFirstMeasurement($array, "5");
                    $height = $five["plant"];
                    $date = $five["time"];
                    print "<div class=\"height\">" . $height . "cm" . "</div>";
                    print "<div class=\"date\">" . $date . "</div>";
                print "</div>";
            ?>

        </div>
        

        <div class="buttons">
            <a href="?light=night" class="aOff"><button id="off-linda" class="off">Nachtstand</button></a>
            <a href="?light=day" class="aOn"><button id="on-linda" class="on">Dagstand</button></a>
        </div>
        
    </body>
</html>







