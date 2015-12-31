jQuery(function(){
    var agent = navigator.userAgent;
    if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
        jQuery('.monkey').append('<img src="./img/monkey.png">');
    } else {
        jQuery('.monkey').addClass('sp');
    }
});