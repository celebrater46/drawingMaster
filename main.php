<?php

ini_set( 'display_errors', 1 );
error_reporting(E_ALL);

//$result = glob('./img/*');
//var_dump($result);

// Test
//echo('種類: ' . $_REQUEST['mode'] . PHP_EOL);
//echo('間隔: ' . $_REQUEST['interval'] . PHP_EOL);

$landscapes = glob('./img/landscapes/*');
$animals = glob('./img/animals/*');
$vehicles = glob('./img/vehicles/*');
$allPhotos = array_merge($landscapes, $animals, $vehicles);
//var_dump($landscapes);
//var_dump($animals);
//var_dump($vehicles);
var_dump($allPhotos);


//die('{"items": [{ "id": 1, "name": "Apples",  "price": "$2" }, { "id": 2, "name": "Peaches", "price": "$5" }]}');