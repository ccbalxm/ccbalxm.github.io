//函数自调用
(function() {
    var v3=document.getElementById("v3")
        v3.volume=0.5
        v3.playbackRate=1
        //找到图标的元素#btn3
 var btn3=document.getElementById("btn3")   
    //获得画布
    let canvas = document.
    getElementById("canvas"),
   //画笔
 ctx = canvas.getContext("2d")
    //播放与暂停,放在函数里面
    function playPause(){
        //先把z-index=0
        // v3.style.zIndex=0
    //获得当前视频状态
    // 1 当视频播放的时候，不显示播放图标
        v3.onplay=function(){
  btn3.style.display="none"
        }
    //1.1 当点击那个区域div时，显示此时应该显示状态，
    //并改变为点击后的状态
    
    //2 获取此时状态，当播放暂停时候，显示图标，
    v3.onpause=function(){
        btn3.style.display="block"
        btn3.src="img/pause.png"
              }
    //2.1 点击后改变图标，并开始播放
    btn3.onclick=canvas.onclick=function(){
        v3.play()
    }
    v3.onclick=canvas.onclick=function(){
        if(v3.paused==true){
            v3.play()
        }else{v3.pause()}
    }
}
playPause()



//以下是弹幕
  
    //  1 设置弹幕发送的位置
    //  2 描绘矩形    
    //  3 在矩形里面放文本
    //  4 点击弹幕发送。把发送里面的内容给矩形
 

    //开始按照步骤写 
    // 1 弹幕发送位置
      


     //2 先写矩形
//  2.4颜色函数
var colorArr=['0','1','2','3','4','5','6',
'7','8','9','a','b','c','d','e','f'];
function random(min,max){
    if(isNaN(min) || isNaN(max)){
        return null;
    }
    if(min > max){
        min ^= max;
        max ^= min;
        min ^= max;
    }
    return (Math.random() * (max - min) | 0) + min;}
function color1(){
    var color="#";
    for(var i=0;i<6;i++){
        color += colorArr[random(0,16)];
    }
    return color;
}

  //2.1 矩形左右移动
  function move(str){
     var x=300//只能直接给x,y,w,h值
 //创建文本

  ctx.font ="20px SimHei"
  ctx.textBaseline = "top"
//   初始位置
//   ctx.fillText(str,0,0)

//调用函数
ctx.fillStyle=color1()
  //2.2开始写移动程序
  //创建变量保存x
   //只能直接给x,y,w,h值
  var xDirection=1
  var y=Math.random()*100
 var t=setInterval(function(){
     ctx.clearRect(0,0,canvas.width,canvas.height)
    console.log(x)
  x=x- 10 * xDirection
  //此处写位置
  ctx.fillText(str,x,y)
  ctx.restore();
  if(x<300){
      xDirection = 1 }
    if(x<-100){ ctx.clearRect(0,0,300,300)}
   //停止定时器
  if(x<-100){clearInterval(t) 
    }
},100)

     
  
}

 //移动调用：
    
 
     // 3 发送弹幕
     let emit = document.getElementsByClassName("emit")[0]
     let btnD = document.getElementsByClassName("btnD")[0]
     console.log(emit)
     console.log(btnD)
     btnD.onclick=function(e){  
       
         e.preventDefault()
         console.log(123)
         var str = emit.value
         console.log(2)
          move(str)
     
     }
//    function show(){  
//         var e=window.event||arguments.callee.caller.arguments[0]
//         if(e.keyCode==13){move(str)}}
        
})();