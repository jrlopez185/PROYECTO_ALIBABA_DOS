const orderPaid =[
{id:2.56324E+15,	ed:1000},
{id:1.35632E+15,	ed:1001},
{id:6.84323E+15,	ed:1002},
{id:3.18795E+15,	ed:1003},
{id:3.56547E+15,	ed:1004},
{id:6.53214E+15,	ed:1005},
{id:1.35468E+15,	ed:1006},
]

function oc(){
    let cajaUno = document.querySelector("#orders_paid_creditcard");

    let tabla1 = '<table class="Tabla2" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1">'+'credit_card_number'+'</td>'+'<td class="casillas1">'+'order_id'+ '</td>' +'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+orderPaid[0].id +'</td>'+'<td class="casillas">'+orderPaid[0].ed +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+orderPaid[1].id +'</td>'+'<td class="casillas">'+orderPaid[1].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+orderPaid[2].id +'</td>'+'<td class="casillas">'+orderPaid[2].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+orderPaid[3].id +'</td>'+'<td class="casillas">'+orderPaid[3].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+orderPaid[4].id +'</td>'+'<td class="casillas">'+orderPaid[4].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+orderPaid[5].id +'</td>'+'<td class="casillas">'+orderPaid[5].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+orderPaid[6].id +'</td>'+'<td class="casillas">'+orderPaid[6].ed + '</tr>'
            '</table>';

            cajaUno.innerHTML = tabla1;
}

oc();