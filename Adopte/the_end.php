<?php
    include ('./db-access/db_connect.php');

    $user_pseudo = $_POST['pseudo'];
    $station_emprunt = $_POST['emprunt'];
    $station_depot = $_POST['depot'];
    $cb = $_POST['num_cb'];
    $num_random = $_POST['reservation'];
    $num_emprunt = $_POST['numero_emprunt'];
    $num_depot = $_POST['numero_depot'];
    // requete select pour recup user ID => OK
    //$user_pseudo = "test"; // c'est seulement pour tester avec une valeur en dur sur mon php

    $requete3 = "SELECT id_user FROM `User` WHERE pseudo = '".$user_pseudo."'";
    $exec_requete3 = mysqli_query($conn, $requete3);
    $resa_id_user;
        if(mysqli_num_rows($exec_requete3)){
            $resa_id_user = $exec_requete3->fetch_assoc();
            $new_resa_user = $resa_id_user['id_user'];
            echo "success ";
        } else {
            echo "fail";
        }
    //requete select pour recup velo ID => OK
    //$num_emprunt = 11; // c'est seulement pour tester avec une valeur en dur sur mon php

    $requete4 = "SELECT id_velo FROM `Velos` WHERE id_borne = '".$num_emprunt."'";
    $exec_requete4 = mysqli_query($conn, $requete4);
    $resa_id_velo;
        if(mysqli_num_rows($exec_requete4)){
            $resa_id_velo = $exec_requete4->fetch_assoc();
            $new_resa_velo = $resa_id_velo['id_velo'];
        } else {
            //echo "fail";
        }
        
    // requete insert into pour la table reservation => velo id - user-id - cb - code_resa

    $requete5 = "INSERT INTO `Reservation` (id_velo, id_user, cb, code_resa)
    VALUES ('".$new_resa_velo."', '".$new_resa_user."', '".$cb."', '".$num_random."')";
    $exec_requete5 = mysqli_query($conn, $requete5);

    //modif dispo borne table borne quand velo est emprunté => PAS ENCORE TESTE

    $requete1 = "UPDATE `Bornes` SET dispo_borne = 0 WHERE id_borne = '".$num_emprunt."'";
    $exec_requete1 = mysqli_query($conn, $requete1);
        if(mysqli_num_rows($exec_requete1)){
            //echo "success";
        } else {
            //echo "fail";
        }

    //modif dispo borne table borne quand velo est deposé => PAS ENCORE TESTE

    $requete2 = "UPDATE `Bornes` SET dispo_borne = 1 WHERE id_borne = '".$num_depot."'";
    $exec_requete2 = mysqli_query($conn, $requete2);
        if(mysqli_num_rows($exec_requete2)){
            //echo "success";
        } else {
            //echo "fail";
        }

    $requete6 = "UPDATE `Velos` SET id_borne = '".$num_depot."' WHERE id_velo = '".$new_resa_velo."'";
    $exec_requete6 = mysqli_query($conn, $requete6);
        if(mysqli_num_rows($exec_requete6)){
            //echo "success";
        } else {
            //echo "fail";
        }
    mysqli_close($conn);
    
?>