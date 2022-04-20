let start = false;
$(".start-btn, .try-again").click(function() {
    if(start) {
        start = false;
        $(".start-btn").text("Start")
    }
    else {
        $(".start-btn").text("Pause")
        start = true;
    }
        let addContent = setInterval(() =>{
    if(start){

            var number = 1 + Math.floor(Math.random() * 500);
            $(".board-inside").append(`<img style="margin-left:${number}px" class="img" src="./img/evil.png" alt="">`)
            if(!start) {
                clearInterval(addContent);
            }
    }
        
        },1000)
        let checkHeight = setInterval(function() {
        if(start){
          


            if($(".board-inside").height() > 400){
                clearInterval(addContent);
                clearInterval(checkHeight)
                $(".game-over").addClass("game-over-hide");
                console.log($(this))
                $(".audio-end").trigger('play');
                $(".score").text("")
                start = false
            }
        }
        if(!start) {
            clearInterval(addContent);
            clearInterval(checkHeight)
        }
        },100)
 

})
setInterval(function(){
    $(".img").each(function(){
        $(this).off("click").on('click',function(){
            let x = Number($(".score").text()) + 1; 
            console.log("clicked")
            $(this).remove();
            $(".score").text(x)
                $(".audio").trigger('play');
        })
    })
    
},1000)

$(".try-again").click(function(){
    $(".game-over").removeClass("game-over-hide");
    $(".board-inside").html("")
})