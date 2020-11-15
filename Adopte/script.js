$(document).ready(function(){
    ajax_query();
});

//au chargement de la page requete ajax sur contain.js et appel de la function formulaire
let user_pseudo = "";
let station_emprunt ="";
let station_depot="";
let num_emprunt="";
let num_depot="";
let random="";
let cb="";
let arrStation = [
    [150,100],
    [500,100],
    [800,100],
    [50,350],
    [350,350],
    [650,350],
    [950,350],
    [150,600],
    [500,600],
    [800,600]
]; 

function ajax_query(){
    httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = alertContents;
    httprequest.open('GET', 'contain.json');
    httprequest.send();
}
function alertContents(){
    if(httprequest.readyState === XMLHttpRequest.DONE){
        if(httprequest.status === 200){
            formulaire();
            } else {
            alert("requete à échouée");
        }
    }
}

//function formulaire qui va chercher celui-ci dans contain.json

function formulaire(){
    $("main").text("");
    let recup = JSON.parse(httprequest.responseText);
    $("main").append(recup[0]);
    $("#enregistrement").click(function(){
        $("main").text("");
        $("main").append(recup[1]);
        creation();
    });
    $("#connexion").click(function(){
        connexion();
    });
}

//function creation via requete ajax(create_account.php)

function creation(){
    $("#créer").click(function(){
        $.ajax({
            url : "create_account.php",
            type : "POST",
            data : {
                nom : $("#nom").val(),
                prenom : $("#prenom").val(),
                pseudo : $("#pseudo").val(),
                mdp : $("#mdp").val(),
                mdp1 : $("#mdp1").val()
            },
            datatype : "html",
            success : function(data) {
                if (data == "fail"){
                    alert("l'enregistrement ne peut s'éffectuer !");
                } else if (data == "mdp") {
                    alert("Vos Mots de passes ne sont pas identiques !")
                } else {
                    alert("Enregistrement validé !, votre pseudo de connexion est : " + $("#pseudo").val());
                    formulaire();
                }
            }
        });
    });
}

//fonction connexion via requete ajax (login.php)

function connexion(){
    $.ajax({
        url : "login.php",
        type : "POST",
        data : {
            pseudo : $("#pseudo").val(),
            mdp : $("#mdp").val()
        },
        datatype : "html",
        success : function(data){
            console.log(data);
            if (data == "fail"){
                alert("Mot de passe ou identifiant incorrect(s) !");
                formulaire();
            } else if (data == "admin") {
                alert("Bienvenue " + $("#pseudo").val());
                $("main").text("");
                document.location.href="admin.html";
            } else {
                user_pseudo = $("#pseudo").val();
                alert("Bienvenue " + $("#pseudo").val());
                $(".slogan").html("Elle est pour <strong>" + $("#pseudo").val() + "</strong>");
                $("main").text("");
                let recup1 = JSON.parse(httprequest.responseText);
                $("header").append(recup1[2]);
                $("main").append(recup1[3]);
                //console.log(recup1[3]);
                
                $("#affiche_emprunt").click(function(){
                    
                    $("main").append(recup1[4]);
                    userPosition();
                });
                $("#deco").click(function(){
                   deco();
                });
            }
        }
    });
}

//function qui recupere les coordonnées(position et destination)

function userPosition(){
    $("#btn").click(function(){
        let myX=$("#positionX").val();
        let myY=$("#positionY").val();
        let destX=$("#destinationX").val();
        let destY=$("#destinationY").val();
        $("main").text("");
        findStationCloseToMe(myX,myY);
        findStationCloseToWhereIwantToGo(destX,destY);
        select_bornes();
    });
    $("#reset").click(function(){
        $(".reset").val("");
        $("main .reponse_station").text("");
        $(".borne_dispo").text("");
        $(".borne_station").text("");
        $(".borne_station").remove();

    });
};

function select_bornes(){
    let recup3 = JSON.parse(httprequest.responseText);
    // console.log(station_depot + " " + station_emprunt);
        $.ajax({
            type: "POST",
            url: 'emprunt.php',
            // indexmin = c'est comme une new var // indexmin1 = valeur réelle
            data: {
                indexmin_emprunt : station_emprunt,
                indexmin_depot : station_depot
            },
            datatype: "html",
            success: function(data)
            {
                Test(data);
                //2 methodes (manipuler entre mustache ) (creer une fonction avec param data)
            }
        });
}

//fonction pour trouver la station la plus proche du user en fonction de ses coordonnées XY

function findStationCloseToMe (x,y){
    let recup3 = JSON.parse(httprequest.responseText);
    $("main").append(recup3[5]);
    let result = [];
    for(i=0; i<arrStation.length; i++){
        let total = Math.abs(x - arrStation[i][0]) + Math.abs(y - arrStation[i][1]);
        result.push(total);
    }
    let min1 = Math.min.apply(null, result);
    let indexmin1 = result.indexOf(min1)+1;
    station_emprunt = indexmin1;
    $("main .reponse_station").append(" la station la plus proche est la <em>station "+ indexmin1 +"</em>" );
}

//function pour trouver la station de destination la plus proche

function findStationCloseToWhereIwantToGo(x,y){
    let result = [];
    for(i=0; i<arrStation.length; i++){
        let total = Math.abs(x - arrStation[i][0]) + Math.abs(y - arrStation[i][1]);
        result.push(total);
    }
    let min2 = Math.min.apply(null, result);
    let indexmin2 = result.indexOf(min2)+1;
    station_depot = indexmin2;
    $("main .reponse_station").append(" <br> la station de destination proposée est la <em>station "+ indexmin2 + "</em>");
}

//function qui recupere l'echo(retour de la requete sql) de emprunt.php qui va me permettre de recuperer les bornes disponibles de la station concernés

function Test(data){
    let arrJson= JSON.parse(data);
    let recup2 = JSON.parse(httprequest.responseText);
    
    for(i=0;i<arrJson.emprunt.length;i++){
        $("main .choix_station_emprunt").append("<option>" + arrJson.emprunt[i] + "</option><br>");
          //console.log(arrJson.emprunt[i]);
    }
    for(j=0;j<arrJson.depot.length;j++){
        $("main .choix_station_depot").append("<option>" + arrJson.depot[j] + "</option><br>");
          //console.log(arrJson.depot[j]);
    }

    $("#selection").click(function(){
        num_emprunt = $(".choix_station_emprunt").val();
        num_depot = $(".choix_station_depot").val();
        //console.log(num_emprunt + " bob " + num_depot); 
        form_velo();
    });
}

//function deconnexion avec reload d' index.html

function deco(){
    alert("Au revoir, à bientôt");
    document.location.href="index1.html";
}

//function formulaire_velo qui fournit le code random de resa et qui update sur la table reservation

function form_velo(){
    $("#selection").attr("disabled",true);
    //console.log(user_pseudo + " " + station_emprunt + " " + station_depot);
    $("main center").remove();
    $("#affiche_emprunt").text("Réserver votre vélo");
    let recup3 = JSON.parse(httprequest.responseText);
    $(".main").append(recup3[6]);
    //console.log(num_depot);
    $("#valid_cb").click(function(){
        let cb1 = $("#cb").val();
        cb = cb1;
        //console.log(cb1);
        valider_ticket();
        
        $("#valid_cb").attr("disabled",true); //desactive la possibilité de réappuyer sur le bouton
    });
}
function valider_ticket(){
    let num_random = Math.floor(Math.random() * 1000);
    random = num_random;
    let recup4 = JSON.parse(httprequest.responseText);

    $("main").text("");
    $(".main").text("");
    $("main").append("<div class='ticket'><table><th>Confirmation de votre réservation</><tr><td>Pseudo :</td><td><em>" + user_pseudo + "</em></td></tr><tr><td>Votre vélo vous attend à la :</td><td>borne n° <em>" + num_emprunt + "</em> de la station n° <em>" + station_emprunt + "</em></td></tr><tr><td>Votre vélo est attendu à la :</td><td>borne n° <em>" + num_depot + "</em> de la station n° <em>" + station_depot + "</em></td></tr><tr><td>Votre code de réservation est :</td><td><em>" + num_random + "</em></td></tr></table><br><p>*Nous vous rappelons qu'à défaut de restitution du vélo dans les délais impartis(voir règlementation), nous nous verrons dans l'obligation de vous prélever 30€/jour de retard.</p><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;<button id='valider_ticket'>Confirmer</button></div>");
    
    $("#valider_ticket").click(function(){
        end();
    });

    function end(){
        $("main").text("");
        $.ajax({
            type : "POST",
            url : "the_end.php",
            data : {
                pseudo : user_pseudo,
                emprunt : station_emprunt,
                depot : station_depot,
                num_cb : cb,
                reservation : random,
                numero_emprunt : num_emprunt,
                numero_depot : num_depot
            },
            datatype : "html",
            success : function(data){
                //console.log(data[0]); on récupère le "S" de success pour entrer dans la condition car "data" nous renvoi success suivi d'un bloc html ?
                if(data[0] === "s"){  
                    alert(user_pseudo + ", Votre commande est validée ! Bonne journée");
                    document.location.href="index1.html";
                } else {
                    alert("Une erreur s'est produite lors de votre validation !");
                    let recup1 = JSON.parse(httprequest.responseText);
                    $("main").append(recup1[4]);
                    userPosition();
                }
            }
        }); 
    }
}
