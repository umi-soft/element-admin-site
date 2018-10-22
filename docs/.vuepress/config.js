module.exports = {
  port: 6666,
  title: 'element-admin',
  description: '基于ElementUI的基础脚手架工程',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: 'API',
            link: '/api/'
          }
        ],
        sidebar: {
          '/api/': [
            {
              title: '登录',
              collapsable: false,
              children: genLoginAPISidebar('')
            },
            {
              title: '系统管理',
              collapsable: false,
              children: genSystemManagementAPISidebar('')
            }
          ],
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  }
}

function genLoginAPISidebar(type = '') {
  const mapArr = [
    '/api/',
    '/api/login.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genSystemManagementAPISidebar(type = '') {
  const mapArr = [
    '/api/system-management/',
    '/api/system-management/dept.md',
    '/api/system-management/dictionary.md',
    '/api/system-management/group.md',
    '/api/system-management/menu.md',
    '/api/system-management/role.md',
    '/api/system-management/user.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}