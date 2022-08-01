const solVendor =[
{id:5000,	ed:1200},
{id:5000,	ed:1300},
{id:5100,	ed:1400},
{id:5100,	ed:1500},
{id:5100,	ed:1600},
{id:5200,	ed:1700},
{id:5200,	ed:1800},
{id:5300,	ed:1900},
{id:5300,	ed:2000},
{id:5400,	ed:2100},
{id:5400,	ed:2200},
{id:5500,	ed:2300},
{id:5500,	ed:2400},
{id:5600,	ed:2500},
{id:5600,	ed:2600},
]

function om(){
    let cajaUno = document.querySelector("#Product_sold_vendor");

    let tabla1 = '<table class="TablaO" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1">'+'vendor_id'+'</td>'+'<td class="casillas1">'+'product_id'+ '</td>' +'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[0].id +'</td>'+'<td class="casillas">'+solVendor[0].ed +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[1].id +'</td>'+'<td class="casillas">'+solVendor[1].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[2].id +'</td>'+'<td class="casillas">'+solVendor[2].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[3].id +'</td>'+'<td class="casillas">'+solVendor[3].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[4].id +'</td>'+'<td class="casillas">'+solVendor[4].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[5].id +'</td>'+'<td class="casillas">'+solVendor[5].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[6].id +'</td>'+'<td class="casillas">'+solVendor[6].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[7].id +'</td>'+'<td class="casillas">'+solVendor[7].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[8].id +'</td>'+'<td class="casillas">'+solVendor[8].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[9].id +'</td>'+'<td class="casillas">'+solVendor[9].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[10].id +'</td>'+'<td class="casillas">'+solVendor[10].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[11].id +'</td>'+'<td class="casillas">'+solVendor[11].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[12].id +'</td>'+'<td class="casillas">'+solVendor[12].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[13].id +'</td>'+'<td class="casillas">'+solVendor[13].ed + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+solVendor[14].id +'</td>'+'<td class="casillas">'+solVendor[14].ed + '</tr>'+
            '</table>';

            cajaUno.innerHTML = tabla1;
}

om();