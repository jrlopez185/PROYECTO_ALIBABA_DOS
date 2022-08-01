const belonCategory =[
{id:1200,	do:4000},
{id:1300,	do:4000},
{id:1400,	do:4100},
{id:1500,	do:4100},
{id:1600,	do:4100},
{id:1700,	do:4200},
{id:1800,	do:4200},
{id:1900,	do:4300},
{id:2000,	do:4300},
{id:2100,	do:4400},
{id:2200,	do:4400},
{id:2300,	do:4500},
{id:2400,	do:4500},
{id:2500,	do:4600},
{id:2600,	do:4600},
]

function om(){
    let cajaUno = document.querySelector("#products_belong_category");

    let tabla1 = '<table class="TablaD" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1">'+'product_id'+'</td>'+'<td class="casillas1">'+'category_id'+ '</td>' +'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[0].id +'</td>'+'<td class="casillas">'+belonCategory[0].do +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[1].id +'</td>'+'<td class="casillas">'+belonCategory[1].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[2].id +'</td>'+'<td class="casillas">'+belonCategory[2].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[3].id +'</td>'+'<td class="casillas">'+belonCategory[3].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[4].id +'</td>'+'<td class="casillas">'+belonCategory[4].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[5].id +'</td>'+'<td class="casillas">'+belonCategory[5].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[6].id +'</td>'+'<td class="casillas">'+belonCategory[6].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[7].id +'</td>'+'<td class="casillas">'+belonCategory[7].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[8].id +'</td>'+'<td class="casillas">'+belonCategory[8].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[9].id +'</td>'+'<td class="casillas">'+belonCategory[9].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[10].id +'</td>'+'<td class="casillas">'+belonCategory[10].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[11].id +'</td>'+'<td class="casillas">'+belonCategory[11].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[12].id +'</td>'+'<td class="casillas">'+belonCategory[12].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[13].id +'</td>'+'<td class="casillas">'+belonCategory[13].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+belonCategory[14].id +'</td>'+'<td class="casillas">'+belonCategory[14].do + '</tr>'+
            
            '</table>'

            cajaUno.innerHTML = tabla1;
        
        }

        om();

