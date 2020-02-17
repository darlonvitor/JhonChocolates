/**
 * Created by darlo on 09/02/2017.
 */
//Script para descer a pagina lentamente

//Quando clicar em home
$(document).ready(function() {
    $('#subir').click(function(){
        $('html, body').animate({scrollTop:0}, 2000);
        return false;

    });
});

//Quando clicar em contato
$(document).ready(function(){
    $('#descer').click(function () {
        $('html,body').animate({scrollTop:4367},2000);
    });
});


//Script para mudar o fundo da pagina
jQuery("document").ready(function() {
    var offset = $('#servicos').position().top;//obtendo posiçao do topo
    var autor = $('#autor').position().top;//obtendo posiçao do primeiro artigo

    var tam_serv = $('#servicos').height();
    var tam_aut = $('#autor').height();

    $(document).scroll(function () {
        var posicaoScroll = $(document).scrollTop();//obtendo posiçao do scroll
        if(autor + tam_aut  > posicaoScroll){
            document.getElementById("corpo").className ='fundo1';
        }else if (offset + tam_serv < posicaoScroll) {//posiçao do fundo do article #servicos
            document.getElementById('corpo').className = 'fundo3';
        } else {
            document.getElementById('corpo').className = 'fundo2';
        }
    });

});

//Script para mover o fundo lentamente
$(document).ready(function () {

    $('#corpo').each(function(){
        var $obj = $(this);

        $(window).scroll(function() {
            var ypos = -($(window).scrollTop() / 10);
            if(document.getElementById('corpo').className==="fundo2"){
                ypos += $('#servicos').position().top/10;
            }else if(document.getElementById('corpo').className==="fundo3"){
                ypos += $('#graos').position().top/10;
            }
            var bgpos = '0% '+ ypos + 'px';

            $obj.css('background-position', bgpos );

        });
    });
});



var ovos4= "Ovo Ninho com Nutella e morangos|R$ 19,00/" + "Ovo de Prestígio com Nutella|R$ 19,00/" +"Ovo de Ganache de chocolate meio amargo, bolas crocantes e Nutella|R$ 19,00/" + "Ovo Ferrero Rocher|R$ 19,00/" + "Ovo Brigadeiros de churros, chocolate branco, ninho com Nutella, kinder, kinder bueno e M&M's |R$ 19,00/" + "Ovo Brigadeiros de churros com doce de leite|R$ 19,00/"+"Ovo Ninho com Nutella|R$ 19,00/"+"Ovo Kinder Bueno|R$ 19,00/"+"Ovo duo Ferrero Rocher e Ninho com Nutela e calda de morango|R$ 19,00/"+"Ovo Oreo e M&M's|R$ 19,00/"+"Ovo Ovomaltine com morango|R$ 19,00";

var ovos5= "Ovo Ninho com Nutella e morangos|R$ 19,00/" + "Ovo de Prestígio com Nutella|R$ 19,00/" +"Ovo de Ganache de chocolate meio amargo, bolas crocantes e Nutella|R$ 19,00/" + "Ovo Ferrero Rocher|R$ 19,00/" + "Ovo Brigadeiros de churros, chocolate branco, ninho com Nutella, kinder, kinder bueno e M&M's |R$ 19,00/" + "Ovo Brigadeiros de churros com doce de leite|R$ 19,00/"+"Ovo Ninho com Nutella|R$ 19,00/"+"Ovo Kinder Bueno|R$ 19,00/"+"Ovo duo Ferrero Rocher e Ninho com Nutela e calda de morango|R$ 19,00/"+"Ovo Oreo e M&M's|R$ 19,00/"+"Ovo Ovomaltine com morango|R$ 19,00";

