let player={
    left:40,
    top:50
}

let enemy={
    left:400,
    top:50
}

let windowWidth=document.documentElement.clientWidth
let windowHeight=document.documentElement.clientHeight

document.addEventListener('keydown',function(e){
    //alert(e.which)
    //стрелка влево
    if(e.which==37){
        if(player.left-40>0)
            player.left-=40;
    }
    //стрелка вверх
    else if(e.which==38){
        if (player.top-40>0)
            player.top-=40;
    }
    //стрелка вправо
    else if (e.which==39){
        if(player+40<windowWidth)
            player.left+=40;
    }
    //стрелка вниз
    else if (e.which==40){
        if(player+40<windowHeight)
            player.top+=40;
    }

     document.getElementById('player').style.top=player.top+'px';
     document.getElementById('player').style.left=player.left+'px';
})

function enemyMove(){
    if(player.top<enemy.top){
        enemy.top-=40;
    }
    if(player.top>enemy.top){
        enemy.top+=40;
    }
    if(player.left<enemy.left){
        enemy.left-=40;
    }
    if(player.left>enemy.left){
        enemy.left+=40;
    }

     document.getElementById('enemy').style.top=enemy.top+'px';
     document.getElementById('enemy').style.left=enemy.left+'px';

}

setInterval(enemyMove, 1000);