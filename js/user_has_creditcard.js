const creditst =[
{id:100,	do:2.56324E+15},
{id:101,	do:1.35632E+15},
{id:102,	do:6.84323E+15},
{id:103,	do:3.18795E+15},
{id:104,	do:3.56547E+15},
{id:105,	do:6.53214E+15},
{id:106,	do:1.35468E+15},
]

function m(){
    let cajaUno = document.querySelector("#User_has_creditcard");

    let tabla1 = '<table class="TablaO" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1">'+'user_id'+'</td>'+'<td class="casillas1">'+'credit_card_number'+ '</td>' +'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+creditst[0].id +'</td>'+'<td class="casillas">'+creditst[0].do +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+creditst[1].id +'</td>'+'<td class="casillas">'+creditst[1].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+creditst[2].id +'</td>'+'<td class="casillas">'+creditst[2].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+creditst[3].id +'</td>'+'<td class="casillas">'+creditst[3].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+creditst[4].id +'</td>'+'<td class="casillas">'+creditst[4].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+creditst[5].id +'</td>'+'<td class="casillas">'+creditst[5].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+creditst[6].id +'</td>'+'<td class="casillas">'+creditst[6].do + '</tr>'+
            '</table>';

            cajaUno.innerHTML = tabla1;
}

m();