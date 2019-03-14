function move(str){
    var x=0//只能直接给x,y,w,h值
//创建文本

 ctx.font ="20px SimHei"
 ctx.textBaseline = "top"
//   初始位置
 ctx.fillText(str,0,0)
 //2.2开始写移动程序
 //创建变量保存x
 var x=300//只能直接给x,y,w,h值
 var xDirection=1
var t=setInterval(function(){
    ctx.clearRect(0,0,300,300)
   console.log(x)
 x=x- 10 * xDirection
 //此处写位置
 ctx.fillText(str,x,0)
 if(x<300){
     xDirection = 1 }
  if(x<0 && x>-10){xDirection = 1}
},500)
}
//移动调用：
 move("abcd")