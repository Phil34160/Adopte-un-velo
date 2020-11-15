<?php
    include ('./db-access/db_connect.php');

        $pseudo = $_POST['pseudo']; 
        $mdp = sha1($_POST['mdp']);

        //$_SESSION['test'] = $_POST['pseudo'];
        $requete = "SELECT * FROM User WHERE 
                    pseudo = '".$pseudo."' AND mdp = '".$mdp."'";
            $exec_requete = mysqli_query($conn,$requete); //compte ttes les entrées avec pseudo et mdp equivalent
                if(mysqli_num_rows($exec_requete)==1) // nom d'utilisateur et mot de passe correctes
                {
                    if($pseudo ==='admin'){
                        // $_SESSION['pseudo'] = $pseudo;
                        // header('Location: admin.php');
                        echo "admin";
                    } else {
                        // $_SESSION['pseudo'] = $pseudo;
                        // header('Location: profil.php');
                        echo "user";
                    } 
                }
                else
                {
                    echo "fail"; // utilisateur ou mot de passe incorrect
                     
                }
            mysqli_close($conn);
?>