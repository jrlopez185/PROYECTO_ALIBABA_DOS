function diseñoMenu(){


    let root = document.querySelector("#root");
    
    let contenedor = '<img class="imagen" src="https://github.com/jrlopez185/imagenes-suvir/blob/main/Aliba.png?raw=true">'+'<a class="cerrarSesión" href="index.html">'+"cerrar sesión"+'</a>'+'<div class="contenedor">'+ '<div class="respuesta">'+'</div>'+
    '<div class="menu">'+'<div class="uno">'+'<a class="h_Uno" href="carts_has_products.html">'+'carts_has_products'+'</a>'+'</div>'+'<div class="dos">'+'<a class="h_dos" href="category.html">'+'category'+'</a>'+'</div>'+'<div class="tres">'+'<a class="h_tres" href="option.html">'+'option'+'</a>'+'</div>'+'<div class="cuatro">'+'<a class="h_cuatro" href="order.html">'+'order'+'</a>'+'</div>'
    +'<div class="cinco">'+'<a class="h_cinco" href="orders_has_products.html">'+'orders_has_products'+'</a>'+'</div>'+ '<div class="seis">'+'<a class="h_seis" href="orders_paid_creditcard.html">'+'orders_paid_creditcard'+'</a>'+'</div>'+'<div class="siete">'+'<a class="h_siete" href="orders_placed_user.html">'+'orders_placed_user'+'</a>'+'</div>'+'<div class="ocho">'+'<a class="h_ocho" href="product_sold_vendor.html">'+'product_sold_vendor'+'</a>'+'</div>'+'<div class="nueve">'+'<a class="h_nueve" href="products.html">'+'products'+'</a>'+'</div>'
    +'<div class="dies">'+'<a class="h_dies" href="products_belong_category.html">'+'products_belong_category'+'</a>'+'</div>'+ '<div class="once">'+'<a class="h_once" href="products_has_options.html">'+'products_has_options'+'</a>'+'</div>'+'<div class="doce">'+'<a class="h_doce" href="shoppingcart.html">'+'shoppingcart'+'</a>'+'</div>'+'<div class="trece">'+'<a class="h_trece" src="carts_has_products.html">'+'user'+'</a>'+'</div>'+'<div class="catorce">'+'<a class="h_catorce" href="user_has_creditcard.html">'+'user_has_creditcard'+'</a>'+'</div>'
    +'<div class="quince">'+'<a class="h_quince" href="vendor.html">'+'vendor'+'</a>'+'</div>';
    
    
    root.innerHTML = contenedor;
    
    }
    
    diseñoMenu();