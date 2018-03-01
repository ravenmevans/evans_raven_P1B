$(document).ready(function(){
    $("'.info-box button").clicked(function){
        $(this).toggleClass(".visible");
        if( $(this).hasClass(".visible") ){
            $(this).html("Show Less");
        }else{
            $(this).html("Show More");
        }
       
        $(this).next().toggleClass(".visible");
    }
}