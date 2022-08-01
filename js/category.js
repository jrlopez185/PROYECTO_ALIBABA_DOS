let category = [

{id:4000,	do:'Laptops'},
{id:4100,	do:'Mobile '},
{id:4200,	do:'Tablets'},
{id:4300,	do:'Servers'},
{id:4400,	do:'PC'     },
{id:4500,	do:'Cables' },
{id:4600,	do:'Headpho'},

];

function Category(){
    let cajaUno = document.querySelector("#category");

    let tabla1 = '<table class="Tabla2" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1">'+'category_id'+'</td>'+'<td class="casillas1">'+'category_name'+ '</td>' +'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+category[0].id +'</td>'+'<td class="casillas">'+category[0].do +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+category[1].id +'</td>'+'<td class="casillas">'+category[1].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+category[2].id +'</td>'+'<td class="casillas">'+category[2].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+category[3].id +'</td>'+'<td class="casillas">'+category[3].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+category[4].id +'</td>'+'<td class="casillas">'+category[4].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+category[5].id +'</td>'+'<td class="casillas">'+category[5].do + '</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+category[6].id +'</td>'+'<td class="casillas">'+category[6].do + '</tr>'
            '</table>';

            cajaUno.innerHTML = tabla1;
}

Category();