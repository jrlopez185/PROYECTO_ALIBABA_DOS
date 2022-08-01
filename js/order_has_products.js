const order_has_products =[

{id:1000,	di:1200,	u:1201,	b:2},
{id:1000,	di:1200,	u:1202,	b:1},
{id:1000,	di:1300,	u:1301,	b:3},
{id:1000,	di:1300,	u:1302,	b:2},
{id:1001,	di:1400,	u:1401,	b:1},
{id:1001,	di:1400,	u:1402,	b:1},
{id:1001,	di:1500,	u:1501,	b:2},
{id:1001,	di:1500,	u:1502,	b:3},
{id:1002,	di:1600,	u:1601,	b:2},
{id:1002,	di:1600,	u:1602,	b:1},
{id:1002,	di:1700,	u:1701,	b:1},
{id:1002,	di:1700,	u:1702,	b:3},
{id:1003,	di:1800,	u:1801,	b:1},
{id:1003,	di:1800,	u:1802,	b:2},
{id:1003,	di:1900,	u:1901,	b:1},
{id:1003,	di:1900,	u:1902,	b:2},
{id:1004,	di:2000,	u:2001,	b:2},
{id:1004,	di:2000,	u:2002,	b:3},
{id:1004,	di:2100,	u:2101,	b:1},
{id:1004,	di:2100,	u:2102,	b:3},
{id:1004,	di:2200,	u:2201,	b:2},
{id:1004,	di:2200,	u:2202,	b:3},
{id:1005,	di:2300,	u:2301,	b:1},
{id:1005,	di:2300,	u:2302,	b:1},
{id:1005,	di:2400,	u:2401,	b:3},
{id:1006,	di:2400,	u:2402,	b:2},
{id:1006,	di:2500,	u:2501,	b:3},
{id:1006,	di:2500,	u:2502,	b:1},
{id:1006,	di:2600,	u:2601,	b:2},
{id:1006,	di:2600,	u:2602,	b:1},
]

function oh(){
    let hha = document.querySelector("#Order_has_products");

    let tabla5 = '<table class="Tabla222" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1">'+'order_id'+'</td>'+'<td class="casillas1">'+'product_id'+ '</td>' +'<td class="casillas1">'+'option_id'+'</td>'+'<td class="casillas1">'+'quantity'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[0].id +'</td>'+'<td class="casillas">'+order_has_products[0].di +'</td>'+'<td class="casillas">'+order_has_products[0].u +'</td>'+'<td class="casillas">'+order_has_products[0].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[1].id +'</td>'+'<td class="casillas">'+order_has_products[1].di +'</td>'+'<td class="casillas">'+order_has_products[1].u +'</td>'+'<td class="casillas">'+order_has_products[1].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[2].id +'</td>'+'<td class="casillas">'+order_has_products[2].di +'</td>'+'<td class="casillas">'+order_has_products[2].u +'</td>'+'<td class="casillas">'+order_has_products[2].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[3].id +'</td>'+'<td class="casillas">'+order_has_products[3].di +'</td>'+'<td class="casillas">'+order_has_products[3].u +'</td>'+'<td class="casillas">'+order_has_products[3].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[4].id +'</td>'+'<td class="casillas">'+order_has_products[4].di +'</td>'+'<td class="casillas">'+order_has_products[4].u +'</td>'+'<td class="casillas">'+order_has_products[4].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[5].id +'</td>'+'<td class="casillas">'+order_has_products[5].di +'</td>'+'<td class="casillas">'+order_has_products[5].u +'</td>'+'<td class="casillas">'+order_has_products[5].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[6].id +'</td>'+'<td class="casillas">'+order_has_products[6].di +'</td>'+'<td class="casillas">'+order_has_products[6].u +'</td>'+'<td class="casillas">'+order_has_products[6].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[7].id +'</td>'+'<td class="casillas">'+order_has_products[7].di +'</td>'+'<td class="casillas">'+order_has_products[7].u +'</td>'+'<td class="casillas">'+order_has_products[7].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[8].id +'</td>'+'<td class="casillas">'+order_has_products[8].di +'</td>'+'<td class="casillas">'+order_has_products[8].u +'</td>'+'<td class="casillas">'+order_has_products[8].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[9].id +'</td>'+'<td class="casillas">'+order_has_products[9].di +'</td>'+'<td class="casillas">'+order_has_products[9].u +'</td>'+'<td class="casillas">'+order_has_products[9].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[10].id +'</td>'+'<td class="casillas">'+order_has_products[10].di +'</td>'+'<td class="casillas">'+order_has_products[10].u +'</td>'+'<td class="casillas">'+order_has_products[10].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[11].id +'</td>'+'<td class="casillas">'+order_has_products[11].di +'</td>'+'<td class="casillas">'+order_has_products[11].u +'</td>'+'<td class="casillas">'+order_has_products[11].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[12].id +'</td>'+'<td class="casillas">'+order_has_products[12].di +'</td>'+'<td class="casillas">'+order_has_products[12].u +'</td>'+'<td class="casillas">'+order_has_products[12].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[13].id +'</td>'+'<td class="casillas">'+order_has_products[13].di +'</td>'+'<td class="casillas">'+order_has_products[13].u +'</td>'+'<td class="casillas">'+order_has_products[13].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[14].id +'</td>'+'<td class="casillas">'+order_has_products[14].di +'</td>'+'<td class="casillas">'+order_has_products[14].u +'</td>'+'<td class="casillas">'+order_has_products[14].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[15].id +'</td>'+'<td class="casillas">'+order_has_products[15].di +'</td>'+'<td class="casillas">'+order_has_products[15].u +'</td>'+'<td class="casillas">'+order_has_products[15].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[16].id +'</td>'+'<td class="casillas">'+order_has_products[16].di +'</td>'+'<td class="casillas">'+order_has_products[16].u +'</td>'+'<td class="casillas">'+order_has_products[16].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[17].id +'</td>'+'<td class="casillas">'+order_has_products[17].di +'</td>'+'<td class="casillas">'+order_has_products[17].u +'</td>'+'<td class="casillas">'+order_has_products[17].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[18].id +'</td>'+'<td class="casillas">'+order_has_products[18].di +'</td>'+'<td class="casillas">'+order_has_products[18].u +'</td>'+'<td class="casillas">'+order_has_products[18].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[19].id +'</td>'+'<td class="casillas">'+order_has_products[19].di +'</td>'+'<td class="casillas">'+order_has_products[19].u +'</td>'+'<td class="casillas">'+order_has_products[19].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[20].id +'</td>'+'<td class="casillas">'+order_has_products[20].di +'</td>'+'<td class="casillas">'+order_has_products[20].u +'</td>'+'<td class="casillas">'+order_has_products[20].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[21].id +'</td>'+'<td class="casillas">'+order_has_products[21].di +'</td>'+'<td class="casillas">'+order_has_products[21].u +'</td>'+'<td class="casillas">'+order_has_products[21].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[22].id +'</td>'+'<td class="casillas">'+order_has_products[22].di +'</td>'+'<td class="casillas">'+order_has_products[22].u +'</td>'+'<td class="casillas">'+order_has_products[22].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[23].id +'</td>'+'<td class="casillas">'+order_has_products[23].di +'</td>'+'<td class="casillas">'+order_has_products[23].u +'</td>'+'<td class="casillas">'+order_has_products[23].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[24].id +'</td>'+'<td class="casillas">'+order_has_products[24].di +'</td>'+'<td class="casillas">'+order_has_products[24].u +'</td>'+'<td class="casillas">'+order_has_products[24].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[25].id +'</td>'+'<td class="casillas">'+order_has_products[25].di +'</td>'+'<td class="casillas">'+order_has_products[25].u +'</td>'+'<td class="casillas">'+order_has_products[25].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[26].id +'</td>'+'<td class="casillas">'+order_has_products[26].di +'</td>'+'<td class="casillas">'+order_has_products[26].u +'</td>'+'<td class="casillas">'+order_has_products[26].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[27].id +'</td>'+'<td class="casillas">'+order_has_products[27].di +'</td>'+'<td class="casillas">'+order_has_products[27].u +'</td>'+'<td class="casillas">'+order_has_products[27].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[28].id +'</td>'+'<td class="casillas">'+order_has_products[28].di +'</td>'+'<td class="casillas">'+order_has_products[28].u +'</td>'+'<td class="casillas">'+order_has_products[28].b +
            '<tr class="columnas">'+'<td class="casillas">'+order_has_products[29].id +'</td>'+'<td class="casillas">'+order_has_products[29].di +'</td>'+'<td class="casillas">'+order_has_products[29].u +'</td>'+'<td class="casillas">'+order_has_products[29].b +
            '</table>';

            


            hha.innerHTML = tabla5;
}

oh();