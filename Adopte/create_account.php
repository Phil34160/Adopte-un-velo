<?php
include ('./db-access/db_connect.php');
    // if(isset($_POST['creer'])){
        $nom=$_POST['nom'];
        $prenom=$_POST['prenom'];
        $pseudo=$_POST['pseudo'];
        $mdp=$_POST['mdp'];
        $mdp1=$_POST['mdp1'];
    // }

    $requete = "SELECT * FROM User WHERE 
        pseudo = '".$pseudo."'";
    $exec_requete = mysqli_query($conn,$requete); //compte ttes les entrées avec pseudo et mdp equivalent
    if(mysqli_num_rows($exec_requete)==1 || $pseudo =="") // nom d'utilisateur et mot de passe correctes
    { 
        echo "fail";
    }   else if ($mdp == $mdp1){
                $newmdp = sha1($mdp);
                if (mysqli_query($conn, "INSERT INTO `User` (nom, prenom, pseudo, mdp)
                VALUES ('".$nom."','".$prenom."','".$pseudo."','".$newmdp."')")===TRUE) {
                        echo "success";
                }
        } else {
                echo "mdp";
        }

    mysqli_close($conn); 
?>
