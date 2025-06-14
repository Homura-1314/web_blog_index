## 基于h5、css、js的个人网页

### 直接下载源代码部署即可

### 有个基于UglifyJS和cssnano工具压缩的版本，在Releases也能找到

## 文件条目说明

```
web_blog_index/
├── css
│   └── base # 定义了网站最基础的全局样式
│   └── components # 定义了网站中所有可复用的视觉“组件”的样式
│   └── layout # 负责网站的整体页面布局和结构
├── images # 存放图片和logo
├── js
│   └── modules # 存放js模块
│       └── data_basa # 项目的核心数据源
│       └── date # 数据渲染模块
│       └── Hitokoto # 封装api异步请求模块
│       └── img_rotation # 背景特效轮换模块
│       └── lazy-load # 赖加载处理模块
│       └── ui # 用户界面与交互模块
│   └── script # 主入口调用处
├── lib # 所有需要的资源工具包
├── about # "关于我" 页面
├── article # # 文章详情页
├── index # 网站主页
├── login # 登录页面
├── register 注册页面
```

