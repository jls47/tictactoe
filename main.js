var game = function(){
    var turn = 1;
    $(".box").click(function(){
        var id = $(this).attr('id');
        if($(this).is(':empty')){    
            if(turn % 2 != 0){
                //$('#'+id).prepend("<img src='x.png'/>")
                $('#'+id).css("background-image", 'url("x.png")')
                $('#'+id).css("background-size", "cover")
                turn += 1;
                var oldx = localStorage.getItem("xspaces");
                if( oldx === null){
                    localStorage.setItem("xspaces", id);
                }else{
                    localStorage.setItem("xspaces", oldx + ", " + id);
                };
                console.log(localStorage.getItem("xspaces"));
            }else{
                //$('#'+id).prepend("<img src='o.png'/>")
                $('#'+id).css("background-image", 'url("o.png")')
                $('#'+id).css("background-size", "cover")
                turn += 1;
                var oldo = localStorage.getItem("ospaces")
                if( oldo === null){
                    localStorage.setItem("ospaces", id);
                }else{
                    localStorage.setItem("ospaces", oldo + ", " + id);
                };
                console.log(localStorage.getItem("xspaces"));
            };
        }else{
            alert("Choose another square!")
        }
    })
}

$(".clear").click(function(){
    localStorage.clear();
    location.reload();
})

game();