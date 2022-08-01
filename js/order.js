const orden = [
    {id:1000,   do:4,   di:7,   de:0.0925,  m:50.02,	du:'2018-10-17',    u:'2018-10-20',	e:'Anna Addison'      , o:'1325 Candy Rd, San Francisco, CA 96123',	n:'ZW60001',   h:1},
    {id:1000,	do:4,	di:7,	de:0.0925,	m:50.02,	du:'2018-10-17',	u:'2018-10-20',	e:'Anna Addison'	  , o:'1325 Candy Rd, San Francisco, CA 96123',	n:'ZW60001', 	h:1},
    {id:1001,	do:5,	di:8,	de:0.06,	m:62.45,	du:'2018-10-15',	u:'2018-10-18',	e:'Carol Campbell'	  , o:'1931 Brown St, Gainesville, FL 85321',   n:'AB61001', 	h:0},
    {id:1002,	do:7,	di:10,	de:0.087,	m:40.33,	du:'2018-10-14',	u:'2018-10-17',	e:'Julia Jones' 	  , o:'1622 Seaside St, Seattle, WA 32569' 	,   n:'CD62001', 	h:1},
    {id:1003,	do:9,	di:20,	de:0.0625,	m:70.98,	du:'2018-10-12',	u:'2018-10-15',	e:'Irene Everly' 	  , o:'1756 East Dr, Houston, TX 28562'	    ,   n:'KB63001', 	h:0},
    {id:1004,	do:6,	di:7,	de:0.0625,	m:30.45,	du:'2018-10-16',	u:'2018-10-19',	e:'Rachel Rose'	      , o:'1465 River Dr, Boston, MA 43625' 	   ,n:'IK64001', 	h:1},
    {id:1005,	do:5,	di:8,	de:0.0625,	m:100.2,	du:'2018-10-13',	u:'2018-10-16',	e:'Sophie Sutton'	  , o:'1896 West Dr, Portland, OR 65842'	   ,n:'OP65001', 	h:0},
    {id:1006,	do:3,	di:5,	de:0.1025,	m:58.52,	du:'2018-10-21',	u:'2018-10-24',	e:'Wendy West'	      , o:'1252 Vine St, Chicago, IL 73215'	    ,   n:'XH66001', 	h:1},
];

function oh(){
    let hha = document.querySelector("#Order");

    let tabla5 = '<table class="Tabla22" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1" colspan="2">'+'order_id'+'</td>'+'<td class="casillas1" colspan="2">'+'total_item'+ '</td>' +'<td class="casillas1">'+'shipping_fee'+'</td>'+'<td class="casillas1">'+'tax'+'</td>'+'<td class="casillas1">'+'total_cost'+'</td>'+'<td class="casillas1">'+'order_date'+'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillas">'+orden[0].id +'</td>'+'<td class="casillas">'+orden[0].do +'</td>'+'<td class="casillas">'+orden[0].di +'</td>'+'<td class="casillas">'+orden[0].de +'</td>'+'<td class="casillas">'+orden[0].m +'</td>'+'</td>'+'<td class="casillas">'+orden[0].du +'</td>'+'<td class="casillas">'+orden[0].u +'</td>'+'<td class="casillas">'+orden[0].e +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+orden[1].id +'</td>'+'<td class="casillas">'+orden[1].do +'</td>'+'<td class="casillas">'+orden[1].di +'</td>'+'<td class="casillas">'+orden[1].de +'</td>'+'<td class="casillas">'+orden[1].m +'</td>'+'</td>'+'<td class="casillas">'+orden[0].du +'</td>'+'<td class="casillas">'+orden[1].u +'</td>'+'<td class="casillas">'+orden[1].e +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+orden[2].id +'</td>'+'<td class="casillas">'+orden[2].do +'</td>'+'<td class="casillas">'+orden[2].di +'</td>'+'<td class="casillas">'+orden[2].de +'</td>'+'<td class="casillas">'+orden[2].m +'</td>'+'</td>'+'<td class="casillas">'+orden[0].du +'</td>'+'<td class="casillas">'+orden[2].u +'</td>'+'<td class="casillas">'+orden[2].e +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+orden[3].id +'</td>'+'<td class="casillas">'+orden[3].do +'</td>'+'<td class="casillas">'+orden[3].di +'</td>'+'<td class="casillas">'+orden[3].de +'</td>'+'<td class="casillas">'+orden[3].m +'</td>'+'</td>'+'<td class="casillas">'+orden[0].du +'</td>'+'<td class="casillas">'+orden[3].u +'</td>'+'<td class="casillas">'+orden[3].e +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+orden[4].id +'</td>'+'<td class="casillas">'+orden[4].do +'</td>'+'<td class="casillas">'+orden[4].di +'</td>'+'<td class="casillas">'+orden[4].de +'</td>'+'<td class="casillas">'+orden[4].m +'</td>'+'</td>'+'<td class="casillas">'+orden[0].du +'</td>'+'<td class="casillas">'+orden[4].u +'</td>'+'<td class="casillas">'+orden[4].e +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+orden[5].id +'</td>'+'<td class="casillas">'+orden[5].do +'</td>'+'<td class="casillas">'+orden[5].di +'</td>'+'<td class="casillas">'+orden[5].de +'</td>'+'<td class="casillas">'+orden[5].m +'</td>'+'</td>'+'<td class="casillas">'+orden[0].du +'</td>'+'<td class="casillas">'+orden[5].u +'</td>'+'<td class="casillas">'+orden[5].e +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+orden[6].id +'</td>'+'<td class="casillas">'+orden[6].do +'</td>'+'<td class="casillas">'+orden[6].di +'</td>'+'<td class="casillas">'+orden[6].de +'</td>'+'<td class="casillas">'+orden[6].m +'</td>'+'</td>'+'<td class="casillas">'+orden[0].du +'</td>'+'<td class="casillas">'+orden[6].u +'</td>'+'<td class="casillas">'+orden[6].e +'</td>'+
            '<tr class="columnas">'+'<td class="casillas">'+orden[7].id +'</td>'+'<td class="casillas">'+orden[6].do +'</td>'+'<td class="casillas">'+orden[7].di +'</td>'+'<td class="casillas">'+orden[7].de +'</td>'+'<td class="casillas">'+orden[7].m +'</td>'+'</td>'+'<td class="casillas">'+orden[0].du +'</td>'+'<td class="casillas">'+orden[7].u +'</td>'+'<td class="casillas">'+orden[7].e +'</td>'+
            '</table>';

            


            hha.innerHTML = tabla5;
}

oh();