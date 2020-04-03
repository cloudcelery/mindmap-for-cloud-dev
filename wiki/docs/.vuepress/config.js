module.exports = {
    port: 5678,
    title: 'cloud mindmap',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'home', link: '/' },
            { text: 'mindmap', link: '/mindmap/' }
        ],
        sidebar: {
            '/mindmap/': getApiSidebar('mindmap')
        },

        sidebarDepth: 2,
    }
}

function getApiSidebar (title) {
  return [
    {
      title,
      collapsable: true,
        children: [
          '',
          'passport'
        ]
    }
  ]
}

