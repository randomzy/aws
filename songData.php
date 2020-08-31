<?php
include('config/db_connect.php');
$query = 'SELECT name FROM songsData ORDER BY last_modified';
$result = $db->query($query);