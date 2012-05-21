$(document).bind("mobileinit", function(){
                 
                 if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/Android 4/i))) {        

                    $.mobile.defaultPageTransition = 'turn';
                 
                 }else{
                 
                    $.mobile.defaultPageTransition = 'none';
                 
                 }
                 
                 });
