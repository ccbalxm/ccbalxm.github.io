
//1 点击显示登录部分
  var login=document.querySelector(".login")
  var formLog=document.querySelector(".formLogin")
  // var opacity = document.getElementsByClassName("opacity")[0]
//准备隐藏显示函数
var show=function(obj){
     if(obj.style.display=="none"){
         obj.style.display="block"
     }else{obj.style.display="none"}
}
  //绑定单击事件
login.onclick=function(e){
  // opacity.style.display = "block"
  // opacity.style.visibility = "visible"
 show(formLog)
    e.preventDefault()
  
}
// // 登录跳转并返回登录名字
//  var dl=document.getElementsByClassName("dl")[0]
//  console.log("11")
// dl.onclick=function(){
//  //3:保存用户名 sessionStorage
  
  // sessionStorage.setItem("name",uname.value);}
//  //4:3s自动跳转 03_index.html
//   alert("3s后跳转回首页");
//   setTimeout(function(){
// //    //1:获取用户登录名称
//     var uname = sessionStorage.getItem("name");
// //    //2:如果登录成功
//    if(uname){
     
//      login.innerHTML = "欢迎回来:"+uname+" <a href='06退出.html'>退出</a>";
//     }
//     location.href = "页面.html";
//   },3000);
 

//2 登录表的验证
var uname = document.getElementsByName("uname")[0]
var upwd = document.getElementsByName("upwd")[0]
 console.log(upwd)//打桩
//登录键
var submit = document.getElementsByClassName("dl1")[0]
  console.log(submit)
  //图标
  var true1=document.getElementsByClassName("true")[0]
  var false1=document.getElementsByClassName("false")[0]
//建立判别函数
 function txt(txt){
  txt.onfocus=function(){
  console.log("获取")
}
txt.onblur=function(){
 vali1(txt)
}}
//对密码判别
function txt2(txt){
  txt.onfocus=function(){
  console.log("获取")

}
txt.onblur=function(){vali2(txt)}
}

//返回true函数
function vali2(txt){
  var reg = /^\w{5,7}$/
  if(reg.test(txt.value)){
    console.log("正确")
    false1.style.display="inline-block"
    false1.src="img/true.png"
    return true;
  }else{console.log("错误")
   false1.style.display="inline-block"
   false1.src="img/false.png"
   upwd.value="请输入6位字母"
  return false}
}
// 返回true函数
function vali1(txt){
  var reg = /^\d{2,6}$/
  if(reg.test(txt.value)){
    console.log("正确")
    true1.style.display="inline-block"
    true1.src="img/true.png"
  return true
  }else{console.log("错误")
  true1.style.display="inline-block"
  true1.src="img/false.png"
  uname.value=""
  uname.value="请输入6位数字"
  return false}
}
//调用函数
 txt(uname)
 txt2(upwd)
 console.log( txt2(upwd))
 //判断提交
  submit.onclick=function(){
     
if( (vali1(uname) && vali2(upwd))==true){ 
  console.log("ok")
   login.innerHTML="欢迎回来tom"
   formLog.style.display="none"
}else{console.log("错误")}
}


