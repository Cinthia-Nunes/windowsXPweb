setInterval(() => {
    var hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });
    $("#relogio").html(hora);
}, 1000); // Atualiza a cada segundo

$(document).ready(function(){
    $(".desktop-icon").click(function(){
        $(this).toggleClass("selected");
    });
}); // Função de seleção dos icones 

$(document).ready(function(){
    $(".desktop-icon").draggable({
        containment: ".area-de-trabalho",
        stop: function(){
            $(this).removeClass("selected");
            $(this).addClass("selected");
        }
    }); // Biblioteca que faz com que possamos arrastar os icones
});
