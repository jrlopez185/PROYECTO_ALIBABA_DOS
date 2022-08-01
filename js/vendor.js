const vendor =[
{id:5000,	do:'Apple' 	,   de:2569561656,du:'apple@gmail.com'},
{id:5100,	do:'Microsoft', de:6165486561,du:'microsoft@gmail.com'},
{id:5200,	do:'Lenovo'   , de:3215689466,du:'lenovo@gmail.com'},
{id:5300,	do:'Asus' 	  , de:9568484613,du:'asus@gmail.com'},
{id:5400,	do:'Dell' 	 ,  de:8465473132,du:'dell@gmail.com'},
{id:5500,	do:'Monoprice', de:3189831684,du:'monoprice@gmail.com'},
{id:5600,	do:'Sony' 	  , de:4846531876,du:'sony@gmail.com'},
]

function m(){
    let cajaUno = document.querySelector("#Vendor");

    let tabla1 = '<table class="TablaG" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1">'+'vendor_id'+'</td>'+'<td class="casillas1">'+'vendor_name'+ '</td>' +'<td class="casillas1">'+'vendor_phone'+ '</td>'+'<td class="casillas1">'+'vender_email'+ '</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+vendor[0].id +'</td>'+'<td class="casillas">'+vendor[0].do +'</td>'+'</td>'+'<td class="casillas">'+vendor[0].de +'</td>'+'<td class="casillas">'+vendor[0].du +'</td>'+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+vendor[1].id +'</td>'+'<td class="casillas">'+vendor[1].do +'</td>'+'</td>'+'<td class="casillas">'+vendor[1].de +'</td>'+'<td class="casillas">'+vendor[1].du +'</td>'+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+vendor[2].id +'</td>'+'<td class="casillas">'+vendor[2].do +'</td>'+'</td>'+'<td class="casillas">'+vendor[2].de +'</td>'+'<td class="casillas">'+vendor[2].du +'</td>'+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+vendor[3].id +'</td>'+'<td class="casillas">'+vendor[3].do +'</td>'+'</td>'+'<td class="casillas">'+vendor[3].de +'</td>'+'<td class="casillas">'+vendor[3].du +'</td>'+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+vendor[4].id +'</td>'+'<td class="casillas">'+vendor[4].do +'</td>'+'</td>'+'<td class="casillas">'+vendor[4].de +'</td>'+'<td class="casillas">'+vendor[4].du +'</td>'+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+vendor[5].id +'</td>'+'<td class="casillas">'+vendor[5].do +'</td>'+'</td>'+'<td class="casillas">'+vendor[5].de +'</td>'+'<td class="casillas">'+vendor[5].du +'</td>'+'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+vendor[6].id +'</td>'+'<td class="casillas">'+vendor[6].do +'</td>'+'</td>'+'<td class="casillas">'+vendor[6].de +'</td>'+'<td class="casillas">'+vendor[6].du +'</td>'+'</td>'+
            '</table>';

            cajaUno.innerHTML = tabla1;
}

m();