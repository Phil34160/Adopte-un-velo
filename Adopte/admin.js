$(document).ready(function(){
    ajax_query();
});

function ajax_query(){
    httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = alertContents;
    httprequest.open('GET', 'contain.json');
    httprequest.send();
}
function alertContents(){
    if(httprequest.readyState === XMLHttpRequest.DONE){
        if(httprequest.status === 200){
            bdd();
            } else {
            alert("requete à échouée");
        }
    }
}

function bdd(){
    $("main").text("");
    let recup = JSON.parse(httprequest.responseText);
    $("header").append(recup[2]);
    $("#deco").click(function(){
        deco();
     });
     $.ajax({
        url : "admin.php",
        type : "POST",
        data : {
            bidon : "bidon1"
        },
        datatype : "html",
        success : function(data){
            recup_bdd(data);
        }
});
}

function recup_bdd(data){
    let affiche_bdd= JSON.parse(data);
    console.log(affiche_bdd.velos[0]);
    $("main").append("<table id='velos' style='display:inline-block; border:1px solid white;'><tr style='border:1px solid white;'><td style='border:1px solid white;'>id_vélo</td><td>id_borne dispo</td></tr>");
    for(i=0;i<affiche_bdd.velos.length;i++){
        if(affiche_bdd.velos[i][2]=1){
            
            $("main #velos").append("<tr style='border:1px solid white;'><td style='border:1px solid white; text-align:center;'>" + affiche_bdd.velos[i][0] + "</td><td style='text-align:center;'> " + affiche_bdd.velos[i][1] + "</td></tr>");

        }
    }
    $("main").append("</table><br>");
    $(".main").append("<table id='station' style='border:1px solid white;'><tr style='border:1px solid white;'><td style='border:1px solid white;'>id_station</td><td style='border:1px solid white;'>coord_X</td><td>coord_Y</td></tr>");
    for(j=0;j<affiche_bdd.station.length;j++){
        $(".main #station").append("<tr style='border:1px solid white;'><td style='border:1px solid white;'>" + affiche_bdd.station[j][0] + "</td><td style='border:1px solid white;'>" + affiche_bdd.station[j][1] + "</td><td style='border:1px solid white;'>" + affiche_bdd.station[j][2] + "</td></tr>");
    }
    $(".main").append("</table><br>");
}


function deco(){
    alert("Au revoir, à bientôt");
    document.location.href="index1.html";
}