const ope = [
{id:1201,	di:'Macbook Pro 13.3-inch'},
{id:1202,	di:'Macbook Pro 15.4-inch'},
{id:1301,	di:'Macbook Air 11.6-inch'},
{id:1302,	di:'Macbook Air 13-inch'},
{id:1401,	di:'Iphone X 128GB'},
{id:1402,	di:'Iphone X 256GB'},
{id:1501,	di:'Iphone 7 64GB'},
{id:1502,	di:'Iphone 7 32GB'},
{id:1601,	di:'Iphone 8 64GB'},
{id:1602,	di:'Iphone 8 128GB'},
{id:1701,	di:'Ipad Air 9.7-inch'},
{id:1702,	di:'Ipad Air 12-inch'},
{id:1801,	di:'Ipad Mini 7.9-inch'},
{id:1802,	di:'Ipad Mini 10-inch'},
{id:1901,	di:'ESC8000 G3 - 8 G Intel Xeon E5-1603 V4(2.80GHz,140W,L3:10M)'},
{id:1902,	di:'ESC8000 G3 - 8 G Intel Xeon E5-1620 v3 (3.5G,140W,L3:10M,4C,HT)'},
{id:2001,	di:'ESC8000 G4 - 8 G Intel Xeon E5-1603 v3 (3.5G,140W,L3:10M,4C,HT)'},
{id:2002,	di:'ESC8000 G4 - 8 G Intel Xeon E5-1620 v3 (3.5G,140W,L3:10M,4C,HT)'},
{id:2101,	di:'XPS 13 - 5080 8GB LPDDR3 1866MHz'},
{id:2102,	di:'XPS 13 - 5080 16GB LPDDR3 1866MHz'},
{id:2201,	di:'XPS 15- 5070 256GB PCIe Solid State Drive'},
{id:2202,	di:'XPS 15- 5070 500GB PCIe Solid State Drive'},
{id:2301,	di:'Monoprice Ultra Slim Series High Speed HDMI Cable - 4K - Length - 1ft'},
{id:2302,	di:'Monoprice Ultra Slim Series High Speed HDMI Cable - 4K - Length - 1.5ft'},
{id:2401,	di:'Monoprice Ultra Slim Series High Speed HDMI Cable - 4K - Length - 3ft'},
{id:2402,	di:'Monoprice Ultra Slim Series High Speed HDMI Cable - 4K - Length - 5ft'},
{id:2501,	di:'COWIN E7 PRO - Black'},
{id:2502,	di:'COWIN E7 PRO - Red'},
{id:2601,	di:'COWIN E7 PRO - Pink'},
{id:2602,	di:'COWIN E7 PRO - White'},
];


function op(){
    let hehe = document.querySelector("#Option");

    let tabla4 = '<table class="Tabla5" border="1">' +
            '<tr class="columnasoo" colspan="2">'+'<td class="casillas1">'+'option_id'+'</td>'+'<td class="casillasoo">'+'option_name'+ '</td>'+'<td class="casillasuu">'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[0].id +'</td>'+'<td class="casillasDos">'+ope[0].di +'</td>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[1].id +'</td>'+'<td class="casillasDos">'+ope[1].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[2].id +'</td>'+'<td class="casillasDos">'+ope[2].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[3].id +'</td>'+'<td class="casillasDos">'+ope[3].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[4].id +'</td>'+'<td class="casillasDos">'+ope[4].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[5].id +'</td>'+'<td class="casillasDos">'+ope[5].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[6].id +'</td>'+'<td class="casillasDos">'+ope[6].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[7].id +'</td>'+'<td class="casillasDos">'+ope[7].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[8].id +'</td>'+'<td class="casillasDos">'+ope[8].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[9].id +'</td>'+'<td class="casillasDos">'+ope[9].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[10].id +'</td>'+'<td class="casillasDos">'+ope[10].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[11].id +'</td>'+'<td class="casillasDos">'+ope[11].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[12].id +'</td>'+'<td class="casillasDos">'+ope[12].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[13].id +'</td>'+'<td class="casillasDos">'+ope[13].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[14].id +'</td>'+'<td class="casillasDos">'+ope[14].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[15].id +'</td>'+'<td class="casillasDos">'+ope[15].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[16].id +'</td>'+'<td class="casillasDos">'+ope[16].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[17].id +'</td>'+'<td class="casillasDos">'+ope[17].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[18].id +'</td>'+'<td class="casillasDos">'+ope[18].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[19].id +'</td>'+'<td class="casillasDos">'+ope[19].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[20].id +'</td>'+'<td class="casillasDos">'+ope[20].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[21].id +'</td>'+'<td class="casillasDos">'+ope[21].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[22].id +'</td>'+'<td class="casillasDos">'+ope[22].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[23].id +'</td>'+'<td class="casillasDos">'+ope[23].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[24].id +'</td>'+'<td class="casillasDos">'+ope[24].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[25].id +'</td>'+'<td class="casillasDos">'+ope[25].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[26].id +'</td>'+'<td class="casillasDos">'+ope[26].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[27].id +'</td>'+'<td class="casillasDos">'+ope[27].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[28].id +'</td>'+'<td class="casillasDos">'+ope[28].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillasUno">'+ope[29].id +'</td>'+'<td class="casillasDos">'+ope[29].di + '</tr>'+
            '</table>';

            hehe.innerHTML = tabla4;
}

op();