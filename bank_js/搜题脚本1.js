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
  let u="这是您第"+out.data.logCounts+"次登录";
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

var topic;
var answer;
var au;
do{
//查题引导
topic=console.rawInput("题目:");
console.error("查询中……");
data.value=topic;
answer=api(url,data).body.json();


//判断是否有返回值
if(answer){
 print("糟糕😰，该题目未发现！");
}else{
//遍历
for(var i=0;i<answer.length;i++){
au=i+1;
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
//print(re);e);