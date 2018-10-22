# 系统菜单
## queryAllMenus
:::tip
    查询菜单信息（不分页）
    POST /system/menu/query-all
### Request
    无
### Response
    {
        code: Number,
        message: String,
        data: [Menu] //返回菜单信息数组
    }
:::

## editMenu
:::tip
    编辑菜单信息，后端告知前端结果即可
    POST /system/menu/edit
### Request
    {
        id: String,
        index: String,
        name: String,
        remark: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## syncMenus
:::tip
    同步菜单信息，后端告知前端结果即可
    目前，受限于vue路由信息，无法将异步路由完全由后端构建，同步操作为折中方案，前端开发者编码级维护路由表，部分可维护字段交由同步操作完成同步（针对需求不定情况，可能会频繁执行同步操作）
    POST /system/menu/sync
### Request
    [Menu] //所有的前端路由信息数据（后端采用逻辑删除后更新的方式实现同步）
### Response
    {
        code: Number,
        message: String
    }
:::

## queryAllMenuUrl
:::tip
    查询菜单对应的全部URL信息
    GET /system/menu/all-urls
### Request
    {
        id: String
    }
### Response
    {
        code: Number,
        message: String,
        data: [MenuUrl]
    }
:::

## addMenuUrl
:::tip
    为指定菜单增加新的URL映射关系，后端告知执行结果即可
    POST /system/menu/add-url
### Request
    {
        menuId: String,
        url: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## delMenuUrl
:::tip
    删除已存在的某个菜单URL映射关系，后端告知执行结果即可
    POST /system/menu/del-url
### Request
    {
        menuId: String,
        url: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## queryAllMenuRole
:::tip
    获取菜单对应的全部角色信息
    GET /system/menu/all-roles
### Request
    {
        id: String
    }
### Response
    {
        code: Number,
        message: String,
        data: [Role]
    }
:::

## delMenuRole
:::tip
    删除已存在的某个菜单角色映射关系，后端告知执行结果即可
    POST /system/menu/del-role
### Request
    {
        menuId: String,
        roleId: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## Source
:::tip
+ [API](http://gitlab.taiji.com.cn/vue/element-admin/tree/master/src/api/system-management/menu.js)
+ [Mock](http://gitlab.taiji.com.cn/vue/element-admin/tree/master/src/mock/system-management/menu.js)
:::