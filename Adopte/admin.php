<?php
include ('./db-access/db_connect.php');

$requete = "SELECT * FROM `Bornes`";
$exec_requete = mysqli_query($conn, $requete);
    $test_bornes=[];
    while ($data = mysqli_fetch_row($exec_requete)){
        array_push($test_bornes, $data);
    }

$requete1 = "SELECT * FROM `Velos`";
$exec_requete1 = mysqli_query($conn, $requete1);
    $test_velos=[];
    while ($data1 = mysqli_fetch_row($exec_requete1)){
        array_push($test_velos, $data1);
    }

$requete2 = "SELECT * FROM `User`";
$exec_requete2 = mysqli_query($conn, $requete2);
    $test_user=[];
    while ($data2 = mysqli_fetch_row($exec_requete2)){
        array_push($test_user, $data2);
    }
$requete3 = "SELECT * FROM `Station`";
$exec_requete3 = mysqli_query($conn, $requete3);
    $test_station=[];
    while ($data3 = mysqli_fetch_row($exec_requete3)){
        array_push($test_station, $data3);
    }
$requete4 = "SELECT * FROM `Reservation`";
$exec_requete4 = mysqli_query($conn, $requete4);
    $test_reservation=[];
    while ($data4 = mysqli_fetch_row($exec_requete4)){
        array_push($test_reservation, $data4);
    }    
$objet = array(
    "velos"=>$test_velos,
    "bornes"=>$test_bornes,
    "reservation"=>$test_reservation,
    "station"=>$test_station,
    "user"=>$test_user
);
    $testJson = json_encode($objet);
    echo $testJson;
    mysqli_close($conn);
?>