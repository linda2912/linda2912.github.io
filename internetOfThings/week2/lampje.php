<?php
if(isset($_POST['on']))
{
        $file = 'lampje.txt';
        $previous = file_get_contents($file);
        file_put_contents($file, '1');
    }
?>

<?php
if(isset($_POST['off']))
{
        $file = 'lampje.txt';
        $previous = file_get_contents($file);
        file_put_contents($file, '0');
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
            padding: 10em;
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
    </style>
</head>
	<body>
    <h1>Turn the light on!</h1>
		<form action="" method="post">
        
			<?php echo $message; ?>
			<input type="submit" name="on" value="On" class="on" />
			<input type="submit" name="off" value="Off" class="off" />
		</form>    
	</body>
</html>