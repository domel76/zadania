<?php
 require_once('zad_conf.php');

 $sql_cnt = 'select count(*) from zad_zadania where data_zadania = ?';
 $sql_sel = 'select zadania from zad_zadania where data_zadania = ?';
 $sql_del = 'delete from zad_zadania where data_zadania = ?';
 $sql_ins = 'insert into zad_zadania (data_zadania, zadania, data_audit, ip_host) values (?, ?, sysdate(), ?)';
 
 $odpowiedz = "{
      'data': '%s'
      'zasoby': [{ 'id': '0', 'ikona': 'fa-male', 'nazwa': '' }],
      'bags': [{ 'nazwa': '', 'osoby': [] }]
    }";
 
 function polacz() {
    global $servername, $username, $password, $database;
    $conn = new mysqli($servername, $username, $password, $database);
    return $conn;
 }

 function czy_jest_data($conn, $data){
    global $sql_cnt;
    $stmt = $conn->prepare($sql_cnt);
    $stmt->bind_param('s', $data);
    $stmt->execute();
    $stmt->bind_result($ile);
    $stmt->fetch();
    return ($ile > 0);
 }

 function pobierz($conn, $data) {
    global $sql_sel;
    $stmt = $conn->prepare($sql_sel);
    $stmt->bind_param('s', $data);
    $stmt->execute();
    $stmt->bind_result($zadanie);
    $stmt->fetch();
    return $zadanie;
 }

function zapisz($conn, $data, $zadanie) {
    global $sql_del, $sql_ins;
    if (czy_jest_data($conn, $data)) {
        $stmt = $conn->prepare($sql_del);
        $stmt->bind_param('s', $data);
        $stmt->execute();
    }
    $stmt = $conn->prepare($sql_ins);
    $stmt->bind_param('sss', $data, $zadanie, $_SERVER["REMOTE_ADDR"]);
    $stmt->execute();
}

 function rozlacz($conn) {
    $conn->close();
 }
?>
