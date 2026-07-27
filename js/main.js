/**
 * PlayHub — 主脚本
 * 处理导航、页面切换、侧边栏等交互逻辑
 */

(function () {
  'use strict';

  // ========== DOM 引用 ==========
  const pageLobby = document.getElementById('page-lobby');
  const gamePages = document.querySelectorAll('.game-page');
  const sidebarMask = document.getElementById('sidebarMask');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const sidebarBtn = document.getElementById('sidebarBtn');

  // ========== 状态 ==========
  let currentGame = null;
  const gameLoaded = {};

  // ========== 导航映射 ==========
  const navMap = { home: 0, td: 1, snake: 2, '2048': 3, shmup: 4 };
  const desktopLinks = document.querySelectorAll('.nav-links .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-sidebar .nav-link');

  // ========== 显示首页 ==========
  function showLobby() {
    gamePages.forEach(function (p) { p.classList.remove('active'); });
    pageLobby.style.display = '';
    currentGame = null;
    setActiveNav('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ========== 打开游戏 ==========
  function openGame(name) {
    pageLobby.style.display = 'none';
    gamePages.forEach(function (p) { p.classList.remove('active'); });

    var page = document.getElementById('page-' + name);
    if (page) {
      page.classList.add('active');
    }
    currentGame = name;

    // 延迟加载 iframe：首次点击时才设置 src
    if (!gameLoaded[name]) {
      var iframe = document.getElementById('iframe-' + name);
      if (iframe) {
        var src = iframe.getAttribute('data-src');
        if (src) {
          iframe.src = src;
        }
      }
      gameLoaded[name] = true;
    }

    setActiveNav(name);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ========== 导航高亮 ==========
  function setActiveNav(name) {
    var idx = navMap[name] !== undefined ? navMap[name] : 0;

    desktopLinks.forEach(function (link, i) {
      link.classList.toggle('active', i === idx);
    });
    mobileLinks.forEach(function (link, i) {
      link.classList.toggle('active', i === idx);
    });
  }

  // ========== 侧边栏开关 ==========
  function toggleSidebar() {
    mobileSidebar.classList.toggle('show');
    sidebarMask.classList.toggle('show');
  }

  function closeSidebar() {
    mobileSidebar.classList.remove('show');
    sidebarMask.classList.remove('show');
  }

  // ========== 事件绑定 ==========
  sidebarBtn.addEventListener('click', toggleSidebar);
  sidebarMask.addEventListener('click', closeSidebar);

  // 导航栏链接点击
  desktopLinks[0].addEventListener('click', showLobby);
  desktopLinks[1].addEventListener('click', function () { openGame('td'); });
  desktopLinks[2].addEventListener('click', function () { openGame('snake'); });
  desktopLinks[3].addEventListener('click', function () { openGame('2048'); });
  desktopLinks[4].addEventListener('click', function () { openGame('shmup'); });

  // 移动端侧边栏链接点击
  mobileLinks[0].addEventListener('click', function () { showLobby(); closeSidebar(); });
  mobileLinks[1].addEventListener('click', function () { openGame('td'); closeSidebar(); });
  mobileLinks[2].addEventListener('click', function () { openGame('snake'); closeSidebar(); });
  mobileLinks[3].addEventListener('click', function () { openGame('2048'); closeSidebar(); });
  mobileLinks[4].addEventListener('click', function () { openGame('shmup'); closeSidebar(); });

  // Logo 点击回首页
  document.querySelector('.site-name').addEventListener('click', showLobby);

  // 返回按钮
  document.querySelectorAll('.back-btn').forEach(function (btn) {
    btn.addEventListener('click', showLobby);
  });

  // Hero 按钮
  var heroBtn = document.querySelector('.action-button');
  if (heroBtn) {
    heroBtn.addEventListener('click', function () { openGame('td'); });
  }

  // 内容区「进入游戏」按钮
  document.querySelectorAll('.btn-enter').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var game = this.getAttribute('data-game');
      if (game) openGame(game);
    });
  });

  // ========== iframe 延迟加载 ==========
  document.querySelectorAll('.game-frame').forEach(function (iframe) {
    var src = iframe.src;
    iframe.removeAttribute('src');
    iframe.setAttribute('data-src', src);
  });

  // ========== 暴露全局接口 ==========
  window.PlayHub = {
    showLobby: showLobby,
    openGame: openGame,
    toggleSidebar: toggleSidebar,
    getCurrentGame: function () { return currentGame; }
  };

})();
