# PlayHub — 在线小游戏中心

> 🎮 精选 HTML5 小游戏合集，打开即玩，完全免费

## 🕹️ 游戏列表

| 游戏 | 类型 | 特色 |
|------|------|------|
| 🏰 **塔防战争** | 策略塔防 | 4 种防御塔 · 15 波敌人 · 升级系统 |
| 🐍 **贪吃蛇大作战** | 休闲经典 | 无尽模式 · 速度递增 · 触屏支持 |
| 🔢 **2048** | 益智数字 | 流畅动画 · 触屏滑动 · 最高分记录 |
| ✈️ **飞机大战** | 射击街机 | Boss 战 · 火力升级 · 道具系统 |

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/YOUR_USERNAME/playhub.git

# 进入目录
cd playhub

# 用任意 HTTP 服务器启动（以 Python 为例）
python3 -m http.server 8000 --bind 0.0.0.0

# 浏览器打开
# http://localhost:8000
```

或者直接用浏览器打开 `index.html` 即可。

## 📁 项目结构

```
playhub/
├── index.html              # 主页
├── css/
│   └── style.css           # 样式表
├── js/
│   └── main.js             # 主脚本
├── games/                  # 游戏目录
│   ├── tower-defense.html
│   ├── snake.html
│   ├── 2048.html
│   └── shmup.html
├── assets/                 # 静态资源
└── .github/workflows/      # CI/CD 自动部署
    └── deploy.yml
```

## 🛠️ 技术栈

- 纯 HTML5 + CSS3 + JavaScript
- 零依赖，无需构建工具
- 通过 GitHub Pages 自动部署
- 响应式设计，支持移动端

## 📄 License

MIT
