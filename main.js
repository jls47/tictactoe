localStorage.setItem("ospaces", "")
localStorage.setItem("xspaces", "")

var game = function(){
    var turn = 1;
    $(".board").children().click(function(){
        var id = $(this).attr('id');
        var choice = $(this).attr('choice');
        if(choice === 'X' || choice === 'O'){
            alert("Choose another square!");    
        }else{
            if(turn % 2 != 0){
                $('#'+id).css("background-image", 'url("x.png")')
                $('#'+id).css("background-size", "cover")
                $('#'+id).attr('choice', 'X')
                turn += 1;
                console.log($('#'+id).attr('choice'))
              
            }else{
                $('#'+id).css("background-image", 'url("o.png")')
                $('#'+id).css("background-size", "cover")
                $('#'+id).attr('choice', 'O')
                turn += 1;
                console.log($('#'+id).attr('choice'))
            };
        }
        console.log($('#31').attr('choice'));
        console.log($('#32').attr('choice'));
        console.log($('#33').attr('choice'));
        if($('#31').attr('choice') === $('#32').attr('choice') && $('#32').attr('choice') === $('#33').attr('choice')){
            alert('We have a winner!  ' + $('#31').attr('choice') + ' wins!');
            setTimeout(clear, 1000);
        }
        if($('#21').attr('choice') === $('#22').attr('choice') && $('#22').attr('choice') === $('#23').attr('choice')){
            alert('We have a winner!  ' + $('#21').attr('choice') + ' wins!');
            setTimeout(clear, 1000);
        }
        if($('#11').attr('choice') === $('#12').attr('choice') && $('#12').attr('choice') === $('#13').attr('choice')){
            alert('We have a winner!  ' + $('#11').attr('choice') + ' wins!');
            setTimeout(clear, 1000);
        }
        if($('#31').attr('choice') === $('#21').attr('choice') && $('#21').attr('choice') === $('#11').attr('choice')){
            alert('We have a winner!  ' + $('#31').attr('choice') + ' wins!');
            setTimeout(clear, 1000);
        }
        if($('#32').attr('choice') === $('#22').attr('choice') && $('#22').attr('choice') === $('#12').attr('choice')){
            alert('We have a winner!  ' + $('#32').attr('choice') + ' wins!');
            setTimeout(clear, 1000);
        }
        if($('#33').attr('choice') === $('#23').attr('choice') && $('#23').attr('choice') === $('#13').attr('choice')){
            alert('We have a winner!  ' + $('#33').attr('choice') + ' wins!');
            setTimeout(clear, 1000);
        }
        if($('#31').attr('choice') === $('#22').attr('choice') && $('#22').attr('choice') === $('#13').attr('choice')){
            alert('We have a winner!  ' + $('#31').attr('choice') + ' wins!');
            setTimeout(clear, 1000);
        }
        if($('#11').attr('choice') === $('#22').attr('choice') && $('#22').attr('choice') === $('#33').attr('choice')){
            alert('We have a winner!  ' + $('#33').attr('choice') + ' wins!');
            setTimeout(clear, 1000);
        }
    })
    
}

var clear = function(){
    localStorage.clear();
    $(".board").children().css("background-image", "none")
    $(".board").children().each(function(i){
        $(this).attr('choice', i)
    });
    localStorage.setItem("ospaces", "")
    localStorage.setItem("xspaces", "")

}

$(".clear").click(clear);

game();