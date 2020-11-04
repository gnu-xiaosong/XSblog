var topic;
//显示指令函数
function orderShow(){
    print("");
print("请输入以下指令继续操作:");
console.verbose("0) 0 或 clear :清理控制台信息");
console.info("1) 1 或  go :继续搜题");
console.warn("2) 2 或 cg :清理控制台信息并进行搜题操作");
console.error("3) 3 或 hide :隐藏窗口");
order1=console.rawInput(">>");
order(order1);
}

//中间状态函数

//指令函数
function order(order){
   //指令判断
   if(order==0||order=="clear"){
   //清除console信息
   console.clear();
   orderShow();
   }
   else if(order==1||order=="go"){
   //继续查题
   var qu=console.rawInput("题目:");
   print(qu);
   topic=qu;
   }else if(order==2||order=="cg"){
   //清除同时并继续搜题
   console.clear();
   var qu=console.rawInput("题目:");
   topic=qu;
   }else if(order==3||order=="hide"){
   //隐藏控制台窗口
   console.hide();
   }else{
       print("非法指令！");
       orderShow();
       }
}

function judgement(data){
   let url ="http://api.xskj.store/index.php/api/user?";
   let re=http.get("http://api.xskj.store/index.php/user?user="+data.user+"&paw="+data.paw).body.json();
   let out=re;
//判断
if(out.code==500){
  console.warn(out.message);
  sleep(1000);
  print("错误信息:");
  console.warn(out.data);
  toast(out.message);
  return 0;
}else if(out.code==200){
  console.warn(out.message);
  sleep(1000);
  print("亲爱的"+data.user+"用户!");
  sleep(1000);
  let u="这是您第"+out.data.logCounts+"次登录";
  sleep(1000);
  let u1="这是您第"+out.data.apiCounts+"次调用";
  print(u);
  print(u1);
  toast(out.message);
  return 1;
}else{
  console.warn(out.message);
  sleep(1000);
  print("错误详情:");
  console.warn(out.data);
  toast(out.message);
  return 2;
}
}
//打开控制台
console.show();
console.info("欢迎使用小松题库api!");
console.info("请您先验证账号信息:");
var a;
var username;
var password;
do{

while(true){
username=console.rawInput("请输入用户名:");
if(username){
print("账号输入完成！");
break;
}else{
print("您还没输入账号！请重新输入！");
}
}


while(true){
password=console.rawInput("请输入密码:");
if(password){
print("密码输入完成！");
break;
}else{
print("您还没输入密码！请重新输入！");
}
}

 let Data={
"user":username,
"paw":password
};
a=judgement(Data);
}while(a==0)

//定义个函数
function api(url,data){
    var res = http.get(url+"dataType="+data.dataType+"&value="+data.value);
    return res;
    }
//接口地址
let url="http://api.xskj.store/index.php/api/get?";
//传输内容
let data={
    "dataType": "json",
    "value": "China"
};
var answer;
var au;
var order;
do{
//查题引导
//topic=console.rawInput("题目:");
orderShow();
console.error("查询中……");
data.value=topic;
answer=api(url,data).body.json();

//判断是否有返回值
if(answer.length==0){
 print("糟糕😰，该题目未发现！");
}else{
//遍历
for(var i=0;i<answer.length;i++){
au=i+1;
if(i>9){break;}
print("☆查询结果"+au+":");
print("$问题:"+answer[i].question);
print("$答案:"+answer[i].answer);
print("   ");
}
}
}while(true)

///let re=api(url,data).body.json();
//print(typeof re);
//print(re);e);//print(typeof re);
//print(re);e);;e);t(re);e);;e););t(re);e);;e);