const cart = [

{id:3000,	di:1200,	do:1201,	re:2},
{id:3000,	di:1200,	do:1202,	re:1},
{id:3000,	di:1300,	do:1301,	re:3},
{id:3000,	di:1300,	do:1302,	re:2},
{id:3100,	di:1400,	do:1401,	re:1},
{id:3100,	di:1400,	do:1402,	re:1},
{id:3100,	di:1500,	do:1501,	re:2},
{id:3100,	di:1500,	do:1502,	re:3},
{id:3200,	di:1600,	do:1601,	re:2},
{id:3200,	di:1600,	do:1602,	re:1},
{id:3200,	di:1700,	do:1701,	re:1},
{id:3200,	di:1700,	do:1702,	re:3},
{id:3300,	di:1800,	do:1801,	re:1},
{id:3300,	di:1800,	do:1802,	re:2},
{id:3300,	di:1900,	do:1901,	re:1},
{id:3300,	di:1900,	do:1902,	re:2},
{id:3400,	di:2000,	do:2001,	re:2},
{id:3400,	di:2000,	do:2002,	re:3},
{id:3400,	di:2100,	do:2101,	re:1},
{id:3400,	di:2100,	do:2102,	re:3},
{id:3400,	di:2200,	do:2201,	re:2},
{id:3400,	di:2200,	do:2202,	re:3},
{id:3500,	di:2300,	do:2301,	re:1},
{id:3500,	di:2300,	do:2302,	re:1},
{id:3500,	di:2400,	do:2401,	re:3},
{id:3500,	di:2400,	do:2402,	re:2},
{id:3600,	di:2500,	do:2501,	re:3},
{id:3600,	di:2500,	do:2502,	re:1},
{id:3600,	di:2600,	do:2601,	re:2},
{id:3600,	di:2600,	do:2602,	re:1},

];

function carts_has_products(){
    let cajaUno = document.querySelector("#Carts_has_products");

    let tabla1 = '<table class="Tabla1" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1" colspan="3">'+'shopping_cart_id'+'</td>'+'<td class="casillas2">'+'product_id'+'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[0].id +'</td>'+'<td class="casillas">'+cart[0].di +'</td>'+'<td class="casillas">'+cart[0].do+'</td>'+'<td class="casillas1">'+cart[1].re+'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[1].id +'</td>'+'<td class="casillas">'+cart[1].di +'<td class="casillas">'+cart[1].do+'</td>'+'<td class="casillas1">'+cart[1].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[2].id +'</td>'+'<td class="casillas">'+cart[2].di +'<td class="casillas">'+cart[2].do+'</td>'+'<td class="casillas1">'+cart[2].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[3].id +'</td>'+'<td class="casillas">'+cart[3].di +'<td class="casillas">'+cart[3].do+'</td>'+'<td class="casillas1">'+cart[3].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[4].id +'</td>'+'<td class="casillas">'+cart[4].di +'<td class="casillas">'+cart[4].do+'</td>'+'<td class="casillas1">'+cart[4].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[5].id +'</td>'+'<td class="casillas">'+cart[5].di +'<td class="casillas">'+cart[5].do+'</td>'+'<td class="casillas1">'+cart[5].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[6].id +'</td>'+'<td class="casillas">'+cart[6].di +'<td class="casillas">'+cart[6].do+'</td>'+'<td class="casillas1">'+cart[6].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[7].id +'</td>'+'<td class="casillas">'+cart[7].di +'<td class="casillas">'+cart[7].do+'</td>'+'<td class="casillas1">'+cart[7].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[8].id +'</td>'+'<td class="casillas">'+cart[8].di +'<td class="casillas">'+cart[8].do+'</td>'+'<td class="casillas1">'+cart[8].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[9].id +'</td>'+'<td class="casillas">'+cart[9].di +'<td class="casillas">'+cart[9].do+'</td>'+'<td class="casillas1">'+cart[9].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[10].id +'</td>'+'<td class="casillas">'+cart[10].di +'<td class="casillas">'+cart[10].do+'</td>'+'<td class="casillas1">'+cart[10].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[11].id +'</td>'+'<td class="casillas">'+cart[11].di +'<td class="casillas">'+cart[11].do+'</td>'+'<td class="casillas1">'+cart[11].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[12].id +'</td>'+'<td class="casillas">'+cart[12].di +'<td class="casillas">'+cart[12].do+'</td>'+'<td class="casillas1">'+cart[12].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[13].id +'</td>'+'<td class="casillas">'+cart[13].di +'<td class="casillas">'+cart[13].do+'</td>'+'<td class="casillas1">'+cart[13].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[14].id +'</td>'+'<td class="casillas">'+cart[14].di +'<td class="casillas">'+cart[14].do+'</td>'+'<td class="casillas1">'+cart[14].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[15].id +'</td>'+'<td class="casillas">'+cart[15].di +'<td class="casillas">'+cart[15].do+'</td>'+'<td class="casillas1">'+cart[15].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[16].id +'</td>'+'<td class="casillas">'+cart[16].di +'<td class="casillas">'+cart[16].do+'</td>'+'<td class="casillas1">'+cart[16].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[17].id +'</td>'+'<td class="casillas">'+cart[17].di +'<td class="casillas">'+cart[17].do+'</td>'+'<td class="casillas1">'+cart[17].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[18].id +'</td>'+'<td class="casillas">'+cart[18].di +'<td class="casillas">'+cart[18].do+'</td>'+'<td class="casillas1">'+cart[18].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[19].id +'</td>'+'<td class="casillas">'+cart[19].di +'<td class="casillas">'+cart[19].do+'</td>'+'<td class="casillas1">'+cart[19].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[20].id +'</td>'+'<td class="casillas">'+cart[20].di +'<td class="casillas">'+cart[20].do+'</td>'+'<td class="casillas1">'+cart[20].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[21].id +'</td>'+'<td class="casillas">'+cart[21].di +'<td class="casillas">'+cart[21].do+'</td>'+'<td class="casillas1">'+cart[21].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[22].id +'</td>'+'<td class="casillas">'+cart[22].di +'<td class="casillas">'+cart[22].do+'</td>'+'<td class="casillas1">'+cart[22].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[23].id +'</td>'+'<td class="casillas">'+cart[23].di +'<td class="casillas">'+cart[23].do+'</td>'+'<td class="casillas1">'+cart[23].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[24].id +'</td>'+'<td class="casillas">'+cart[24].di +'<td class="casillas">'+cart[24].do+'</td>'+'<td class="casillas1">'+cart[24].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[25].id +'</td>'+'<td class="casillas">'+cart[25].di +'<td class="casillas">'+cart[25].do+'</td>'+'<td class="casillas1">'+cart[25].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[26].id +'</td>'+'<td class="casillas">'+cart[26].di +'<td class="casillas">'+cart[26].do+'</td>'+'<td class="casillas1">'+cart[26].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[27].id +'</td>'+'<td class="casillas">'+cart[27].di +'<td class="casillas">'+cart[27].do+'</td>'+'<td class="casillas1">'+cart[27].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[28].id +'</td>'+'<td class="casillas">'+cart[28].di +'<td class="casillas">'+cart[28].do+'</td>'+'<td class="casillas1">'+cart[28].re+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+cart[29].id +'</td>'+'<td class="casillas">'+cart[29].di +'<td class="casillas">'+cart[29].do+'</td>'+'<td class="casillas1">'+cart[29].re+'</td>'+
            '</table>';

            cajaUno.innerHTML = tabla1;
}

carts_has_products();
