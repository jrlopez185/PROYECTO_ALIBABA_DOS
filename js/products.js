const products =[
{id:1200,	di:'Macbook Pro (2017)',	do:'The ultimate pro notebook. MacBook Pro features faster processors '+'<br>'+';upgraded memory;the Apple T2 chip;and a Retina display with True Tone technology.'},
{id:1300,	di:'Macbook Air (2015)', 	do:'MacBook Air lasts up to an incredible 12 hours between charges So from your morning coffee till your evening commute;you can work unplugged. When itís time to kick back and relax;you can get up to 12 hours of iTunes movie playback.'},
{id:1400,	di:'Iphone X',	            do:'The iPhone X display is so immersive the device itself disappears into the experience.'},
{id:1500,	di:'Iphone 7',	            do:'Great connectivity of this device includes Bluetooth 4.2 version with A2DP'},
{id:1600,	di:'Iphone 8',	            do:'iPhone 8 introduces a glass design. The glass back enables easy wireless charging.'},
{id:1700,	di:'Ipad Air	4th gen',   do:'The iPad Air is unbelievably thin and light. And yet it is so much more powerful and capable'},
{id:1800,	di:'Ipad Mini 3th gen',	    do:'3th gen Everything you love about iPad ó the beautiful screen and fast'},
{id:1900,	di:'ESC8000 G3',	        do:'G3 High-density GPU server with hybrid computing power. ASUS-patented Adaptable Topology design.'},
{id:2000,	di:'ESC8000 G4',	        do:'G4 High performance ASUS 2U server with hybrid-storage design and high power-efficiency'},
{id:2100,	di:'XPS 13 - 5080',	        do:'Thinner and more powerful than ever the Dell XPS reinforces its lofty standing '+'<br>'+' with an 8th Gen Intel Core processor immaculate 4K UHD display, and super-slim build.'},
{id:2200,	di:'XPS 15 - 5070',	        do:'Ultra-thin and distinctly refined the stylish Dell Inspiron gives definitive '+'<br>'+'elegance to a powerful and expansive PC experience.'},
{id:2300,	di:'Monoprice Ultra',       do:'Slim Series High Speed HDMI Cable	The Monoprice Ultra Slim Active High Speed'+'<br>'+' HDMI Cable series is designed with the thinnest TVs in mind'},
{id:2400,	di:'Monoprice Ultra',       do:'Slim Series High Speed HDMI Cable - 4K	Monoprice Commercial Cable supports the '+'<br>'+'following HDMI features: 4K resolution at 24Hz. 3D video.'},
{id:2500,	di:'Avantree HT3189',       do:'Wireless Headphones	Avantree HT3189 Wireless Headphones for TV Watching & PC Gaming with Bluetooth'},
{id:2600,	di:'COWIN E7 PRO',	        do:'Active Noise Cancelling Headphone Bluetooth Headphones with '+'<br>'+'Microphone Hi-Fi Deep Bass Wireless Headphones Over Ear 30H Playtime for Travel Work TV Computer Phone'},
]

function og(){
    let cajaUno = document.querySelector("#Products");

    let tabla1 = '<table class="TablaE" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1">'+'product_id	'+'</td>'+'<td class="casillas1">'+'product_name	'+ '</td>' +'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[0].id +'</td>'+'<td class="casillaspp">'+products[0].di +'</td>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[1].id +'</td>'+'<td class="casillaspp">'+products[1].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[2].id +'</td>'+'<td class="casillaspp">'+products[2].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[3].id +'</td>'+'<td class="casillaspp">'+products[3].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[4].id +'</td>'+'<td class="casillaspp">'+products[4].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[5].id +'</td>'+'<td class="casillaspp">'+products[5].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[6].id +'</td>'+'<td class="casillaspp">'+products[6].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[7].id +'</td>'+'<td class="casillaspp">'+products[7].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[8].id +'</td>'+'<td class="casillaspp">'+products[8].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[9].id +'</td>'+'<td class="casillaspp">'+products[9].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[10].id +'</td>'+'<td class="casillaspp">'+products[10].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[11].id +'</td>'+'<td class="casillaspp">'+products[11].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[12].id +'</td>'+'<td class="casillaspp">'+products[12].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[13].id +'</td>'+'<td class="casillaspp">'+products[13].di + '</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[14].id +'</td>'+'<td class="casillaspp">'+products[4].di + '</tr>'+
            '</table>';

            cajaUno.innerHTML = tabla1;
            

}

og();

function oo(){
    let cajajita = document.querySelector("#ProductsDos");

    let tablaDs = '<table class="TablaU" border="1">' +
            '<tr class="columnas1">'+'<td class="casillas1" colspan="2">'+'descriptions	'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[0].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[2].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[3].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[4].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[5].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[6].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[7].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[8].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[9].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[10].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[11].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[12].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[13].do +'</td>'+'</tr>'+
            '<tr class="columnas">'+'<td class="casillaspp">'+products[14].do +'</td>'+'</tr>'+
            
            '</table>';

            cajajita.innerHTML = tablaDs;

}

oo();
