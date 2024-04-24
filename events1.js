

$(document).ready(function(){
    $(window).scroll(function(){
        console.log("You are scrolling....");         // for window
    });

     $('#box').scroll(function(){
        console.log("You are scrolling....");         // for id
    });

     $(window).resize(function(){
         console.log("You are resizing window......");         // for window
     });
});