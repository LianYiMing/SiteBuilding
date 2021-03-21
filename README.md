## Welcome to My  Site Building Repository 
整理
1.建站教程
https://www.uemo.net
The Republic of China Flag

### #建站御用工具

> 这里专门放实用的HTMl+CSS+JS
>
> #### **[#配图](https://github.com/LianYiMing/Pictures)——[#字体](https://github.com/LianYiMing/Fonts)**
>
> 详见另外俩仓库（超链接里）

**Achieve**
jjj
1.[我的博客](https://www.lianyiming.com)阔以康康

2.[我的另一个博客](https://www.lym.cool)也阔以康康

3.[My Github](https://github.com/LianYiMing)还阔以康康

# `JavaScript`


```JS基本语法
# #1.注释
/*  this */
# # 2.网页插入Js
<script>具体内容</script>
# # 3.引用外部Js
<script src='绝对路径'></script>
```

#### **一些模块化十分漂亮的js**

### `播放器`

1.Aplayer|Meting.js

开源地址：

Aplayer：https://github.com/MoePlayer/APlayer

Meting.js：https://github.com/metowolf/MetingJS

食用方法：

https://blog.csdn.net/ywen_sama/article/details/88646741

2.明月浩空音乐播放器

https://myhkw.cn/

### `第三方网页统计`

1.不蒜子

> 无后端，只用插入JS可以直接在页脚引用它的访问人数

http://busuanzi.ibruce.info/

食用方法：

http://ibruce.info/2015/04/04/busuanzi/

### `网页通知`

1.Webpush

> 通过浏览器通知用户文章更新

https://app.webpushr.com/dashboard/geo-report

### `幻灯片`

1.impress.js

> 最初看到真有被震惊到，是一个开源的网页3d幻灯片库

体验一下：https://impress.js.org/

开源地址：https://github.com/impress/impress.js

2.Reveal.js

> 简单易上手，支持markdown和html的幻灯片，相比于
>
> PowerPoint动画可以说吊打

以前写的：http://www.lianyiming.com/Reveal.js/LianYiMing.html

开源地址：https://github.com/hakimel/reveal.js

> 由于有使用门槛——`如果你是个人站长那当然无所谓`
>
> 底下是几个感觉不戳的教程

[少数派大佬——感觉是说的最清的](https://sspai.com/post/40657)

### `Jquery`

诞生于JavaScript的动画引擎Jquery的一个论坛

https://www.jq22.com/
1.打字机效果
https://blog.csdn.net/sinat_33312523/article/details/72628958?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param
2.

# `CSS`

>  底下是一些用现有css技术做的十分漂亮的

1.47 个使用 CSS3 实现的酷炫效果展示@菜鸟教程

https://www.runoob.com/w3cnote/47-css3-useful-tutorials-and-techniques.html

2.一个web前端特效论坛@web骇客

https://www.webhek.com/

# `Github`

**Readme.md**彩色小块快

1.https://shields.io/category/analysis

2.

**Gitaction**

> Github自动化

开源地址：https://github.com/features/actions

食用方法：[GitHub Actions 入门教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

1.天气自动转发，挺有意思

https://www.ruanyifeng.com/blog/2019/12/github_actions.html

2.两个存储库之间同步

https://github.com/marketplace?type=actions&query=Repositories+

1.[首先是创建token（来自GithubDos）](/md/token.md)

2.在想要被同步覆盖的仓库加入gitaction

PS：Github组织貌似能有token

### `一些常见问题`

#### 1.来自公众号的图片无法引用

[解决此图片来自微信公众平台未经许可不可引用-百度经验](https://jingyan.baidu.com/article/6fb756ec74af3b241858fbf3.html)

2.favicon无法显示
https://www.jianshu.com/p/a2364a3fa718
3.

### `站长专用梯子`

1.[蓝灯 - 让人人都能访问开放的互联网](https://getlantern.org/zh_CN/)

2.[墙外看  - 精品vpn推荐](https://qiangwaikan.com/)

### `搜索引擎收录直达`

1.[神马站长平台](https://zhanzhang.sm.cn/open/briefPage?order=1&view=0)

2.[百度站长平台](https://ziyuan.baidu.com/property/)

3.[2020年10款最好用的免费VPN(在中国依然可用) - 墙外看](https://qiangwaikan.com/free/)
4.

### `惊艳的设计`

博客园

1.https://www.cnblogs.com/antmoe/

2.https://www.cnblogs.com/winter-shadow/

个人博客

1.https://www.onyi.net/archives/

2.https://yzyyz.top/

3.https://www.iuiu.run/

高仿github的UI

http://www.telihai.com/



### `一点心得`

**1.不知道自己错在哪里**

初学一定要学会对照实验找错误，用新页面试试

**2.一个问题没有解决又遇到了另一个问题**
first-对比难易
先解决简单的
second-都难就一次一个
同时解决两个问题多线程反而效率低下

**3.状态不好**

感觉不好尽量干不需要动脑的机械性job

-----比如给CSS按字母顺序排序

精神好了再解决动脑问题

**4.抽风的github**
镜像1
https://ghproxy.com/
镜像2
https://doc.fastgit.org/zh-cn/
加速1
https://niao.su/7/

常见的错误就是

```javascript
GET https://www.lym.cool/js/Aplayer/player.js net::ERR_ABORTED 404
```

其实就是因为文件的大小写问题（url和src都要区分大小写）

但改文件名后git查不出来，所以尽量修改src的链接

不改src就删除后提交

再ctrl+z还原再提交

# `CDN`

**1.牛逼的jdeliver**

https://www.jsdelivr.com/?docs=gh

最快且免费的cdn，并且不需要注册，可以直接给github里某一个仓库的文件进行cdn化加速

https://cdn.jsdelivr.net/gh/加上用户名/加上存储库@发布的版本号/文件名

比如给20Mb的筑紫a丸字体做了个cdn（中文会自动转码）

https://cdn.jsdelivr.net/gh/LianYiMing/Fonts@v0.1/%E7%AD%91%E7%B4%ABa%E4%B8%B8%EF%BC%88%E5%B7%B2%E8%BD%ACwoff%EF%BC%89.woff

几秒就加载完了，极其快

甚至可以专门建一个github库来用cdn

**2.又拍云**

看很多大佬都在用，算是国内不错的

[又拍云JS库加速服务](http://jscdn.upai.com/)

### `进阶`

1.伪元素

[理解:Before和:After伪元素 – WEB骇客](https://www.webhek.com/post/understanding-pseudo-element-before-and-after.html)

### `好论坛`

1.https://ruby-china.org/

### 中共
广电局媒体控制wiki
https://zh.m.wikipedia.org/wiki/%E5%B9%BF%E7%94%B5%E6%80%BB%E5%B1%80%E6%94%BF%E7%AD%96%E4%B8%8E%E7%A6%81%E4%BB%A4%E5%88%97%E8%A1%A8
