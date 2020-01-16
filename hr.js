   
    let video = document.querySelector(".vedio");
    let vedio = document.querySelector(".vedioGo");
    let go = document.querySelector(".go");
    vedio.onclick = function(){
        if(vedio.paused){
            vedio.play();
            go.style.display = 'none';
            $(".control").attr("style",'display:block');
        }else{
            vedio.pause();
            go.style.display = 'block';
        }
    }
    let y = 0;
    let x = '';
    let nowTime = 0;
    let duration = Math.floor(vedio.duration);
    let min2 = Math.floor(duration / 60);
    let second2 = duration % 60;
    let progress = document.querySelector(".progress");
    let resource = document.querySelector(".resource");

    if(second2 < 10){
        second2 = '0' + second;
    }
 
    vedio.addEventListener("timeupdate",() => {
        nowTime= Math.floor(vedio.currentTime);
        let min = Math.floor(nowTime / 60);
        let second = Math.floor(nowTime % 60);
        if(second < 10){
            second = "0" + second;
        }
        $(".time").html(min+":"+ second +"/" + min2 +':' + second2);
        progress.value = nowTime;
    })
    vedio.onpause = () => {
        $(".control").attr("style","display:block");
        $(".stop").attr("style",'display:block');
        $(".continue").attr("style",'display:none');
        go.style.display = 'block';
        progress.max = duration;
        progress.value = nowTime;
    }
    vedio.onplay = () => {
        $(".control").attr("style","display:block");
        $(".stop").attr("style",'display:none');
        $(".continue").attr("style",'display:block');
        $(".continue").attr("style",'display:none');
        go.style.display = 'none';
        progress.max = duration;
        progress.value = nowTime;
    }
    let u =0;
    let timer;
    function animate(){
        timer = setInterval(()=> {
            u = u+2; 
            progress.style.height = u +1+'px';
            if(u == 10){   
                u=0;
                clearInterval(timer);
                console.log(2);
                // progress.style.bottom = "24px";
            }
        }, 50)
        
    };
    progress.addEventListener('mouseenter', () => {
        clearInterval(timer);
        animate();
        $(".stop").attr("style","display:block");

    },false)
    progress.addEventListener('mouseleave', () => {
        clearInterval(timer);
        progress.style.height = '1px';
        progress.style.bottom = "32px";
    },false)
    progress.addEventListener('click', () => {
        let progressWidth = 900;
        let clickX = event.pageX - resource.offsetLeft - 10 - 68;
        let clickProgress = Math.floor(clickX / progressWidth *100);
        progress.value = clickProgress/100 * duration;
        vedio.currentTime = clickProgress/100 * duration;
    },false)
    let timer2;
    vedio.addEventListener("mouseout", () => {
        timer2 = setTimeout(() => {
            $(".stop").attr("style","display:none");
            $(".progress").attr("style","display:none");
            $(".time").attr("style","display:none");
        },3000)
    },false)
    vedio.addEventListener("mouseover", () => {
        clearTimeout(timer2);
            $(".stop").attr("style","display:block");
            $(".progress").attr("style","display:block");
            $(".time").attr("style","display:block");
            console.log(1);
    },false)
    let timer3;
    vedio.addEventListener("mousemove",() => {
        clearTimeout(timer3);
        if(vedio.paused){
            $(".continue").attr("style","display:block");
            $(".stop").attr("style",'display:none');
        }else{
            $(".stop").attr("style","display:block");
            $(".continue").attr("style",'display:none');
        }
        $(".progress").attr("style","display:block");
        $(".time").attr("style","display:block");
        $(".fullScreen").attr("style","display:block");
        timer3 = setTimeout(() => {
            $(".stop").attr("style","display:none");
            $(".progress").attr("style","display:none");
            $(".time").attr("style","display:none");
            $(".continue").attr("style","display:none");
            $(".fullScreen").attr("style","display:none");
        },3000)
    },false)

    $(".stop").click(() => {
        vedio.pause();
    })
    $(".continue").click(() => {
        vedio.play();
       
    })
    function FullScreen() {
        var ele = vedio;
        if (ele .requestFullscreen) {
            ele .requestFullscreen();
        } else if (ele .mozRequestFullScreen) {
            ele .mozRequestFullScreen();
        } else if (ele .webkitRequestFullScreen) {
            ele .webkitRequestFullScreen();
        }
    }
    function exitFullscreen() {
        var de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    }
    $(".fullScreen").click(() => {
        FullScreen();
    })

    function IsFull() {
        var fullscreenElement =
            document.fullscreenEnabled
            || document.mozFullscreenElement
            || document.webkitFullscreenElement;
        var fullscreenEnabled =
            document.fullscreenEnabled
            || document.mozFullscreenEnabled
            || document.webkitFullscreenEnabled;
        if (fullscreenElement == null)
        {
            return false;
        } else {
            return true;
        }
    }
    document.addEventListener("fullscreenchange",()=> {
        if(vedio.play){
            go.style.display = 'none';
        }else{
            go.style.display = 'block';
        }
    },false)
    // console.log(vedio.children[0].src)
    $(".medio1").click(() => {
        
        $(".vedioGo").attr("src",'2.mp4');
        vedio.pause();
        $(".vedioGo").attr("poster",'img/xjy.png');
        go.style.display = 'block';
        $(".control").attr("style",'display:none');
        // min2 = Math.floor(duration / 60);
        // second2 = duration % 60;
    })
    $(".medio2").click(() => {
        
        $(".vedioGo").attr("src",'1.mp4');
        vedio.pause();
        $(".vedioGo").attr("poster",'img/1.png');
        go.style.display = 'block';
        $(".control").attr("style",'display:none');
        // min2 = Math.floor(duration / 60);
        // second2 = duration % 60;
    })
    vedio.onloadedmetadata=function(){
        duration = Math.floor(vedio.duration);
        min2 = Math.floor(duration / 60);
        second2 = Math.floor(duration % 60);
        progress.max = duration;
        progress.value = 0;
      }
      