
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function(){
    $(".buhao").click(function(){
        $(".pp").fadeToggle();
        $(".p").fadeToggle("slow");
        $(".pppp").fadeToggle(3000);
        $(".pop").fadeToggle("slow");

    });
});

$(document).ready(function(){
    $("#pv").draggable()
    });

$(document).ready(function(){
    $("#dalian").click(function(){
    $("#dalian").effect("explode");
    });
});
$(document).ready(function(){
    $("#pa").draggable()
    });
$(document).ready(function(){
    $("#vp").draggable()
    });
