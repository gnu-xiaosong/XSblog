### auto.js脚本合集

# 搜题脚本1. js自动调用题库接口api借助console控制台灵活显示
# 添加指令版，更加便捷操作，优化部分代码
```
print("请输入以下指令继续操作:");

console.verbose("0) 0 或 clear :清理控制台信息");

console.info("1) 1 或  go :继续搜题");

console.warn("2) 2 或 cg :清理控制台信息并进行搜题操作");

console.error("3) 3 或 hide :隐藏窗口");

order1=console.rawInput(">>");

order(order1);

```
* 截图:
[![B66KhQ.jpg](https://s1.ax1x.com/2020/11/04/B66KhQ.jpg)](https://imgchr.com/i/B66KhQ)

# 搜题脚本2  添加性特性，自动获取粘贴板内容并自动搜题返回，优化代码结构，更加可复用
