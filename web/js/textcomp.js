

function addClass(cl) {
    $( "p" ).addClass( cl );
}

 function removeClass(cl) {
    $( "p" ).removeClass( cl );
}

function setBackground(r,g,b,a) {
    $("body").css("background-color", 'rgba('+Math.round(r*255)+','+Math.round(g*255)+','+Math.round(b*255)+','+Math.round(a*255)+')');
}

function enableColumns(toggle) {
    if (toggle == 'on') {
        $( "#maindiv" ).addClass( "twoColumns" );
    } else {
        $( "#maindiv" ).removeClass( "twoColumns" );
    }
}

function setCSS(object, key, value) {
    $(object).css(key,value);
}

function setColumnRule(width, r, g, b, a, decoration) {
    //$(".twoColumns").css("column-rule", "10px solid rgba(255,0,0,255)")
    $(".twoColumns").css("column-rule", width+"px "+ decoration + " rgba("+Math.round(r*255)+","+Math.round(g*255)+","+Math.round(b*255)+","+Math.round(a*255)+")");
}


$( document ).ready(function() {
    setColumnRule(1,1,0,0,1, "solid");
});