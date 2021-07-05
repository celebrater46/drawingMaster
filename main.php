<?php

ini_set( 'display_errors', 1 );
error_reporting(E_ALL);

//$result = glob('./img/*');
//var_dump($result);

// Test
//echo('種類: ' . $_REQUEST['mode'] . PHP_EOL);
//echo('間隔: ' . $_REQUEST['interval'] . PHP_EOL);

function getList($pic) {
    $landscapes = glob('./img/landscapes/*');
    $animals = glob('./img/animals/*');
    $vehicles = glob('./img/vehicles/*');
    switch($pic) {
        case "landscapes":
            return $landscapes;
        case "animals":
            return $animals;
        case "vehicles":
            return $vehicles;
        case "all":
            return array_merge($landscapes, $animals, $vehicles);
        default:
//            throw new Exception("Invalid mode value");
    }
}

$list = getList($_REQUEST["mode"]);
//$list = glob('./img/landscapes/*');



//$allPhotos = array_merge($landscapes, $animals, $vehicles);
//var_dump($landscapes);
//var_dump($animals);
//var_dump($vehicles);
//var_dump($allPhotos);
//var_dump($list);
//echo($list[0]);
//echo("Hello World");
foreach($list as $item) {
    echo($item . PHP_EOL);
}
//echo($_REQUEST["mode"]);

//die('{"items": [{ "id": 1, "name": "Apples",  "price": "$2" }, { "id": 2, "name": "Peaches", "price": "$5" }]}');