<?php

ini_set( 'display_errors', 1 );
error_reporting(E_ALL);

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
    }
}

$listTemp = getList($_REQUEST["mode"]);
//$list = [];
foreach($listTemp as $item) {
//    $result = $item;
//    $result = str_replace("./", "", $item);
//    $list[] = $item;
//    echo($result . PHP_EOL);
    echo($item . PHP_EOL);
}

//die('{"items": [{ "id": 1, "name": "Apples",  "price": "$2" }, { "id": 2, "name": "Peaches", "price": "$5" }]}');