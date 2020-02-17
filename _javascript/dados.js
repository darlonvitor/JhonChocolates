/**
 * Created by darlo on 13/03/2017.
 */

var trufas = "Trufa de chocolate recheio de paçoca|R$ 1,25/" +"Trufa de chocolate branco e nozes|R$ 1,25/" + "Trufa de chocolate com caramelo e castanha|RS 1,25/" + "Trufa de chocolate com framboesa|RS 1,25/" + "Trufa de chocolate com recheio de limão|R$ 1,25/" + "Trufa de chocolate com recheio de maracujá|R$ 1,25/" +"Trufa de chocolate com recheio de churros com nutella|R$ 1,25/"+"Trufa de chocolate com recheio de churros e doce de leite|R$ 1,25/"+"Trufa de chocolate com recheio de M&M'S|R$ 1,50/"+"Trufa de chocolate com recheio de cappuccino|R$ 1,25/"+"Trufa de bem casado|R$ 1,25/"+"Trufa de chocolate com recheio de prestígio|R$ 1,25/"+"Trufa de chocolate|R$ 1,25/"+"Trufa de chocolate com recheio de brigadeiro|R$ 1,25/"+"Trufa de chocolate com recheio de powerball|R$ 1,50/"+"Trufa de chocolate com recheio de ovomaltine|R$ 1,25/"+"Trufa de chocolate com recheio de açaí e granola|R$ 1,50/"+"Trufa de chocolate com recheio de oreo|R$ 1,50/" + "Trufa de chocolate com recheio de morango|R$ 1,50/"+"Trufa de chocolate com recheio de ninho com nutella|R$ 1,50/"+"Trufa de chocolate com recheio de kinder bueno|R$ 1,50/"+"Trufa de chocolate com recheio de Ferrero Rocher|R$ 1,50/"+"Trufa de chocolate com recheio de nutella|R$ 1,50";

var ovos1= "Ovo Ninho com Nutella e morangos - 150 g|R$ 19,00/" + "Ovo de Prestígio com Nutella - 150 g|R$ 19,00/" +"Ovo de Ganache de chocolate meio amargo, bolas crocantes e Nutella - 150 g|R$ 19,00/" + "Ovo Ferrero Rocher - 150 g|R$ 19,00/" + "Ovo Brigadeiros de churros, chocolate branco, ninho com Nutella, kinder, kinder bueno e M&M's -150 g|R$ 23,00/" + "Ovo Brigadeiros de churros com doce de leite - 150 g|R$ 19,00/"+"Ovo Ninho com Nutella - 150 g|R$ 19,00/"+"Ovo Kinder Bueno - 150 g|R$ 19,00/"+"Ovo duo Ferrero Rocher e Ninho com Nutela e calda de morango - 150 g|R$ 19,00/"+"Ovo Oreo e M&M's - 150 g|R$ 19,00/"+"Ovo Ovomaltine com morango - 150 g|R$ 19,00";

var ovos2= "Ovo Ninho com Nutella e morangos - 250 g|R$ 30,00/" + "Ovo de Prestígio com Nutella - 250 g|R$ 30,00/" +"Ovo de Ganache de chocolate meio amargo, bolas crocantes e Nutella - 250 g|R$ 30,00/" + "Ovo Ferrero Rocher - 250 g|R$ 30,00/" + "Ovo Brigadeiros de churros, chocolate branco, ninho com Nutella, kinder, kinder bueno e M&M's -250 g|R$ 33,00/" + "Ovo Brigadeiros de churros com doce de leite - 250 g|R$ 30,00/"+"Ovo Ninho com Nutella - 250 g|R$ 30,00/"+"Ovo Kinder Bueno - 250 g|R$ 30,00/"+"Ovo duo Ferrero Rocher e Ninho com Nutela e calda de morango - 250 g|R$ 30,00/"+"Ovo Oreo e M&M's - 250 g|R$ 30,00/"+"Ovo Ovomaltine com morango - 250 g|R$ 30,00";

var ovos3= "Ovo Ninho com Nutella e morangos - 350 g|R$ 38,00/" + "Ovo de Prestígio com Nutella - 350 g|R$ 38,00/" +"Ovo de Ganache de chocolate meio amargo, bolas crocantes e Nutella - 350 g|R$ 38,00/" + "Ovo Ferrero Rocher - 350 g|R$ 38,00/" + "Ovo Brigadeiros de churros, chocolate branco, ninho com Nutella, kinder, kinder bueno e M&M's - 350 g|R$ 41,00/" + "Ovo Brigadeiros de churros com doce de leite - 350 g|R$ 38,00/"+"Ovo Ninho com Nutella - 350 g|R$ 38,00/"+"Ovo Kinder Bueno - 350 g|R$ 38,00/"+"Ovo duo Ferrero Rocher e Ninho com Nutela e calda de morango - 350 g|R$ 38,00/"+"Ovo Oreo e M&M's - 350 g|R$ 38,00/"+"Ovo Ovomaltine com morango - 350 g|R$ 38,00";

var ovos4= "Ovo Ninho com Nutella e morangos - 500 g|R$ 58,00/" + "Ovo de Prestígio com Nutella - 500 g|R$ 58,00/" +"Ovo de Ganache de chocolate meio amargo, bolas crocantes e Nutella - 500 g|R$ 58,00/" + "Ovo Ferrero Rocher - 500 g|R$ 58,00/" + "Ovo Brigadeiros de churros, chocolate branco, ninho com Nutella, kinder, kinder bueno e M&M's  - 500 g|R$ 58,00/" + "Ovo Brigadeiros de churros com doce de leite - 500 g|R$ 58,00/"+"Ovo Ninho com Nutella - 500 g|R$ 58,00/"+"Ovo Kinder Bueno - 500 g|R$ 58,00/"+"Ovo duo Ferrero Rocher e Ninho com Nutela e calda de morango - 500 g|R$ 58,00/"+"Ovo Oreo e M&M's - 500 g|R$ 58,00/"+"Ovo Ovomaltine com morango - 500 g|R$ 58,00";

var ovos5= "Ovo Ninho com Nutella e morangos - 1 kg|R$ 85,00/" + "Ovo de Prestígio com Nutella - 1 kg|R$ 85,00/" +"Ovo de Ganache de chocolate meio amargo, bolas crocantes e Nutella - 1 kg|R$ 85,00/" + "Ovo Ferrero Rocher - 1 kg|R$ 85,00/" + "Ovo Brigadeiros de churros, chocolate branco, ninho com Nutella, kinder, kinder bueno e M&M's  - 1 kg|R$ 85,00/" + "Ovo Brigadeiros de churros com doce de leite - 1 kg|R$ 85,00/"+"Ovo Ninho com Nutella - 1 kg|R$ 85,00/"+"Ovo Kinder Bueno - 1 kg|R$ 85,00/"+"Ovo duo Ferrero Rocher e Ninho com Nutela e calda de morango - 1 kg|R$ 85,00/"+"Ovo Oreo e M&M's - 1 kg|R$ 85,00/"+"Ovo Ovomaltine com morango - 1 kg|R$ 85,00";


//preenchimento dinamico da pagina de produtos
function preencher(valor){
    var temp;
    var pagina = "Trufas";

    switch (valor){
        case 1:
            temp = trufas.split("/");
            pagina = "Trufas";
            $("article#armario header p").html("");
            break;
        case 2:
            temp = ovos1.split("/");
            pagina = "Ovos";
            $("article#armario header p").html("Atenção: <br/>Os ovos de Páscoa deverão ser retirados na loja. Agradecemos a compreensão.");
            break;

        case 3:
            temp = ovos2.split("/");
            pagina = "Ovos";
            $("article#armario header p").html("Atenção: <br/>Os ovos de Páscoa deverão ser retirados na loja. Agradecemos a compreensão.");
            break;

        case 4:
            temp = ovos3.split("/");
            pagina = "Ovos";
            $("article#armario header p").html("Atenção: <br/>Os ovos de Páscoa deverão ser retirados na loja. Agradecemos a compreensão.");
            break;
        case 5:
            temp = ovos4.split("/");
            pagina = "Ovos";
            $("article#armario header p").html("Atenção: <br/>Os ovos de Páscoa deverão ser retirados na loja. Agradecemos a compreensão.");
            break;

        case 6:
            temp = ovos5.split("/");
            pagina = "Ovos";
            $("article#armario header p").html("Atenção: <br/>Os ovos de Páscoa deverão ser retirados na loja. Agradecemos a compreensão.");
            break;
    }

    //mudando o titulo da pagina
    $("article#armario h2").html(pagina);

    //criando dinamicamente os elementos da pagina
    $("article#armario ul#produtos li").remove();
    for(var i =0; i<temp.length;i++){
        aux = temp[i].split("|");
        $("article#armario ul#produtos").append("<li class='simpleCart_shelfItem'><div class='item_add'><span class='item_name'>"+aux[0]+"</span><span class='item_price'>"+aux[1]+"</span></div></li>");
    }
    $('.simpleCart_shelfItem').append("<a href='javascript:;' class='item_add'><img src='_imagens/_botoes/add.png'/></a>");
    efeito();
    efeito2()
    colocarImg(pagina);
    tamanho();

}

function efeito() {
    $('.simpleCart_shelfItem').hover(function () {
        $(this).css('background-position-y','-90%');
    },function () {
        $(this).css('background-position-y','0%');
    });
}

function colocarImg(nome) {

    var itens = document.getElementsByClassName('simpleCart_shelfItem');

    for(var i=0; i<itens.length;i++){//Incluindo imagens dos produtos
        itens[i].style.background="url('_imagens/_produtos/_"+nome +"/"+ nome +(i+1)+".jpg') no-repeat ";

        itens[i].style.backgroundSize = "246px 200px";

        itens[i].style.backgroundPosition = "50% 0%";
        itens[i].style.backgroundColor = "#ffffff";
    }
}

function tamanho(){
    var tamanho = $('section#principal').height();
    $('div#frame_menu').height(tamanho);
    $('aside#lateral').height(tamanho -2);
}

function efeito2(){
    $('.item-name').hover(function () {
        $('.item-total').css('left','-20px');
    },function () {
        $(this).css('left','10px');
    });
}

function cartVazio(){
    var qnt = simpleCart.quantity();

    if((qnt === 0)){
        //$('#itens_carrinho').removeClass('simpleCart_items');
        $('#itens_carrinho').css('background-image',"url('_imagens/fundo_pagamento.png')");
        $('#itens_carrinho').css('height',' 239px');
    }else{
        $('#itens_carrinho').css('background-image',"none");
        $('#itens_carrinho').css('height','auto');
        $('#itens_carrinho').addClass('simpleCart_items');

    }
}

function gerarPedido(){

    var qnt = simpleCart.quantity();
    var i = 1;

    var carrinho = window.localStorage.getItem("simpleCart_items");//carregando dados do localStorage
    carrinho = JSON.parse(carrinho);//transformando string obtida em um objeto Json

    if(qnt >= 1){//É necessario possuir ao menos 1 pedido
        for(var k in carrinho){
            $('#pagamento').append("<input name='itemId" + (i) + "' value='" + carrinho[k].id +"' type='hidden'>");//ID do produto
            $('#pagamento').append("<input name='itemDescription" + (i) + "' value='"+carrinho[k].name + "' type='hidden'>");//Nome do produto
            $('#pagamento').append("<input name='itemAmount" + (i) + "' value='"+ carrinho[k].price.toFixed(2) +"' type='hidden'>");//Preço do produto
            $('#pagamento').append("<input name='itemQuantity" + (i) + "' value='"+ carrinho[k].quantity +"' type='hidden'>");//Quantidade comprada

            if (carrinho[k].name.search('Ovo') === 0)
                $('#pagamento').append("<input name='itemWeight" + (i) + "' value='0' type='hidden'>");//O ovo nao tera frete, logo o peso é zero
            else
                $('#pagamento').append("<input name='itemWeight" + (i) + "' value='45' type='hidden'>");//Peso
            ++i;
        }

        localStorage.clear();//limpa o local storage
    }else{
        alert("Pedido não encontrado !!!");
    }

}