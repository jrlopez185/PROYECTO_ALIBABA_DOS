const hasOption =[
{id:1200,	do:1201,	u:3,	b:1299,	a:1,	s:'Macbook Pro 13.3-inch (diagonal)', r:'LED-backlit display with IPS technology; 2560-by-1600 native resolution at 227 pixels'},
{id:1200,	do:1202,	u:2,	b:2199,	a:0,	s:'Macbook Pro 15.4-inch (diagonal)', r:'LED-backlit display with IPS technology; 2880-by-1800 native resolution at 220 pixels'},
{id:1300,	do:1301,	u:1,	b:999,	a:0,	s:'Macbook Air 11.6-inch (diagonal)', r:'LED-backlit glossy widescreen display with support for millions of colors'},
{id:1300,	do:1302,	u:4,	b:1099,	a:1,	s:'Macbook Air 13.3-inch (diagonal)', r:'LED-backlit glossy widescreen display with support for millions of colors'},
{id:1400,	do:1401,	u:5,	b:799,	a:1,	s:'Iphone X Storage capacity 128 GB'},
{id:1400,	do:1402,	u:7,	b:899,	a:0,	s:'Iphone X Storage capacity 256 GB'},
{id:1500,	do:1501,	u:8,	b:399,	a:0,	s:'Iphone 7 Storage capacity 64 GB'},
{id:1500,	do:1502,	u:9,	b:499,	a:1,	s:'Iphone 7 Storage capacity 32 GB'},
{id:1600,	do:1601,	u:4,	b:599,	a:0,	s:'Iphone 8 Storage capacity 64 GB '},
{id:1600,	do:1602,	u:7,	b:699,	a:1,	s:'Iphone 8 Storage capacity 128 GB'},
{id:1700,	do:1701,	u:20,	b:899,	a:1,	s:'Ipad Air 9.7-inch (diagonal)', r:'LED-backlit Multi-Touch display with IPS technology'},
{id:1700,	do:1702,	u:9,	b:999,	a:0,	s:'Ipad Air 12-inch (diagonal)', r:'LED-backlit Multi-Touch display with IPS technology'},
{id:1800,	do:1801,	u:40,	b:499,	a:1,	s:'Ipad Mini 7.9-inch (diagonal)', r:'LED-backlit Multi-Touch display with IPS technolog'},
{id:1800,	do:1802,	u:100,  b:599,	a:1,	s:'Ipad Mini 10-inch (diagonal)', r:'LED-backlit Multi-Touch display with IPS technology'},
{id:1900,	do:1901,	u:4,	b:650,	a:1,	s:'ESC4000 G3 Server with 2U 4-GPU Hybrid Computing Power with Mass Storage Capability'},
{id:1900,	do:1902,	u:6,	b:750,	a:0,	s:'ESC8000 G4 Server with High-density 4U GPU server support 8 GPUs'},
{id:2000,	do:2001,	u:1,	b:450,	a:0,	s:'RS100-E8-PI2 Server with Smart compact 1U server'},
{id:2000,	do:2002,	u:2,	b:550,	a:1,	s:'RS300-E9-PI4 Server with Flagship Model '+'<br>'+'with Versatile Expandability'},
{id:2100,	do:2101,	u:7,	b:1250,	a:1,	s:'Dell XPS 13 PC with 13.3-inch Intel Core i5-8250U.'+'<br>'+' 8GB memory/128GB SSD'},
{id:2100,	do:2102,	u:1,	b:1650,	a:0,	s:'Dell XPS 15 PC with 15.6-inch Intel Core i5-7300HQ.'+'<br>'+' 8GB memory/256GB SSD'},
{id:2200,	do:2201,	u:10,	b:600,	a:0,	s:'Dell Inspiron 15 PC with 15.6-inch Full HD. Intel'+'<br>'+' Core i5-8250U. 8GB memory/1TB HDD'},
{id:2200,	do:2202,	u:50,	b:700,	a:1,	s:'Dell Inspiron 24 PC with 23.8-in Full HD. Intel '+'<br>'+'Core i5-7200U. 8GB memory/1TB SATA'},
{id:2300,	do:2301,	u:40,	b:15,	a:0,	s:'Monoprice Ultra Slim 24Hz High Speed HDMI Cable,'+'<br>'+' 10Gbps, 36AWG, YUV 4:2:0, 6ft, Black'},
{id:2300,	do:2302,	u:30,	b:25,	a:1,	s:'Monoprice Ultra Slim 60Hz High Speed HDMI Cable,'+'<br>'+' 18Gbps, 40AWG, YUV 6:4:0, 8ft, Black'},
{id:2400,	do:2401,	u:1,	b:10,	a:0,	s:'Monoprice Commercial 32Hz High Speed HDMI Cable,'+'<br>'+' 10Gbps, 24AWG, CL2, 6ft, Black'},
{id:2400,	do:2402,	u:10,	b:20,	a:0,	s:'Monoprice Commercial 80Hz High Speed HDMI Cable,'+'<br>'+' 18Gbps, 40AWG, CL2, 8ft, Black'},
{id:2500,	do:2501,	u:1,	b:250,	a:1,	s:'1000XM1 Wireless Headphones 20 Hzñ20,000 Hz'+'<br>'+' (44 kHz Sampling)/ 20 Hzñ40,000 Hz (LDAC 96 kHz Sampling, 990 kbps)'},
{id:2500,	do:2502,	u:20,	b:350,	a:1,	s:'1200XM3 Wireless Headphones 40 Hzñ40,000 Hz '+'<br>'+'(54 kHz Sampling)/40 Hzñ60,000 Hz (LDAC 120 kHz Sampling, 800 kbps)'},
{id:2600,	do:2601,	u:9,	b:800,	a:0,	s:'Sony IER-M7 In-ears Headphone. Driver Unit'+'<br>'+' by Quad-balanced armature. Frequency Response 5 Hzñ20,000 Hz'},
{id:2600,	do:2602,	u:60,	b:900,	a:1,	s:'Sony IER-M9 In-ears Headphone. Driver Unit'+'<br>'+' by Penta Balanced Armature. Frequency Response 10 Hzñ40,000 Hz'},
]

function om(){
    let cajaUno = document.querySelector("#products_has_options");

    let tabla1 = '<table class="TablaN" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1" colspan="2">product_id'+'</td>'+'<td class="casillas1" colspan="2">'+'option_id '+'</td>' +'<td class="casillas1">'+'quantity	 '+'</td>'+'</tr>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[0].id +'</td>'+'<td class="casillasRT">'+hasOption[0].do +'</td>'+'<td class="casillasRT">'+hasOption[0].u +'</td>'+'<td class="casillasRT">'+hasOption[0]. b +'</td>'+'<td class="casillasRT">'+hasOption[0]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[1].id +'</td>'+'<td class="casillasRT">'+hasOption[1].do + '</td>'+'<td class="casillasRT">'+hasOption[1].u +'</td>'+'<td class="casillasRT">'+hasOption[1].b +'</td>'+'<td class="casillasRT">'+hasOption[1]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[2].id +'</td>'+'<td class="casillasRT">'+hasOption[2].do + '</td>'+'<td class="casillasRT">'+hasOption[2].u +'</td>'+'<td class="casillasRT">'+hasOption[2].b +'</td>'+'<td class="casillasRT">'+hasOption[2]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[3].id +'</td>'+'<td class="casillasRT">'+hasOption[3].do + '</td>'+'<td class="casillasRT">'+hasOption[3].u +'</td>'+'<td class="casillasRT">'+hasOption[3].b +'</td>'+'<td class="casillasRT">'+hasOption[3]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[4].id +'</td>'+'<td class="casillasRT">'+hasOption[4].do + '</td>'+'<td class="casillasRT">'+hasOption[4].u +'</td>'+'<td class="casillasRT">'+hasOption[4].b +'</td>'+'<td class="casillasRT">'+hasOption[4]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[5].id +'</td>'+'<td class="casillasRT">'+hasOption[5].do + '</td>'+'<td class="casillasRT">'+hasOption[5].u +'</td>'+'<td class="casillasRT">'+hasOption[5].b +'</td>'+'<td class="casillasRT">'+hasOption[5]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[6].id +'</td>'+'<td class="casillasRT">'+hasOption[6].do + '</td>'+'<td class="casillasRT">'+hasOption[6].u +'</td>'+'<td class="casillasRT">'+hasOption[6].b +'</td>'+'<td class="casillasRT">'+hasOption[6]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[7].id +'</td>'+'<td class="casillasRT">'+hasOption[7].do + '</td>'+'<td class="casillasRT">'+hasOption[7].u +'</td>'+'<td class="casillasRT">'+hasOption[7].b +'</td>'+'<td class="casillasRT">'+hasOption[7]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[8].id +'</td>'+'<td class="casillasRT">'+hasOption[8].do + '</td>'+'<td class="casillasRT">'+hasOption[8].u +'</td>'+'<td class="casillasRT">'+hasOption[8].b +'</td>'+'<td class="casillasRT">'+hasOption[8]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[9].id +'</td>'+'<td class="casillasRT">'+hasOption[9].do + '</td>'+'<td class="casillasRT">'+hasOption[9].u +'</td>'+'<td class="casillasRT">'+hasOption[9].b +'</td>'+'<td class="casillasRT">'+hasOption[9]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[10].id +'</td>'+'<td class="casillasRT">'+hasOption[10].do + '</td>'+'<td class="casillasRT">'+hasOption[10].u +'</td>'+'<td class="casillasRT">'+hasOption[10].b +'</td>'+'<td class="casillasRT">'+hasOption[10]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[11].id +'</td>'+'<td class="casillasRT">'+hasOption[11].do + '</td>'+'<td class="casillasRT">'+hasOption[11].u +'</td>'+'<td class="casillasRT">'+hasOption[11].b +'</td>'+'<td class="casillasRT">'+hasOption[11]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[12].id +'</td>'+'<td class="casillasRT">'+hasOption[12].do + '</td>'+'<td class="casillasRT">'+hasOption[12].u +'</td>'+'<td class="casillasRT">'+hasOption[12].b +'</td>'+'<td class="casillasRT">'+hasOption[12]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[13].id +'</td>'+'<td class="casillasRT">'+hasOption[13].do + '</td>'+'<td class="casillasRT">'+hasOption[13].u +'</td>'+'<td class="casillasRT">'+hasOption[13].b +'</td>'+'<td class="casillasRT">'+hasOption[13]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[14].id +'</td>'+'<td class="casillasRT">'+hasOption[14].do + '</td>'+'<td class="casillasRT">'+hasOption[14].u +'</td>'+'<td class="casillasRT">'+hasOption[14].b +'</td>'+'<td class="casillasRT">'+hasOption[14]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[15].id +'</td>'+'<td class="casillasRT">'+hasOption[15].do +'</td>'+'<td class="casillasRT">'+hasOption[15].u +'</td>'+'<td class="casillasRT">'+hasOption[15].b +'</td>'+'<td class="casillasRT">'+hasOption[15]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[16].id +'</td>'+'<td class="casillasRT">'+hasOption[16].do + '</td>'+'<td class="casillasRT">'+hasOption[16].u +'</td>'+'<td class="casillasRT">'+hasOption[16].b +'</td>'+'<td class="casillasRT">'+hasOption[16]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[17].id +'</td>'+'<td class="casillasRT">'+hasOption[17].do + '</td>'+'<td class="casillasRT">'+hasOption[17].u +'</td>'+'<td class="casillasRT">'+hasOption[17].b +'</td>'+'<td class="casillasRT">'+hasOption[17]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[18].id +'</td>'+'<td class="casillasRT">'+hasOption[18].do + '</td>'+'<td class="casillasRT">'+hasOption[18].u +'</td>'+'<td class="casillasRT">'+hasOption[18].b +'</td>'+'<td class="casillasRT">'+hasOption[18]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[19].id +'</td>'+'<td class="casillasRT">'+hasOption[19].do + '</td>'+'<td class="casillasRT">'+hasOption[19].u +'</td>'+'<td class="casillasRT">'+hasOption[19].b +'</td>'+'<td class="casillasRT">'+hasOption[19]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[20].id +'</td>'+'<td class="casillasRT">'+hasOption[20].do + '</td>'+'<td class="casillasRT">'+hasOption[20].u +'</td>'+'<td class="casillasRT">'+hasOption[20].b +'</td>'+'<td class="casillasRT">'+hasOption[20]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[21].id +'</td>'+'<td class="casillasRT">'+hasOption[21].do + '</td>'+'<td class="casillasRT">'+hasOption[21].u +'</td>'+'<td class="casillasRT">'+hasOption[21].b +'</td>'+'<td class="casillasRT">'+hasOption[21]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[22].id +'</td>'+'<td class="casillasRT">'+hasOption[22].do + '</td>'+'<td class="casillasRT">'+hasOption[22].u +'</td>'+'<td class="casillasRT">'+hasOption[22].b +'</td>'+'<td class="casillasRT">'+hasOption[22]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[23].id +'</td>'+'<td class="casillasRT">'+hasOption[23].do + '</td>'+'<td class="casillasRT">'+hasOption[23].u +'</td>'+'<td class="casillasRT">'+hasOption[23].b +'</td>'+'<td class="casillasRT">'+hasOption[23]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[24].id +'</td>'+'<td class="casillasRT">'+hasOption[24].do + '</td>'+'<td class="casillasRT">'+hasOption[24].u +'</td>'+'<td class="casillasRT">'+hasOption[24].b +'</td>'+'<td class="casillasRT">'+hasOption[24]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[25].id +'</td>'+'<td class="casillasRT">'+hasOption[25].do + '</td>'+'<td class="casillasRT">'+hasOption[25].u +'</td>'+'<td class="casillasRT">'+hasOption[25].b +'</td>'+'<td class="casillasRT">'+hasOption[25]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[26].id +'</td>'+'<td class="casillasRT">'+hasOption[26].do + '</td>'+'<td class="casillasRT">'+hasOption[26].u +'</td>'+'<td class="casillasRT">'+hasOption[26].b +'</td>'+'<td class="casillasRT">'+hasOption[26]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[27].id +'</td>'+'<td class="casillasRT">'+hasOption[27].do + '</td>'+'<td class="casillasRT">'+hasOption[27].u +'</td>'+'<td class="casillasRT">'+hasOption[27].b +'</td>'+'<td class="casillasRT">'+hasOption[27]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[28].id +'</td>'+'<td class="casillasRT">'+hasOption[28].do + '</td>'+'<td class="casillasRT">'+hasOption[28].u +'</td>'+'<td class="casillasRT">'+hasOption[28].b +'</td>'+'<td class="casillasRT">'+hasOption[28]. a +'</td>'+'</td>'+
            '<tr class="columnasRT">'+'<td class="casillasRT">'+hasOption[29].id +'</td>'+'<td class="casillasRT">'+hasOption[29].do + '</td>'+'<td class="casillasRT">'+hasOption[29].u +'</td>'+'<td class="casillasRT">'+hasOption[29].b +'</td>'+'<td class="casillasRT">'+hasOption[29]. a +'</td>'+'</td>'+
            '</table>';

            cajaUno.innerHTML = tabla1;
}


function fx(){

    let meme =document.querySelector("#Products_has_optionDos");


    let tabla2 = '<table class="TablaSS" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1">price on_sale'+'</tr>'+
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[0].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[1].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[2].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[3].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[4].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[5].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[6].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[7].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[8].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[9].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[10].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[11].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[12].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[13].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[14].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[15].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[16].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[17].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[18].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[19].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[20].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[21].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[22].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[23].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[24].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[25].s +
            '<tr class="columnasvv">'+'<td class="casillasvv">'+hasOption[26].s +
            '</table>'

            meme.innerHTML= tabla2;
            

}

om();

fx();