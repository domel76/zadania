<?php
    require_once('zad_util.php');
    $conn = polacz();
    zapisz($conn, $_GET['data'], file_get_contents("php://input"));
    rozlacz($conn);
?>
