const cbc ="CBC";
const tft ="TFT";
const tsh ="TSH";
const crb ="CRB";
const d ="VIT D";
const b12 ="VIT B12";
const c ="VIT C";
const esr ="ESR";
const iron ="IRON";

let carts=[] ;
let part;


    function all_cart(){
        document.getElementById("btn-ALL").classList.add("disabled");
        document.getElementById("btn-ALL").setAttribute( "disabled", "disabled");

        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();

        document.getElementById("cart-list").innerHTML -= "<li>"+ cbc +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ tft +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ tsh +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ crb +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ d +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ b12 +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ c +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ esr +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ iron +"</li>";

        document.getElementById("cart-list").innerText = ""

        carts.push(cbc);
        document.getElementById("cart-list").innerHTML += "<li>"+ cbc +"</li>";
        document.getElementById("btn-CBC").classList.add("disabled");
        document.getElementById("btn-CBC").setAttribute( "disabled", "disabled");
        carts.push(tft);
        document.getElementById("cart-list").innerHTML += "<li>"+ tft +"</li>";
        document.getElementById("btn-TFT").classList.add("disabled");
        document.getElementById("btn-TFT").setAttribute( "disabled", "disabled");
        carts.push(tsh);
        document.getElementById("cart-list").innerHTML += "<li>"+ tsh +"</li>";
        document.getElementById("btn-TSH").classList.add("disabled");
        document.getElementById("btn-TSH").setAttribute( "disabled", "disabled");
        carts.push(crb);
        document.getElementById("cart-list").innerHTML += "<li>"+ crb +"</li>";
        document.getElementById("btn-CRB").classList.add("disabled");
        document.getElementById("btn-CRB").setAttribute( "disabled", "disabled");
        carts.push(d);
        document.getElementById("cart-list").innerHTML += "<li>"+ d +"</li>";
        document.getElementById("btn-D").classList.add("disabled");
        document.getElementById("btn-D").setAttribute( "disabled", "disabled");
        carts.push(b12);
        document.getElementById("cart-list").innerHTML += "<li>"+ b12 +"</li>";
        document.getElementById("btn-B12").classList.add("disabled");
        document.getElementById("btn-B12").setAttribute( "disabled", "disabled");
        carts.push(c);
        document.getElementById("cart-list").innerHTML += "<li>"+ c +"</li>";
        document.getElementById("btn-C").classList.add("disabled");
        document.getElementById("btn-C").setAttribute( "disabled", "disabled");
        carts.push(esr);
        document.getElementById("cart-list").innerHTML += "<li>"+ esr +"</li>";
        document.getElementById("btn-ESR").classList.add("disabled");
        document.getElementById("btn-ESR").setAttribute( "disabled", "disabled");
        carts.push(iron);
        document.getElementById("cart-list").innerHTML += "<li>"+ iron +"</li>";
        document.getElementById("btn-IRON").classList.add("disabled");
        document.getElementById("btn-IRON").setAttribute( "disabled", "disabled");
    };

    function cans_cart(){
        document.getElementById("cart-list").innerHTML =""
        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();
        carts.shift();

        document.getElementById("btn-ALL").classList.remove("disabled");
        document.getElementById("btn-CBC").classList.remove("disabled");
        document.getElementById("btn-TFT").classList.remove("disabled");
        document.getElementById("btn-TSH").classList.remove("disabled");
        document.getElementById("btn-CRB").classList.remove("disabled");
        document.getElementById("btn-D").classList.remove("disabled");
        document.getElementById("btn-B12").classList.remove("disabled");
        document.getElementById("btn-C").classList.remove("disabled");
        document.getElementById("btn-ESR").classList.remove("disabled");
        document.getElementById("btn-IRON").classList.remove("disabled");
 
 
        document.getElementById("cart-list").innerHTML -= "<li>"+ cbc +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ tft +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ tsh +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ crb +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ d +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ b12 +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ c +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ esr +"</li>";
        document.getElementById("cart-list").innerHTML -= "<li>"+ iron +"</li>";

        document.getElementById("cart-list").innerText = ""

        document.getElementById("btn-ALL").disabled =false;
        document.getElementById("btn-CBC").disabled =false;
        document.getElementById("btn-TFT").disabled =false;
        document.getElementById("btn-TSH").disabled =false;
        document.getElementById("btn-CRB").disabled =false;
        document.getElementById("btn-D").disabled =false;
        document.getElementById("btn-B12").disabled =false;
        document.getElementById("btn-C").disabled =false;
        document.getElementById("btn-ESR").disabled =false;
        document.getElementById("btn-IRON").disabled =false;
        

    };

    function cbc_cart(){
        carts.push(cbc);
        document.getElementById("cart-list").innerHTML += "<li>"+ cbc +"</li>";
        document.getElementById("btn-CBC").classList.add("disabled");
        document.getElementById("btn-CBC").setAttribute( "disabled", "disabled");
    };

    function tft_cart(){
        carts.push(tft);
        document.getElementById("cart-list").innerHTML += "<li>"+ tft +"</li>";
        document.getElementById("btn-TFT").classList.add("disabled");
        document.getElementById("btn-TFT").setAttribute( "disabled", "disabled");
    };

    function tsh_cart(){
        carts.push(tsh);
        document.getElementById("cart-list").innerHTML += "<li>"+ tsh +"</li>";
        document.getElementById("btn-TSH").classList.add("disabled");
        document.getElementById("btn-TSH").setAttribute( "disabled", "disabled");
    };

    function crb_cart(){
        carts.push(crb);
        document.getElementById("cart-list").innerHTML += "<li>"+ crb +"</li>";
        document.getElementById("btn-CRB").classList.add("disabled");
        document.getElementById("btn-CRB").setAttribute( "disabled", "disabled");
    };

    function d_cart(){
        carts.push(d);
        document.getElementById("cart-list").innerHTML += "<li>"+ d +"</li>";
        document.getElementById("btn-D").classList.add("disabled");
        document.getElementById("btn-D").setAttribute( "disabled", "disabled");
    };

    function b12_cart(){
        carts.push(b12);
        document.getElementById("cart-list").innerHTML += "<li>"+ b12 +"</li>";
        document.getElementById("btn-B12").classList.add("disabled");
        document.getElementById("btn-B12").setAttribute( "disabled", "disabled");
    };

    function c_cart(){
        carts.push(c);
        document.getElementById("cart-list").innerHTML += "<li>"+ c +"</li>";
        document.getElementById("btn-C").classList.add("disabled");
        document.getElementById("btn-C").setAttribute( "disabled", "disabled");
    };

    function esr_cart(){
        carts.push(esr);
        document.getElementById("cart-list").innerHTML += "<li>"+ esr +"</li>";
        document.getElementById("btn-ESR").classList.add("disabled");
        document.getElementById("btn-ESR").setAttribute( "disabled", "disabled");
    };

    function iron_cart(){
        carts.push(iron);
        document.getElementById("cart-list").innerHTML += "<li>"+ iron +"</li>";
        document.getElementById("btn-IRON").classList.add("disabled");
        document.getElementById("btn-IRON").setAttribute( "disabled", "disabled");
    };



      




  