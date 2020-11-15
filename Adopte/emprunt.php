<?php
include ('./db-access/db_connect.php');
// $indexmin = 5;

$indexmin1 = $_POST['indexmin_emprunt'];
$indexmin2 = $_POST['indexmin_depot'];
$requete = "SELECT * FROM `Bornes` WHERE id_station = '".$indexmin1."' AND dispo_borne = 1 ";
$exec_requete = mysqli_query($conn, $requete);
    $test=[];
    while ($data = mysqli_fetch_row($exec_requete)){
        array_push($test, $data[0]);
    }

$requete1 = "SELECT * FROM `Bornes` WHERE id_station = '".$indexmin2."' AND dispo_borne = 0 ";
$exec_requete1 = mysqli_query($conn, $requete1);
    $test1=[];
    while ($data1 = mysqli_fetch_row($exec_requete1)){
        array_push($test1, $data1[0]);
    }
$recup_station = array(
    "emprunt"=>$test,
    "depot"=>$test1
);
$testJson = json_encode($recup_station);
echo $testJson;
mysqli_close($conn);
?>