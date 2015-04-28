jQuery.fn.imageAltAdder = function() { 
    var alt = this.attr('alt');
    return this.append('<span>' + alt+'</span>');	
};  
$("img.alt").imageAltAdder();
