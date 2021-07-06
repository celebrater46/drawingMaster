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
foreach($listTemp as $item) {
    echo($item . PHP_EOL);
}