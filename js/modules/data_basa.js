const articles = {
  "project-intro": {
    title: "关于本站：三叶✨次元",
    excerpt:
      "一个基于原生HTML/CSS/JS构建的个人博客空间。旨在探索现代前端设计的可能性，并记录学习过程中的思考与沉淀。欢迎你的到来！",
    image: "images/bg6.jpg",
    tags: "#JavaScript #HTML #CSS #Web",
    category: "博客",
    author: "三叶hikari",
    date: "2025-6-12",
    content: ``,
  },
  "docker-intro": {
    title: "Docker入门：告别“我电脑上明明是好的”",
    excerpt:
      "作为开发者，你一定遇到过“环境不一致”的噩梦。Docker正是解决这一问题的银弹。本文将带你初探Docker的世界。",
    image: "images/bg1.jpg",
    tags: "#Docker #DevOps #后端",
    category: "服务部署",
    author: "三叶hikari",
    date: "2025-6-12",
    content: `
        <h2>前言：那个熟悉的“魔咒”</h2>
        <p>“在我电脑上明明是好的啊！” —— 这句话，恐怕是每个开发者都说过或听过的“魔咒”。项目的运行依赖于特定的操作系统、特定版本的JDK、特定配置的Tomcat... 任何一个环节的微小差异，都可能导致程序崩溃。</p>
        <p>作为一名主攻Java的开发者，我深知环境配置的繁琐与痛苦。而Docker，就是将我们从这场噩梦中解救出来的英雄。</p>
        
        <h2>Docker是什么？一个码头的比喻</h2>
        <p>想象一下，我们开发的Java应用是一批需要远洋运输的“货物”。</p>
        <ul>
            <li><strong>没有Docker的时代：</strong> 我们需要自己找船，担心船上的冷藏设备（JDK版本）对不对，担心船舱的尺寸（操作系统）合不合适。换一艘船，可能所有东西都得重新打包。</li>
            <li><strong>有了Docker的时代：</strong> 我们把“货物”（我们的应用）连同它需要的一切环境（JDK、Tomcat、依赖库），全部打包进一个标准化的**集装箱（Container）**。这个集装箱有统一的接口，可以在任何支持这种标准的码头（安装了Docker的机器）上被吊起和运行，完全不用关心码头本身的设施差异。</li>
        </ul>
        <p>这个“集装箱”，就是Docker的核心——容器。它提供了一个隔离的、标准化的运行环境，确保了从开发、测试到生产的每一处环境都完全一致。</p>
  
        <h2>三大核心概念</h2>
        <p>要理解Docker，必须掌握这三个概念：</p>
        <ol>
          <li><strong>镜像 (Image):</strong>  可以理解为创建集装箱的“图纸”或“模板”。它是一个只读文件，包含了运行应用所需的所有指令、代码和依赖。我们通常基于一个基础镜像（如一个包含JDK的镜像），然后一层层添加自己的应用。</li>
          <li><strong>容器 (Container):</strong> 镜像的运行实例。就是我们用“图纸”造出来的那个能跑的“集装箱”。容器之间互相隔离，有自己的文件系统、进程和网络空间。我们可以创建、启动、停止、删除容器。</li>
          <li><strong>仓库 (Repository):</strong> 存放镜像的“仓库”。最著名的就是官方的Docker Hub，我们可以从上面拉取（pull）别人做好的镜像，也可以把自己做好的镜像推送（push）上去。</li>
        </ol>
        
        <h2>一个简单的Java应用Docker化实例</h2>
        <p>假设我们有一个简单的Spring Boot项目，打成了一个<code>app.jar</code>包。我们可以通过一个名为<code>Dockerfile</code>的文件来定义它的镜像“图纸”：</p>
        <pre><code class="language-dockerfile">
  # 步骤1: 选择一个包含Java 17的基础镜像
  FROM openjdk:17-jdk-slim
  
  # 步骤2: 设置工作目录
  WORKDIR /app
  
  # 步骤3: 将我们本地的jar包复制到镜像的/app目录下
  COPY target/app.jar app.jar
  
  # 步骤4: 声明容器对外暴露的端口
  EXPOSE 8080
  
  # 步骤5: 定义容器启动时执行的命令
  ENTRYPOINT ["java", "-jar", "app.jar"]
        </code></pre>
        <p>有了这个<code>Dockerfile</code>，我们只需要在项目根目录下执行两个简单的命令：</p>
        <pre><code class="language-shell">
  # 1. 构建镜像，并给它起个名字叫 my-java-app
  docker build -t my-java-app .
  
  # 2. 运行镜像，生成一个容器，并将容器的8080端口映射到我们主机的8080端口
  docker run -p 8080:8080 my-java-app
        </code></pre>
        <p>就这样，我们的Java应用就在一个完全隔离的环境中运行起来了！无需在主机上安装Java，是不是非常神奇？</p>
  
        <h2>结语</h2>
        <p>Docker的强大远不止于此，它彻底改变了现代软件的开发和部署流程。对于我们后端开发者而言，掌握Docker意味着能更高效、更可靠地交付我们的应用。这只是一个开始，接下来还有Docker Compose、Kubernetes等更广阔的世界等待我们探索。</p>
      `,
  },
  "git-basics": {
    title: "Git入门：不止是Ctrl+S，更是团队协作的基石",
    excerpt:
      "从个人备份到团队协作，Git是现代开发的必备技能。本文将带你了解Git的核心概念，并掌握最常用的命令，让你轻松上手版本控制。",
    image: "images/bg10.jpg",
    tags: "#Git #版本控制 #DevOps",
    category: "基础",
    author: "三叶hikari",
    date: "2025-06-12",
    content: `
      <h2>为什么每个开发者都应该用Git？</h2>
      <p>你是否经历过这样的场景：为了保险起见，把项目文件复制成 <code>项目_v1.zip</code>, <code>项目_v2.zip</code>, <code>项目_最终版.zip</code>, <code>项目_打死不改版.zip</code>？这种方式既混乱又低效。Git正是为了解决这个问题而生的。</p>
      <p>Git是一个强大的<strong>分布式版本控制系统</strong>。它能帮你：</p>
      <ul>
        <li><strong>记录每一次修改</strong>：你可以随时回到项目的任何一个历史版本。</li>
        <li><strong>放心大胆地尝试</strong>：通过“分支”功能，你可以随意尝试新功能，而不用担心搞坏主线代码。</li>
        <li><strong>高效团队协作</strong>：轻松合并多人代码，解决冲突，让团队开发变得井然有序。</li>
      </ul>
      <h2>核心概念：工作区、暂存区、本地仓库</h2>
      <p>想象一个三步走的工作流：</p>
      <ol>
        <li><strong>工作区 (Working Directory)</strong>：就是你电脑上能看到的项目文件夹，你在这里编写代码。</li>
        <li><strong>暂存区 (Staging Area)</strong>：一个临时的“购物车”。你写完一部分代码后，执行 <code>git add</code> 命令，就像是把“改动”放进购物车，准备一次性“结账”。</li>
        <li><strong>本地仓库 (Local Repository)</strong>：执行 <code>git commit</code> 命令，就是“结账”，把暂存区的所有改动生成一个快照（版本），永久保存在你的本地仓库里。</li>
      </ol>
      <h2>常用命令实战</h2>
      <p>掌握以下几个命令，你就能应对80%的日常工作：</p>
      <pre><code class="language-shell">
# 1. 初始化一个新的Git仓库
git init

# 2. 将文件改动添加到暂存区
# 添加指定文件
git add index.html
# 添加所有改动
git add .

# 3. 将暂存区的改动提交到本地仓库
git commit -m "这里写本次提交的描述信息，比如：完成首页布局"

# 4. 查看当前仓库的状态
git status

# 5. 查看提交历史
git log
      </code></pre>
      <h2>分支：Git的“平行宇宙”</h2>
      <p>分支是Git最强大的功能之一。假设你正在开发一个新功能，比如“用户登录”。你可以创建一个名为 <code>feature-login</code> 的新分支，在这个分支上进行所有开发。这期间，主分支（通常是 <code>main</code> 或 <code>master</code>）的代码完全不受影响。当你开发完成并测试通过后，再把这个分支合并回主分支即可。</p>
      <pre><code class="language-shell">
# 创建一个名为 feature-login 的新分支
git branch feature-login

# 切换到这个新分支
git checkout feature-login

# (在这里进行开发和多次commit...)

# 开发完成后，先切换回主分支
git checkout main

# 将 feature-login 分支的改动合并到主分支
git merge feature-login
      </code></pre>
      <h2>结语</h2>
      <p>Git的学习曲线可能有些陡峭，但它带来的回报是巨大的。掌握Git，意味着你拥有了“代码时光机”，能让你的开发工作更加从容和专业。这只是一个开始，远程仓库（如GitHub）的交互将是你的下一站！</p>
    `,
  },

  "restful-api": {
    title: "RESTful API设计指南：构建优雅且可预测的Web服务",
    excerpt:
      "作为连接前后端的桥梁，API的设计至关重要。本文将介绍RESTful风格的核心原则，帮助你设计出清晰、易于理解和维护的API。",
    image: "images/bg11.jpg",
    tags: "#API #REST #后端 #架构",
    category: "微服务",
    author: "三叶hikari",
    date: "2025-06-12",
    content: `
      <h2>什么是RESTful API？</h2>
      <p>你可能经常听到这个词，但它到底是什么意思？REST (Representational State Transfer) 是一种软件架构风格，而不是一个硬性标准。当一个API遵循了REST的原则，我们就可以称之为“RESTful API”。它的核心思想是：<strong>用URL定位资源，用HTTP动词（GET, POST, PUT, DELETE）描述操作。</strong></p>
      
      <h2>核心原则</h2>
      <h3>1. 资源 (Resource)</h3>
      <p>在REST中，万物皆资源。一篇博客、一个用户、一张订单，都是资源。每个资源都应该有一个唯一的URL来标识。这个URL应该是名词，而不是动词。</p>
      <ul>
        <li><span style="color: #e74c3c;">不推荐</span>: <code>/getAllUsers</code>, <code>/createUser</code></li>
        <li><span style="color: #2ecc71;">推荐</span>: <code>/users</code></li>
      </ul>

      <h3>2. HTTP动词 (Verb)</h3>
      <p>对于同一个资源URL (<code>/users</code>)，我们使用不同的HTTP方法来执行不同的操作：</p>
      <ul>
        <li><strong>GET /users</strong>: 获取所有用户列表。</li>
        <li><strong>GET /users/123</strong>: 获取ID为123的用户信息。</li>
        <li><strong>POST /users</strong>: 新增一个用户（请求体中包含用户信息）。</li>
        <li><strong>PUT /users/123</strong>: 完整更新ID为123的用户信息。</li>
        <li><strong>DELETE /users/123</strong>: 删除ID为123的用户。</li>
      </ul>
      <p>你看，URL始终是名词，而操作则由HTTP动词清晰地表达。</p>

      <h3>3. 表现层 (Representation)</h3>
      <p>资源可以有多种外在表现形式，比如JSON、XML或HTML。客户端和服务器之间传递的，就是资源的某种“表现层”。如今，JSON凭借其轻量和易于解析的特性，已成为事实上的标准。</p>
      <p>一个典型的JSON响应应该长这样：</p>
      <pre><code class="language-json">
// GET /users/123 的响应
{
  "id": 123,
  "username": "三叶hikari",
  "email": "hikari@example.com",
  "registered_at": "2025-01-01T12:00:00Z"
}
      </code></pre>

      <h3>4. 使用HTTP状态码</h3>
      <p>API应该通过标准的HTTP状态码来传达操作结果，而不是在响应体里自定义成功或失败信息。</p>
      <ul>
        <li><strong>200 OK</strong>: 请求成功。</li>
        <li><strong>201 Created</strong>: 资源创建成功 (通常用于POST请求后)。</li>
        <li><strong>204 No Content</strong>: 操作成功，但没有内容返回 (通常用于DELETE请求后)。</li>
        <li><strong>400 Bad Request</strong>: 客户端请求有误（如参数错误）。</li>
        <li><strong>401 Unauthorized</strong>: 用户未认证。</li>
        <li><strong>404 Not Found</strong>: 请求的资源不存在。</li>
        <li><strong>500 Internal Server Error</strong>: 服务器内部错误。</li>
      </ul>

      <h2>结语</h2>
      <p>设计良好的RESTful API就像编写清晰的文档，它应该是自解释的、可预测的。作为后端开发者，遵循这些简单的原则，不仅能让前端同事更轻松地与你协作，也能让未来的自己更容易维护和扩展你的服务。这是从“能用”到“好用”的关键一步。</p>
    `,
  },
  "css-flexbox": {
    title: "告别浮动：CSS Flexbox布局完全指南",
    excerpt:
      "还在为清除浮动和垂直居中而头疼吗？Flexbox（弹性盒子布局）是现代CSS布局的解决方案，让你用更少、更直观的代码实现复杂的布局。",
    image: "images/bg13.jpg",
    tags: "#CSS #Flexbox #前端",
    category: "核心",
    author: "三叶hikari",
    date: "2025-06-12",
    content: `
      <h2>为什么需要Flexbox？</h2>
      <p>在Flexbox出现之前，Web布局依赖于一些“黑科技”，比如 <code>float</code>（浮动）。虽然能用，但它们的设计初衷并非用于整体页面布局，因此常常会带来一些副作用，比如父元素高度塌陷、需要手动清除浮动等。垂直居中更是前端开发者长久以来的“噩梦”。</p>
      <p>Flexbox的出现，就是为了从根本上解决这些问题。它提供了一个更加高效、可预测的方式来对容器中的元素进行对齐、分布和排序。</p>
      
      <h2>两个核心概念：容器和项目</h2>
      <p>要使用Flexbox，你只需要记住两个东西：</p>
      <ol>
        <li><strong>Flex容器 (Flex Container)</strong>: 你想进行布局的那个父元素。你只需要给它设置 <code>display: flex;</code>。</li>
        <li><strong>Flex项目 (Flex Item)</strong>: 容器里的直接子元素。它们会自动成为Flex项目。</li>
      </ol>
      <pre><code class="language-css">
.container {
  display: flex; /* 就这么简单，容器就启动了Flex布局 */
}

.item {
  /* 我是容器的子元素，自动成为Flex项目 */
}
      </code></pre>

      <h2>容器的关键属性</h2>
      <p>一旦一个元素成为Flex容器，你就可以用下面这些属性来控制它的子元素如何排列：</p>
      <ul>
        <li><strong>flex-direction</strong>: 决定主轴的方向（项目排列的方向）。
          <ul>
            <li><code>row</code>: 水平排列（默认值）。</li>
            <li><code>column</code>: 垂直排列。</li>
          </ul>
        </li>
        <li><strong>justify-content</strong>: 控制项目在<strong>主轴</strong>上的对齐方式。
          <ul>
            <li><code>flex-start</code>: 靠左/上对齐（默认）。</li>
            <li><code>flex-end</code>: 靠右/下对齐。</li>
            <li><code>center</code>: 居中对齐。</li>
            <li><code>space-between</code>: 两端对齐，项目之间间隔相等。</li>
            <li><code>space-around</code>: 每个项目两侧的间隔相等。</li>
          </ul>
        </li>
        <li><strong>align-items</strong>: 控制项目在<strong>交叉轴</strong>（与主轴垂直的轴）上的对齐方式。
          <ul>
            <li><code>stretch</code>: 拉伸占满容器高度/宽度（默认）。</li>
            <li><code>flex-start</code>: 靠上/左对齐。</li>
            <li><code>flex-end</code>: 靠下/右对齐。</li>
            <li><code>center</code>: 垂直/水平居中对齐。<strong>实现垂直居中的神器！</strong></li>
          </ul>
        </li>
        <li><strong>flex-wrap</strong>: 控制项目是否换行。
          <ul>
            <li><code>nowrap</code>: 不换行，可能会压缩项目（默认）。</li>
            <li><code>wrap</code>: 空间不足时自动换行。</li>
          </ul>
        </li>
      </ul>

      <h2>实战：做一个完美的居中</h2>
      <p>想让一个元素在它的父容器里实现完美的水平和垂直居中吗？在Flexbox之前这很复杂，但现在只需要三行代码：</p>
      <pre><code class="language-css">
.parent {
  display: flex;
  justify-content: center; /* 主轴（水平）居中 */
  align-items: center;     /* 交叉轴（垂直）居中 */
  height: 300px; /* 父容器需要有高度 */
  border: 1px solid #ccc;
}

.child {
  width: 100px;
  height: 100px;
  background-color: #6a82fb;
}
      </code></pre>
      
      <h2>结语</h2>
      <p>Flexbox是现代前端开发不可或缺的技能。它不仅代码直观，而且功能强大，能够轻松应对绝大多数布局需求。一旦你习惯了用Flexbox思考布局，你将再也回不去那个与浮动和定位斗智斗勇的时代了。接下来，你还可以探索它的兄弟——CSS Grid布局，它们将共同构成你强大的布局工具箱。</p>
    `,
  },
  "js-async": {
    title: "深入理解JavaScript异步：从回调到Async/Await",
    excerpt:
      "JavaScript是单线程的，但它如何处理网络请求等耗时操作而不会卡住页面？本文将带你走过JS异步编程的进化史，彻底理解异步的魅力。",
    image: "images/bg14.jpg",
    tags: "#JavaScript #异步 #Promise",
    category: "核心",
    author: "三叶hikari",
    date: "2025-06-13",
    content: `<h2>单线程的“困境”</h2><p>想象一下你在餐厅点餐。如果服务员在你的菜做好之前，就一直站在你桌边干等，不能去服务其他客人，那效率该有多低？JavaScript就是这样一个“单线程”服务员。如果它执行一个耗时操作（比如从服务器获取数据），它就会被“阻塞”，整个页面都会卡住无法响应。</p><p>为了解决这个问题，JavaScript采用了异步编程模型。</p><h2>第一阶段：回调函数 (Callback)</h2><p>最原始的解决方案是回调函数。就像你告诉服务员：“我的菜做好了再叫我”，然后你就可以继续玩手机了。服务员（JS主线程）把任务（网络请求）交给“厨房”（浏览器内核），然后继续处理其他事情。当“厨房”把菜做好了，就会回来“回调”你。</p><pre><code class="language-javascript">function fetchData(callback) {\n  // 模拟一个耗时2秒的网络请求\n  setTimeout(() => {\n    const data = { message: '数据来了！' };\n    callback(data); // 任务完成，执行回调\n  }, 2000);\n}\n\nfetchData(function(data) {\n  console.log(data.message); // 2秒后打印“数据来了！”\n});\nconsole.log('我先执行');</code></pre><p>回调函数的缺点是，如果多个异步操作有依赖关系，就会形成“回调地狱”（Callback Hell），代码像金字塔一样层层嵌套，难以阅读和维护。</p><h2>第二阶段：Promise</h2><p>Promise是对回调函数的改进，它代表一个“承诺”——一个未来才会知道结果的事件。一个Promise有三种状态：进行中 (pending)、已成功 (fulfilled)、已失败 (rejected)。</p><p>它允许我们用 <code>.then()</code> 来链式处理成功的结果，用 <code>.catch()</code> 来统一处理错误，彻底告别了回调地狱。</p><pre><code class="language-javascript">function fetchData() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      // 假设请求成功\n      const data = { message: '数据来了！' };\n      resolve(data);\n    }, 2000);\n  });\n}\n\nfetchData()\n  .then(data => {\n    console.log(data.message);\n    return '处理后的数据';\n  })\n  .then(processedData => {\n    console.log(processedData);\n  })\n  .catch(error => {\n    console.error('出错了:', error);\n  });</code></pre><h2>第三阶段：Async/Await</h2><p>这是Promise的“语法糖”，是现代JS异步编程的终极形态。它允许我们用**看似同步的方式来编写异步代码**，极大地提升了代码的可读性。</p><p><code>async</code> 关键字用于声明一个异步函数，而 <code>await</code> 关键字则用来“等待”一个Promise完成。只有在 <code>async</code> 函数内部才能使用 <code>await</code>。</p><pre><code class="language-javascript">async function handleData() {\n  try {\n    console.log('开始获取数据...');\n    const data = await fetchData(); // 代码会在这里“暂停”，直到fetchData的Promise完成\n    console.log(data.message);\n    console.log('数据获取完毕！');\n  } catch (error) {\n    console.error('捕获到错误:', error);\n  }\n}\n\nhandleData();</code></pre><h2>结语</h2><p>从回调到Promise，再到Async/Await，JS的异步编程方式越来越优雅和强大。深刻理解异步是成为一名优秀前端工程师的必经之路，它能让你自如地处理各种复杂的交互和数据请求。</p>`,
  },
  "sql-join": {
    title: "SQL核心：一篇搞懂JOIN连接查询",
    excerpt:
      "数据往往分散在不同的表中，如何将它们关联起来？JOIN是关系型数据库的灵魂。本文将用最直观的方式，为你解析各种JOIN的区别和用法。",
    image: "images/bg15.jpg",
    tags: "#SQL #Database #后端",
    category: "数据库",
    author: "三叶hikari",
    date: "2025-06-13",
    content: `<h2>为什么需要JOIN？</h2><p>想象一下，我们有两个表：一个<code>users</code>用户表（包含用户ID和姓名），一个<code>orders</code>订单表（包含订单ID、用户ID和商品名称）。如果我们想查询“某个用户购买了哪些商品”，只查一张表是无法完成的。我们需要一种方法，将这两张表通过共同的“用户ID”关联起来，这就是JOIN的用武之地。</p><h2>核心JOIN类型图解</h2><h3>1. INNER JOIN (内连接)</h3><p><strong>结果：</strong>只返回两张表中“连接字段”（如用户ID）能够匹配上的行。这是最常用的JOIN类型。</p><p>可以把它想象成取两张表的“交集”。如果一个用户没有任何订单，那么在<code>INNER JOIN</code>的结果中，这个用户是不会出现的。</p><pre><code class="language-sql">SELECT users.name, orders.product_name\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;</code></pre><h3>2. LEFT JOIN (左连接)</h3><p><strong>结果：</strong>返回左表（<code>FROM</code>后面的第一张表）的<strong>所有行</strong>，以及右表中能匹配上的行。如果右表中没有匹配项，则对应的列会显示为<code>NULL</code>。</p><p>这对于查询“所有用户及其订单情况（无论他们有没有下过单）”这样的场景非常有用。</p><pre><code class="language-sql">SELECT users.name, orders.product_name\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;</code></pre><h3>3. RIGHT JOIN (右连接)</h3><p><strong>结果：</strong>与LEFT JOIN相反，返回右表的<strong>所有行</strong>，以及左表中能匹配上的行。左表中不匹配的行，对应列为<code>NULL</code>。</p><p>实际工作中，RIGHT JOIN用得相对较少，因为大多数场景都可以通过调整表的位置，用LEFT JOIN来实现。</p><h3>4. FULL OUTER JOIN (全外连接)</h3><p><strong>结果：</strong>返回左表和右表中的<strong>所有行</strong>。只要其中一张表存在匹配，就会显示数据。如果某一行在另一张表中没有匹配，则另一张表的列为<code>NULL</code>。</p><p>可以把它想象成取两张表的“并集”。</p><h2>ON vs WHERE</h2><p>初学者常常混淆<code>ON</code>和<code>WHERE</code>。请记住一个简单的原则：</p><ul><li><code>ON</code>：用来定义两张表之间的“连接关系”，是JOIN操作的一部分。</li><li><code>WHERE</code>：在JOIN操作<strong>完成之后</strong>，对生成的结果集进行“过滤”。</li></ul><h2>结语</h2><p>掌握JOIN是操作关系型数据库的基础。理解不同JOIN之间的区别，并能在正确的场景下选用最合适的JOIN类型，将极大地提升你的数据查询能力。无论是前端需要理解API返回的数据结构，还是后端需要直接操作数据库，JOIN都是不可或缺的核心技能。</p>`,
  },
  "vue-reactivity": {
    title: "Vue核心思想：深入响应式原理",
    excerpt:
      "为什么你在Vue中修改了数据，视图就会自动更新？这背后神奇的“响应式系统”是如何工作的？本文将带你一探究竟。",
    image: "images/bg16.jpg",
    tags: "#Vue #JavaScript #框架",
    category: "框架",
    author: "三叶hikari",
    date: "2025-06-13",
    content: `<h2>魔法的背后</h2><p>对于Vue初学者来说，最神奇的莫过于：当你在JavaScript中修改一个变量时，页面上绑定了这个变量的地方就会立刻、自动地更新。这让我们摆脱了繁琐的手动DOM操作。这种“魔法”就是Vue的响应式系统。</p><h2>Vue 2的基石: Object.defineProperty</h2><p>在Vue 2中，响应式系统的核心是<code>Object.defineProperty()</code>这个JavaScript原生API。它的作用是拦截对一个对象属性的“读取”（get）和“设置”（set）操作。</p><p>当Vue初始化时，它会遍历你<code>data</code>对象中的所有属性，并为每一个属性都使用<code>Object.defineProperty()</code>进行“包装”。</p><ol><li><strong>依赖收集 (Track)</strong>：当模板中的某个部分首次渲染时，它会“读取”<code>data</code>中的某个属性（比如<code>message</code>）。这个“读取”操作就会触发该属性的<code>get</code>拦截器。在<code>get</code>拦截器中，Vue会记下：“哦，原来这个模板部分依赖于<code>message</code>”，这个过程就叫依赖收集。</li><li><strong>派发更新 (Trigger)</strong>：当你修改<code>data</code>中的属性时（比如<code>this.message = '新消息'</code>），这个“设置”操作就会触发该属性的<code>set</code>拦截器。在<code>set</code>拦截器中，Vue会想：“哈！<code>message</code>变了！我得去通知所有依赖它的模板部分进行更新”。然后，相关的模板部分就会重新渲染。</li></ol><pre><code class="language-javascript">// 简化版的原理演示\nfunction defineReactive(obj, key, val) {\n  const dep = new Dep(); // 依赖管理器\n  Object.defineProperty(obj, key, {\n    get() {\n      dep.depend(); // 收集依赖\n      return val;\n    },\n    set(newVal) {\n      if (newVal !== val) {\n        val = newVal;\n        dep.notify(); // 派发更新\n      }\n    }\n  });\n}</code></pre><p>这种方式的缺点在于，它无法监听到对象属性的“新增”和“删除”，也无法直接监听数组索引的变化，因此Vue 2需要提供额外的<code>\$set</code>和<code>\$delete</code> API来解决这些问题。</p><h2>Vue 3的进化: Proxy</h2><p>为了从根本上解决<code>Object.defineProperty</code>的局限性，Vue 3采用了更强大的JavaScript原生API——<code>Proxy</code>。</p><p><code>Proxy</code>就像是在你的数据对象外面罩上了一层“代理”。任何对这个代理对象的操作（包括读取、设置、新增属性、删除属性、遍历等等），都会被这个代理所拦截。它能监听的操作多达13种，远比<code>get</code>和<code>set</code>强大。</p><p>这意味着，在Vue 3中：</p><ul><li>你不再需要<code>\$set</code>或<code>\$delete</code>，可以直接通过标准方式新增或删除属性，它们都是响应式的。</li><li>对数组的各种操作（如<code>push</code>, <code>pop</code>, <code>splice</code>）也都能被完美地监听到。</li><li>性能也得到了提升，因为Proxy是对整个对象进行代理，而不是像Vue 2那样需要递归遍历每一个属性。</li></ul><h2>结语</h2><p>无论是Vue 2的<code>Object.defineProperty</code>还是Vue 3的<code>Proxy</code>，其核心思想都是“依赖收集”和“派发更新”。理解响应式原理，不仅能帮助你写出更高效、更健壮的Vue代码，更能让你在遇到疑难杂症时，能够深入源码，从根本上定位和解决问题。这是从“会用”框架到“精通”框架的必经之路。</p>`,
  },

  "nginx-reverse-proxy": {
    title: "Nginx入门：反向代理与负载均衡",
    excerpt:
      "Nginx是高性能的Web服务器，但它更强大的能力在于作为反向代理。本文将解释什么是反向代理，以及如何利用它实现负载均衡和动静分离。",
    image: "images/bg17.jpg",
    tags: "#Nginx #后端 #DevOps",
    category: "服务部署",
    author: "三叶hikari",
    date: "2025-06-13",
    content: `<h2>正向代理 vs 反向代理</h2><p>要理解反向代理，我们先要明白什么是正向代理。<strong>正向代理</strong>，代理的是“客户端”。你（客户端）想访问Google，但直接访问不了。于是你找了一个代理服务器，让它替你去访问Google，然后再把内容传回给你。对Google来说，它只知道是那个代理服务器在访问它，并不知道你真实的存在。正向代理隐藏了真实的客户端。</p><p>而<strong>反向代理 (Reverse Proxy)</strong>，代理的是“服务器端”。你（客户端）想访问一个网站（比如<code>www.mysite.com</code>）。你的请求被发送到了一个Nginx服务器。这个Nginx服务器后面，可能藏着好几台真正的业务服务器（比如Tomcat集群）。Nginx会根据一定的规则，把你的请求转发给其中一台业务服务器去处理，然后再把结果返回给你。对你来说，你只知道你在和Nginx打交道，完全不知道后面有多少台服务器在为你服务。反向代理隐藏了真实的服务器。</p><h2>Nginx作为反向代理的核心配置</h2><p>在Nginx中实现反向代理非常简单，核心就是<code>proxy_pass</code>指令。</p><pre><code class="language-nginx">server {\n    listen 80; # 监听80端口\n    server_name www.mysite.com; # 你的域名\n\n    location / { # 匹配所有请求\n        # 将请求转发到运行在本地8080端口的Java应用\n        proxy_pass http://localhost:8080;\n\n        # 一些推荐的头部设置，用于将真实IP等信息传递给后端\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}</code></pre><h2>应用一：负载均衡 (Load Balancing)</h2><p>如果你的网站访问量很大，单台服务器扛不住怎么办？很简单，多加几台服务器。然后利用Nginx的<code>upstream</code>模块，将请求分发到这些服务器上，这就是负载均衡。</p><pre><code class="language-nginx"># 定义一个名为“backend_servers”的服务器集群\nupstream backend_servers {\n    server 192.168.1.101:8080; # 服务器1\n    server 192.168.1.102:8080; # 服务器2\n    server 192.168.1.103:8080; # 服务器3\n}\n\nserver {\n    listen 80;\n    server_name www.mysite.com;\n\n    location / {\n        # 将请求转发到我们定义的服务器集群\n        proxy_pass http://backend_servers;\n    }\n}</code></pre><p>Nginx默认使用轮询（Round Robin）策略来分发请求，当然也支持基于权重的轮询、IP哈希等多种高级策略。</p><h2>应用二：动静分离</h2><p>一个网站通常包含两种资源：<strong>静态资源</strong>（HTML, CSS, JS, 图片等，内容不会变化）和<strong>动态资源</strong>（需要后端程序计算后生成的API数据等）。让Tomcat这样的应用服务器去处理静态资源的请求，是一种性能浪费。更好的做法是动静分离。</p><p>我们可以让Nginx直接处理所有静态资源的请求（因为Nginx处理静态资源的速度极快），只把动态资源的请求（比如所有以<code>/api/</code>开头的请求）转发给后端的Tomcat。</p><pre><code class="language-nginx">server {\n    listen 80;\n    server_name www.mysite.com;\n    root /var/www/html; # 网站的根目录，存放静态文件\n\n    # 匹配静态资源请求，Nginx直接从本地文件系统返回\n    location ~* \\.(jpg|jpeg|png|gif|css|js)$ {\n        expires 30d; # 可以设置浏览器缓存时间\n    }\n\n    # 匹配动态API请求，转发给后端\n    location /api/ {\n        proxy_pass http://backend_servers;\n    }\n}</code></pre><h2>结语</h2><p>Nginx的反向代理功能是现代Web架构的基石。它像一个全能的“交通警察”，站在所有流量的入口，高效地进行请求分发、负载均衡、安全过滤和缓存控制，极大地提升了后端服务的性能、可扩展性和健壮性。掌握Nginx配置是每一位后端及运维工程师的必备技能。</p>`,
  },

  "linux-common-commands": {
    title: "Linux常用命令速查手册",
    excerpt:
      "无论是开发还是部署，都离不开与Linux服务器打交道。本文整理了一份最核心、最常用的Linux命令清单，助你提高工作效率。",
    image: "images/bg18.jpg",
    tags: "#Linux #Shell #DevOps",
    category: "基础",
    author: "三叶hikari",
    date: "2025-06-13",
    content: `<h2>引言</h2><p>对于许多开发者来说，命令行界面的Linux是日常工作的主要环境。熟练掌握常用命令，就像是工匠拥有了一套得心应手的工具，能极大地提升操作效率。这份清单旨在覆盖80%的日常使用场景。</p><h2>文件与目录操作</h2><ul><li><strong>ls</strong>: 列出目录内容。常用参数：<code>-l</code> (长格式显示详细信息), <code>-a</code> (显示包括隐藏文件在内的所有文件)。<code>ls -al</code> 是最常用的组合。</li><li><strong>cd</strong>: 切换目录。<code>cd ..</code> 返回上一级目录，<code>cd ~</code> 或直接 <code>cd</code> 返回当前用户的主目录。</li><li><strong>pwd</strong>: 显示当前工作目录的绝对路径。</li><li><strong>mkdir</strong>: 创建新目录。<code>mkdir -p my/new/path</code> 可以递归创建多层目录。</li><li><strong>rm</strong>: 删除文件或目录。<code>rm file.txt</code> 删除文件。<code>rm -r my_dir</code> 递归删除目录及其所有内容。<code>rm -rf my_dir</code> 强制递归删除，<strong>请极度谨慎使用此命令！</strong></li><li><strong>cp</strong>: 复制文件或目录。<code>cp source.txt destination.txt</code>。<code>cp -r source_dir/ destination_dir/</code> 复制目录。</li><li><strong>mv</strong>: 移动或重命名文件/目录。<code>mv old_name.txt new_name.txt</code> (重命名)。<code>mv my_file.txt /new/location/</code> (移动)。</li><li><strong>touch</strong>: 创建一个空文件，或更新一个已存在文件的时间戳。<code>touch new_file.txt</code>。</li></ul><h2>文本文件查看与处理</h2><ul><li><strong>cat</strong>: 查看文件全部内容。适合小文件。</li><li><strong>less</strong>: 分页查看文件内容。比<code>cat</code>更适合大文件，可以使用方向键滚动，按<code>q</code>退出。</li><li><strong>head</strong> / <strong>tail</strong>: 分别查看文件的开头几行和末尾几行。<code>tail -n 100 my.log</code> 查看最后100行。<code>tail -f my.log</code> 实时跟踪文件的新增内容，常用于看日志。</li><li><strong>grep</strong>: 在文件中搜索指定的文本模式。<code>grep "error" my.log</code> 在日志中搜索包含“error”的行。<code>grep -i "error"</code> 忽略大小写。</li></ul><h2>系统信息与进程管理</h2><ul><li><strong>ps</strong>: 显示当前用户的进程快照。<code>ps aux</code> 或 <code>ps -ef</code> 显示系统中所有进程的详细信息，通常与<code>grep</code>配合使用，如 <code>ps aux | grep "java"</code>。</li><li><strong>top</strong> / <strong>htop</strong>: 实时动态地显示系统资源占用情况和进程信息。<code>htop</code>是<code>top</code>的增强版，更直观，推荐安装。</li><li><strong>kill</strong>: 终止一个进程。<code>kill 12345</code> (进程ID)。如果普通kill杀不死，可以使用<code>kill -9 12345</code> 强制杀死。</li><li><strong>df</strong>: 显示磁盘空间使用情况。<code>df -h</code> 以人类可读的格式（如GB, MB）显示。</li><li><strong>free</strong>: 显示内存使用情况。<code>free -h</code>。</li></ul><h2>网络相关</h2><ul><li><strong>ping</strong>: 测试与另一台主机的网络连通性。<code>ping google.com</code>。</li><li><strong>netstat</strong> / <strong>ss</strong>: 显示网络连接、路由表、接口统计等信息。<code>netstat -tuln</code> 或 <code>ss -tuln</code> 查看当前监听的TCP/UDP端口。</li><li><strong>curl</strong> / <strong>wget</strong>: 命令行下的网络请求工具。<code>curl https://api.example.com/data</code>。<code>wget https://example.com/file.zip</code> 下载文件。</li></ul><h2>结语</h2><p>Linux命令的世界博大精深，但这份清单中的命令是你每天都会接触到的核心。将它们熟记于心，并通过实践形成肌肉记忆，你与服务器的交互将会变得如行云流水般顺畅。</p>`,
  },
  "ssm-microservice": {
    title: "SSM微服务：构建健壮的Java后端服务",
    excerpt: "Spring + SpringMVC + MyBatis，这个被誉为“上古卷轴”的经典组合，在微服务时代依然宝刀未老。本文将带你了解如何用SSM构建一个清晰、高效的微服务。",
    image: "images/bg19.jpg",
    tags: "#Java #Spring #MyBatis #后端",
    category: "微服务",
    author: "三叶hikari",
    date: "2025-06-13",
    content: `<h2>SSM是什么？Java后端的“三驾马车”</h2><p>对于许多Java开发者来说，SSM（Spring + SpringMVC + MyBatis）是他们职业生涯中接触的第一个、也是最经典的Web开发框架组合。它们各司其职，共同构成了构建一个健壮Java后端应用的基石：</p><ul><li><strong>Spring</strong>: 整个应用的核心容器。它通过控制反转（IoC）和依赖注入（DI）来管理所有Java对象（Beans）的生命周期，极大地降低了代码的耦合度。同时，它的面向切面编程（AOP）能力，让我们能优雅地处理日志、事务等横切关注点。</li><li><strong>SpringMVC</strong>: 负责处理Web层的请求。它扮演着“交通警察”的角色，接收来自客户端的HTTP请求，根据URL将其分发给对应的处理器（Controller），然后将处理结果渲染成视图（如JSP或JSON）返回给客户端。它是RESTful API实现的核心。</li><li><strong>MyBatis</strong>: 专业的持久层框架，专注于简化数据库操作。它能让我们摆脱繁琐的JDBC代码，通过简单的XML或注解方式，将Java方法与SQL语句优雅地映射起来，让我们能更专注于SQL本身。</li></ul><h2>SSM在微服务时代的角色</h2><p>有人可能会问，现在有了Spring Boot和Spring Cloud，SSM是不是过时了？答案是否定的。实际上，<strong>Spring Boot的底层依然是Spring和SpringMVC</strong>。Spring Boot只是通过“约定优于配置”的原则，为我们极大地简化了SSM的配置过程。</p><p>因此，用SSM的知识来构建一个微服务，本质上就是构建一个轻量级的、遵循RESTful风格的Spring Boot应用。这个应用通常会打包成一个可执行的JAR文件，并通过Docker容器化的方式进行部署。</p><h2>构建一个SSM微服务的基本步骤</h2><h3>1. 项目初始化 (Maven/Gradle)</h3><p>通常我们会使用Spring Initializr（<code>start.spring.io</code>）来快速生成一个项目骨架，并勾选我们需要的依赖，如<code>Spring Web</code>, <code>MyBatis Framework</code>, 和数据库驱动（如<code>MySQL Driver</code>）。</p><h3>2. 编写分层代码</h3><p>一个典型的SSM微服务会遵循清晰的分层架构：</p><ul><li><strong>Controller层</strong>: 使用<code>@RestController</code>和<code>@RequestMapping</code>等注解，定义API接口，接收和校验前端参数，并调用Service层。</li><li><strong>Service层</strong>: 实现核心的业务逻辑。通过<code>@Service</code>注解声明，通常会在这里处理事务（使用<code>@Transactional</code>注解）。</li><li><strong>Mapper/DAO层</strong>: 数据访问层。使用<code>@Mapper</code>注解定义接口，并通过XML或注解来编写具体的SQL语句，与数据库进行交互。</li></ul><pre><code class="language-java">// UserController.java 示例\n@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n    @Autowired\n    private UserService userService;\n\n    @GetMapping("/{id}")\n    public User getUserById(@PathVariable Long id) {\n        return userService.findUserById(id);\n    }\n}\n\n// UserMapper.xml 示例\n<select id="findUserById" resultType="com.example.User">\n    SELECT * FROM users WHERE id = #{id}\n</select></code></pre><h3>3. 配置application.yml</h3><p>在<code>application.yml</code>（或<code>.properties</code>）文件中，配置数据库连接信息、MyBatis的设置以及服务器端口等。</p><pre><code class="language-yaml">server:\n  port: 8081\n\nspring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/my_database\n    username: root\n    password: your_password\n\nmybatis:\n  mapper-locations: classpath:mapper/*.xml # 指定Mapper XML文件的位置</code></pre><h2>结语</h2><p>SSM组合虽然经典，但其分层清晰、职责明确的设计思想，与现代微服务架构的理念不谋而合。理解SSM的每一层如何工作，能让你更深刻地理解Spring Boot的自动化配置原理，从而在构建和排查微服务问题时更加得心应手。无论技术如何演进，SSM所代表的经典分层架构思想，永远是Java后端开发者宝贵的财富。</p>`
  },
  "sass-less": {
    title: "CSS预处理器：Sass与Less入门",
    excerpt:
      "原生CSS在编写大型项目时会变得重复和难以维护。CSS预处理器为此而生，它为CSS引入了变量、嵌套、混入等编程特性，让你的样式表更强大。",
    image: "images/bg22.jpg",
    tags: "#CSS #Sass #Less",
    category: "核心",
    author: "三叶hikari",
    date: "2025-06-13",
    content: `<h2>为什么需要CSS预处理器？</h2><p>你是否在写CSS时遇到过这些烦恼？</p><ul><li>一个主题颜色（比如<code>#6a82fb</code>）在几十个地方被重复使用，想换个颜色得全局查找替换。</li><li>CSS选择器写得越来越长，比如<code>.nav ul li a</code>，结构不清晰。</li><li>想写一个跨浏览器兼容的圆角样式，需要重复写<code>-webkit-border-radius</code>, <code>-moz-border-radius</code>等前缀。</li></ul><p>CSS预处理器（如Sass和Less）就是为了解决这些问题而生的。它们是一种“写CSS的方言”，增加了许多编程语言的特性，最终会通过一个编译器，将我们写的“方言”代码转换成浏览器能够识别的标准CSS代码。</p><h2>核心特性一览</h2><h3>1. 变量 (Variables)</h3><p>这是最基础也最实用的功能。我们可以把颜色、字体大小等值存为变量，方便统一管理和修改。</p><pre><code class="language-scss">// Sass (.scss) 语法\n$primary-color: #6a82fb;\n\n.button {\n  background-color: $primary-color;\n}\n.header {\n  border-bottom: 1px solid $primary-color;\n}</code></pre><h3>2. 嵌套 (Nesting)</h3><p>允许我们像HTML那样，通过嵌套的方式来编写层级关系，让代码结构更清晰，也避免了重复编写父选择器。</p><pre><code class="language-scss">// Sass (.scss) 语法\nnav {\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n\n    li {\n      display: inline-block;\n\n      a {\n        display: block;\n        padding: 6px 12px;\n        text-decoration: none;\n      }\n    }\n  }\n}</code></pre><h3>3. 混入 (Mixins)</h3><p>混入允许我们定义一组可重用的CSS声明。这对于处理浏览器前缀或者创建可复用的样式模块（如一个按钮样式）非常有用。</p><pre><code class="language-scss">// Sass (.scss) 语法\n@mixin border-radius($radius) {\n  -webkit-border-radius: $radius;\n     -moz-border-radius: $radius;\n      -ms-border-radius: $radius;\n          border-radius: $radius;\n}\n\n.box {\n  @include border-radius(10px);\n}</code></pre><h3>4. 继承 (Extend)</h3><p>允许一个选择器继承另一个选择器的所有样式，这有助于减少重复代码，保持代码的DRY（Don't Repeat Yourself）原则。</p><pre><code class="language-scss">// Sass (.scss) 语法\n.message {\n  border: 1px solid #ccc;\n  padding: 10px;\n  color: #333;\n}\n\n.success-message {\n  @extend .message;\n  border-color: green;\n}\n\n.error-message {\n  @extend .message;\n  border-color: red;\n}</code></pre><h2>Sass vs Less</h2><p>Sass和Less是两个最流行的CSS预处理器，它们的功能非常相似。主要区别在于语法：Sass使用<code>$</code>定义变量，<code>@mixin</code>和<code>@include</code>定义和使用混入；而Less使用<code>@</code>定义变量，用<code>.mixin-name()</code>的方式来定义和使用混入。Sass的功能通常被认为稍微更强大一些（比如它有更复杂的逻辑控制），在社区中也更受欢迎。</p><h2>结语</h2><p>在现代前端工作流中，CSS预处理器已经成为了标配。它能极大地提升我们编写和维护CSS的效率与质量。虽然现在CSS自身也引入了变量（自定义属性）等新特性，但预处理器提供的嵌套、混入等系统性能力，在大型项目中依然具有不可替代的价值。</p>`,
  },

  "mysql-indexing": {
    title: "MySQL性能优化：索引的奥秘",
    excerpt:
      "为什么一个SQL查询有时快如闪电，有时又慢如蜗牛？答案往往在于是否正确地使用了索引。本文将带你理解索引的本质，以及如何创建和使用它。",
    image: "images/bg23.jpg",
    tags: "#MySQL #数据库 #性能",
    category: "数据库",
    author: "三叶hikari",
    date: "2025-06-13",
    content: `<h2>索引是什么？一本书的目录</h2><p>想象一下，你想在一本厚厚的字典里查找一个单词。如果没有目录，你将不得不从第一页开始，一页一页地翻找，直到找到为止。这个过程非常缓慢，我们称之为“全表扫描”。</p><p>而索引（Index），就相当于这本书的目录。它会告诉你某个单词在哪一页。你只需要先在目录（通常按字母顺序排好）中快速找到目标，然后直接翻到对应的页码即可。这个过程极大地提升了查询效率。</p><p>在数据库中，索引是一个特殊的数据结构（最常见的是B+树），它存储了表中特定列的值以及这些值所在行的物理地址。当你基于这个列进行查询时，数据库就可以通过索引快速定位到数据，而无需扫描整张表。</p><h2>索引的优缺点</h2><ul><li><strong>优点：</strong> 极大地加快了数据检索（<code>SELECT</code>）的速度。</li><li><strong>缺点：</strong><ul><li>创建和维护索引需要耗费时间。</li><li>索引本身需要占用物理存储空间。</li><li>当对表中的数据进行增、删、改（<code>INSERT</code>, <code>DELETE</code>, <code>UPDATE</code>）时，索引也需要被动态地维护，这会降低写入操作的性能。</li></ul></li></ul><p>因此，索引并非越多越好，而应该“按需创建”。</p><h2>何时应该创建索引？</h2><p>通常，我们应该在那些经常被用作查询条件的列上创建索引，尤其是：</p><ul><li><strong>主键 (Primary Key)</strong>: 数据库会自动为主键创建唯一的聚集索引。</li><li><strong>外键 (Foreign Key)</strong>: 经常用于<code>JOIN</code>操作的列。</li><li><strong>经常出现在<code>WHERE</code>子句中的列</strong>: 比如<code>users</code>表中的<code>username</code>或<code>email</code>列。</li><li><strong>经常出现在<code>ORDER BY</code>或<code>GROUP BY</code>子句中的列</strong>: 索引本身是有序的，这可以帮助数据库避免额外的排序操作。</li></ul><h2>如何判断索引是否生效？<code>EXPLAIN</code>命令</h2><p>仅仅创建了索引还不够，我们还需要确保查询语句能够真正“用上”它。MySQL提供了强大的<code>EXPLAIN</code>命令，可以分析你的SQL查询语句的执行计划。</p><pre><code class="language-sql">EXPLAIN SELECT * FROM users WHERE username = 'hikari';</code></pre><p>在<code>EXPLAIN</code>的输出结果中，你需要重点关注几个列：</p><ul><li><strong>type</strong>: 这是最重要的列。如果它的值是<code>ALL</code>，表示正在进行全表扫描，索引没有生效。理想的值是<code>ref</code>, <code>eq_ref</code>, <code>const</code>等。</li><li><strong>possible_keys</strong>: 显示可能应用到这张表中的索引。</li><li><strong>key</strong>: 实际使用的索引。如果为<code>NULL</code>，表示没有使用索引。</li><li><strong>rows</strong>: 预估为了找到所需行，需要扫描的行数。这个值越小越好。</li></ul><h2>索引失效的常见场景</h2><p>有时即使创建了索引，查询也可能不会使用它，比如：</p><ul><li>在索引列上使用函数或进行计算。</li><li>使用<code>LIKE</code>查询时，通配符<code>%</code>出现在了开头（如<code>LIKE '%keyword'</code>）。</li><li>查询条件中使用了<code>OR</code>，且<code>OR</code>前后的条件列没有都建立索引。</li><li>数据类型不匹配。</li></ul><h2>结语</h2><p>数据库索引是性能优化的核心武器。理解其工作原理，并学会在合适的列上创建索引、通过<code>EXPLAIN</code>分析查询计划、避免索引失效的“坑”，是每一位后端工程师都必须掌握的关键技能。它能让你的应用在数据量不断增长的情况下，依然保持高效的响应速度。</p>`,
  },

  "api-gateway": {
    title: "微服务架构：API网关的核心角色",
    excerpt:
      "在微服务架构中，客户端如何与成百上千个服务打交道？API网关正是这个问题的答案，它作为所有请求的唯一入口，承担着路由、认证、监控等关键职责。",
    image: "images/bg24.jpg",
    tags: "#微服务 #架构 #后端",
    category: "微服务",
    author: "三叶hikari",
    date: "2025-06-14",
    content: `<h2>微服务带来的“新问题”</h2><p>当我们从单体应用迁移到微服务架构时，虽然获得了服务独立、易于扩展等诸多好处，但也引入了新的复杂性。一个原本简单的客户端请求（比如查看“我的订单”页面），现在可能需要调用用户服务、订单服务、商品服务、库存服务等多个微服务才能完成。</p><p>让客户端直接与所有这些微服务通信，会带来一系列问题：</p><ul><li><strong>客户端逻辑复杂</strong>: 客户端需要知道每个微服务的网络地址，并分别处理它们的调用逻辑。</li><li><strong>认证授权困难</strong>: 每个微服务都需要实现一套重复的认证和授权逻辑。</li><li><strong>协议难以统一</strong>: 有的服务可能使用HTTP/REST，有的可能使用gRPC，客户端难以适配。</li><li><strong>“跨域”问题泛滥</strong>: 如果是Web前端，将面临大量的CORS跨域资源共享问题。</li></ul><h2>API网关：系统的“门面”</h2><p>API网关（API Gateway）正是为了解决上述问题而生的。它是一个位于客户端和后端微服务集群之间的服务器，是所有外部请求进入系统的<strong>唯一入口</strong>。</p><p>它就像一个大厦的“前台接待”。所有访客（客户端请求）都必须先到前台登记，由前台根据你的需求，帮你联系并转接到内部具体的部门（微服务）。</p><h2>API网关的核心职责</h2><ol><li><strong>请求路由 (Request Routing)</strong>: 这是网关最核心的功能。它会解析客户端的请求（如<code>/api/users/123</code>），然后根据预设的路由规则，将其准确地转发到后端的某个具体微服务实例上（如用户服务的<code>/users/123</code>接口）。</li><li><strong>认证与安全 (Authentication & Security)</strong>: 可以在网关层统一处理所有请求的身份认证（如校验JWT Token）、权限校验、防止恶意攻击（如DDoS防护、SQL注入过滤）等安全相关的任务。这样，后端的业务服务就可以专注于自身的业务逻辑，而无需关心安全问题。</li><li><strong>协议转换 (Protocol Translation)</strong>: 网关可以对外暴露统一的HTTP/REST接口，而在内部，它可以将这些请求转换成gRPC、AMQP等不同的协议，来与后端微服务通信。</li><li><strong>监控与日志 (Monitoring & Logging)</strong>: 网关是所有流量的必经之路，因此是收集监控指标（如请求延迟、错误率）和记录详细日志的最佳位置。</li><li><strong>服务聚合 (Service Aggregation)</strong>: 对于那些需要调用多个微服务才能完成的复杂请求，可以在网关层提供一个“聚合接口”。客户端只需要调用这个聚合接口一次，由网关在内部并行或串行地调用多个微服务，并将结果组合后一次性返回给客户端，极大地简化了客户端的逻辑。</li><li><strong>限流与熔断 (Rate Limiting & Circuit Breaking)</strong>: 可以在网关层对API的调用频率进行限制，防止恶意或突发流量冲垮后端服务。同时也可以实现熔断机制，当某个后端服务出现故障时，快速失败并返回降级响应，避免雪崩效应。</li></ol><h2>主流的API网关实现</h2><ul><li><strong>Nginx</strong>: 凭借其超高性能和丰富的模块，Nginx（尤其是配合Lua脚本）是一个非常流行的API网关实现方案。</li><li><strong>Spring Cloud Gateway</strong>: 在Java技术栈中，它是构建API网关的首选，与Spring生态无缝集成。</li><li><strong>Kong / APISIX</strong>: 这些是更现代、功能更全面的云原生API网关，提供了强大的插件系统和易于使用的管理界面。</li></ul><h2>结语</h2><p>API网关是微服务架构中不可或缺的关键组件。它作为系统的统一入口，有效地解耦了客户端与后端服务，并集中处理了认证、安全、监控等横切关注点，极大地简化了微服务系统的复杂性，是构建一个健壮、可扩展的分布式系统的基础。</p>`,
  },

  "http-protocol": {
    title: "HTTP协议核心：Web世界的通用语",
    excerpt:
      "从浏览网页到调用API，我们无时无刻不在使用HTTP。但你真的了解这个Web世界的“通用语言”吗？本文将带你回顾HTTP的核心概念。",
    image: "images/bg25.jpg",
    tags: "#HTTP #网络 #基础",
    category: "基础",
    author: "三叶hikari",
    date: "2025-06-16",
    content: `<h2>HTTP是什么？</h2><p>HTTP，全称超文本传输协议 (HyperText Transfer Protocol)，是用于在Web浏览器和Web服务器之间传输数据的应用层协议。简单来说，它定义了客户端（如你的浏览器）如何向服务器“请求”资源，以及服务器如何向客户端“响应”这些资源。</p><h2>请求与响应模型</h2><p>HTTP是一个基于“请求-响应”模型的协议。整个过程非常清晰：</p><ol><li><strong>客户端发起请求 (Request)</strong>: 浏览器根据你的操作（如点击一个链接），构建一个HTTP请求报文，并将其发送到指定的服务器。</li><li><strong>服务器处理请求并返回响应 (Response)</strong>: 服务器接收到请求后，会根据请求的内容进行处理（如从数据库查询数据、从文件系统读取HTML文件），然后构建一个HTTP响应报文，并将其发送回客户端。</li><li><strong>客户端解析响应</strong>: 浏览器接收到响应后，会解析报文内容，并将结果（如一个网页）渲染出来。</li></ol><h2>请求报文的结构</h2><p>一个HTTP请求报文由三部分组成：</p><ul><li><strong>请求行 (Request Line)</strong>: 包含三部分信息：请求方法（Method）、请求的URL和HTTP协议版本。例如：<code>GET /index.html HTTP/1.1</code>。</li><li><strong>请求头 (Request Headers)</strong>: 以“键: 值”的形式，向服务器传递一些额外信息，比如浏览器类型（<code>User-Agent</code>）、期望接收的数据类型（<code>Accept</code>）、Cookie信息等。</li><li><strong>请求体 (Request Body)</strong>: 可选部分。通常，GET请求没有请求体，而POST请求则会通过请求体来向服务器提交数据（比如表单内容）。</li></ul><h2>响应报文的结构</h2><p>与请求报文类似，响应报文也由三部分组成：</p><ul><li><strong>状态行 (Status Line)</strong>: 包含三部分信息：HTTP协议版本、状态码（Status Code）和状态描述。例如：<code>HTTP/1.1 200 OK</code>。</li><li><strong>响应头 (Response Headers)</strong>: 服务器向客户端传递的额外信息，比如内容的类型（<code>Content-Type</code>）、内容的长度（<code>Content-Length</code>）、服务器软件信息（<code>Server</code>）、设置Cookie的指令（<code>Set-Cookie</code>）等。</li><li><strong>响应体 (Response Body)</strong>: 服务器返回给客户端的实际数据，比如HTML代码、JSON数据、图片文件的二进制数据等。</li></ul><h2>重要的HTTP方法 (动词)</h2><ul><li><strong>GET</strong>: 请求获取指定的资源。是最常用的方法。</li><li><strong>POST</strong>: 向服务器提交数据，导致服务器端状态的变化（如创建一个新用户）。数据通常放在请求体中。</li><li><strong>PUT</strong>: 替换服务器上某个资源的全部内容。</li><li><strong>DELETE</strong>: 删除指定的资源。</li><li><strong>HEAD</strong>: 与GET类似，但服务器在响应中只返回头部，不返回响应体。常用于检查资源是否存在或获取资源的元信息。</li><li><strong>OPTIONS</strong>: 获取目标资源所支持的通信选项（比如支持哪些HTTP方法）。</li></ul><h2>重要的HTTP状态码</h2><p>状态码是用三位数字表示的响应状态。它们被分为五类：</p><ul><li><strong>1xx (信息性)</strong>: 表示请求已接收，继续处理。</li><li><strong>2xx (成功)</strong>: 表示请求已成功被服务器接收、理解、并接受。最常见的有<code>200 OK</code>, <code>201 Created</code>。</li><li><strong>3xx (重定向)</strong>: 表示要完成请求，需要进一步操作。常见的有<code>301 Moved Permanently</code>, <code>302 Found</code>, <code>304 Not Modified</code>（用于缓存）。</li><li><strong>4xx (客户端错误)</strong>: 表示客户端的请求有语法错误或请求无法实现。最臭名昭著的就是<code>404 Not Found</code>，还有<code>400 Bad Request</code>, <code>401 Unauthorized</code>, <code>403 Forbidden</code>。</li><li><strong>5xx (服务器错误)</strong>: 表示服务器在处理请求的过程中发生了错误。最常见的是<code>500 Internal Server Error</code>, <code>502 Bad Gateway</code>, <code>503 Service Unavailable</code>。</li></ul><h2>结语</h2><p>HTTP协议是整个Web世界的基石。无论你是前端开发者、后端开发者还是运维工程师，深刻理解HTTP的请求/响应模型、报文结构、常用方法和状态码，都是进行高效开发、精准调试和性能优化的必备内功。</p>`,
  },
};
export { articles };