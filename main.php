<?php

ini_set( 'display_errors', 1 );
error_reporting(E_ALL);

//$result = glob('./img/*');
//var_dump($result);

// Test
//echo('種類: ' . $_REQUEST['mode'] . PHP_EOL);
//echo('間隔: ' . $_REQUEST['interval'] . PHP_EOL);

$result1 = glob('./img/test1/*');
$result2 = glob('./img/test2/*');
var_dump($result1);
var_dump($result2);

die('{"items": [{ "id": 1, "name": "Apples",  "price": "$2" }, { "id": 2, "name": "Peaches", "price": "$5" }]}');