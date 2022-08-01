const shoppingCart =[
{id:3000,	do:1},
{id:3100,	do:1},
{id:3200,	do:0},
{id:3300,	do:0},
{id:3400,	do:1},
{id:3500,	do:0},
{id:3600,	do:1},
]

function m(){
    let cajaUno = document.querySelector("#shoppingcart");

    let tabla1 = '<table class="TablaO" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1">'+'shopping_cart_id'+'</td>'+'<td class="casillas1">'+'status'+ '</td>' +'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+shoppingCart[0].id +'</td>'+'<td class="casillas">'+shoppingCart[0].do +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+shoppingCart[1].id +'</td>'+'<td class="casillas">'+shoppingCart[1].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+shoppingCart[2].id +'</td>'+'<td class="casillas">'+shoppingCart[2].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+shoppingCart[3].id +'</td>'+'<td class="casillas">'+shoppingCart[3].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+shoppingCart[4].id +'</td>'+'<td class="casillas">'+shoppingCart[4].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+shoppingCart[5].id +'</td>'+'<td class="casillas">'+shoppingCart[5].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+shoppingCart[6].id +'</td>'+'<td class="casillas">'+shoppingCart[6].do + '</tr>'+
            '</table>';

            cajaUno.innerHTML = tabla1;
}

m();