<?php
require('db_setup.php');

$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if($db->connect_error){
    die('Database error:' .$db->connect_error);
}