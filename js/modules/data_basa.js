const articles = {
  "project-intro": {
    title: "关于本站：三叶次元",
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
    image: "images/bg6.jpg",
    tags: "#Docker #DevOps #后端",
    category: "服务部署",
    author: "三叶hikari",
    date: "2025-6-20",
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
  // Docker文章本身保持不变，作为对照组
  "docker-intro": {
    title: "Docker入门：告别“我电脑上明明是好的”",
    excerpt:
      "作为开发者，你一定遇到过“环境不一致”的噩梦。Docker正是解决这一问题的银弹。本文将带你初探Docker的世界。",
    image: "images/bg6.jpg",
    tags: "#Docker #DevOps #后端",
    category: "服务部署",
    author: "三叶hikari",
    date: "2025-6-20",
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
    image: "images/bg6.jpg",
    tags: "#Git #版本控制 #DevOps",
    category: "基础",
    author: "三叶hikari",
    date: "2025-07-01",
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
    image: "images/bg6.jpg",
    tags: "#API #REST #后端 #架构",
    category: "微服务",
    author: "三叶hikari",
    date: "2025-07-05",
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
    image: "images/bg6.jpg",
    tags: "#CSS #Flexbox #前端",
    category: "核心",
    author: "三叶hikari",
    date: "2025-07-10",
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
};
export { articles };