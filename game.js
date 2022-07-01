let start = false;
let time = 1000;
let addContent;
let checkHeight;

$(".try-again").click(function() {
    location.reload();
})

function handleEvil(x, val) {
    $(".start-btn").click(function() {
        if(start) {
            start = false;
            $(".start-btn").text("Start")
        }
        else {
            $(".start-btn").text("Pause")
            start = true;
        }
    })
    addContent = setInterval(() =>{
        if(start){
                let number = 1 + Math.floor(Math.random() * 500);
                $(".board-inside").append(`<img style="margin-left:${number}px" class="img" src="./img/evil.png" alt="">`)
                if(!start) {
                    clearInterval(addContent);
                }
        }
            },x)
            $(".reset-game").on("click",function(e) {
                location.reload();
            });
}  
        checkHeight = setInterval(function() {
        if(start){
            if($(".board-inside").height() > 400){
                clearInterval(addContent);  
                clearInterval(checkHeight)
                $(".game-over").addClass("game-over-hide");
                $(".audio-end").trigger('play');
                $(".score").text("")
                start = false
            }
        }
        },100)



$('.gm-level').each(function () {
    $(this).on("click", function(){

        if($(this).text() == 
        "Easy") {
            $(".start-btn").css("display", "inline-block"); 
            $(".game-control-level").css("display", "none"); 
            handleEvil(1000, false);
        }
        else if($(this).text() == 
        "Medium") {
            $(".start-btn").css("display", "inline-block"); 
            $(".game-control-level").css("display", "none"); 
            handleEvil(800, false);
        }
        else if($(this).text() == 
        "Hard") {
            $(".start-btn").css("display", "inline-block"); 
            $(".game-control-level").css("display", "none"); 
            handleEvil(700, false);
        }
        $(".gm-level").not(this).removeClass("active");
        $(this).addClass("active");
        $(".board-inside").html("");
        $(".start-btn").text("Start")
    });
})

setInterval(function(){
    $(".img").each(function(){
        $(this).off("click").on('click',function(){
            let x = Number($(".score").text()) + 1; 
            $(this).remove();
            $(".score").text(x)
                $(".audio").trigger('play');
        })
    })
    
}, time)

$(".try-again").click(function(){
    $(".game-over").removeClass("game-over-hide");
    $(".board-inside").html("")
})