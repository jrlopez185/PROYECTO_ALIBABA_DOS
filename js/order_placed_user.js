const placedUser =[
{id:100,	di:1000},
{id:101,	di:1001},
{id:102,	di:1002},
{id:103,	di:1003},
{id:104,	di:1004},
{id:105,	di:1005},
{id:106,	di:1006},
]

function oe(){
    let cajaUno = document.querySelector("#orders_placed_user");

    let tabla1 = '<table class="TablaL" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1">'+'user_id'+'</td>'+'<td class="casillas1">'+'order_id'+ '</td>' +'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+placedUser[0].id +'</td>'+'<td class="casillas">'+placedUser[0].di +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+placedUser[1].id +'</td>'+'<td class="casillas">'+placedUser[1].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+placedUser[2].id +'</td>'+'<td class="casillas">'+placedUser[2].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+placedUser[3].id +'</td>'+'<td class="casillas">'+placedUser[3].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+placedUser[4].id +'</td>'+'<td class="casillas">'+placedUser[4].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+placedUser[5].id +'</td>'+'<td class="casillas">'+placedUser[5].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+placedUser[6].id +'</td>'+'<td class="casillas">'+placedUser[6].di + '</tr>'
            '</table>';

            cajaUno.innerHTML = tabla1;
}

oe();