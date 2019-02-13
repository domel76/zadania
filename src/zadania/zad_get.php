<?php
    header('Content-type:application/json;charset=utf-8');
    require_once('zad_util.php');
    $conn = polacz();
    $data = $_GET['data'];
    if (czy_jest_data($conn, $data)) {
      $zadania = pobierz($conn, $data);
      echo $zadania;
    } else {
      echo sprintf($odpowiedz, $data);
    }
    rozlacz($conn);
?>
