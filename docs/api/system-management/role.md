# 角色
## queryPageRoles
:::tip
    根据条件，分页查询用户角色信息
    POST /system/role/query-page
### Request
    {
        page: Number,
        pageSize: Number,
        filters: [{field: String, value: String},...],
        sorts: [{field: String, value: ['desc'|'esc']},...]
    }
### Response
    {
        code: Number,
        message: String,
        data: {
            total: Number,
            page: Number,
            pageSize: Number,
            list: [Role]
        }
    }
:::

## queryAllRoles
:::tip
    根据条件，查询角色信息（不分页）
    POST /system/role/query-all
### Request
    {
        filters: [{field: String, value: String},...],
        sorts: [{field: String, value: ['desc'|'esc']},...]
    }
### Response
    {
        code: Number,
        message: String,
        data: [Role] //返回角色信息数组
    }
:::

## addRole
:::tip
    增加新的角色，并完整返回该角色信息
    POST /system/role/add
### Request
    {
        name: String,
        state: 1,
        index: String,
        remark: String
    }
### Response
    {
        code: Number,
        message: String,
        data: Role // 返回新增的角色信息
    }
:::

## editRole
:::tip
    编辑角色信息，后端告知前端结果即可
    POST /system/role/edit
### Request
    {
        id: String,
        name: String,
        state: [0|1],
        index: String,
        remark: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## delRole
:::tip
    删除用户角色，后端告知前端结果即可
    GET /system/role/del
### Request
    {
        id: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## queryAllRoleMenus
:::tip
    获取角色的所有菜单信息
    GET /system/role/all-menus
### Request
    {
        id: String
    }
### Response
    {
        code: Number,
        message: String,
        data: [RoleMenu]
    }
:::

## resetRoleMenus
:::tip
    重置角色对应的菜单信息（历史映射关系被删除，新增新的映射关系）,后端告知执行结果即可
    POST /system/role/reset-menus
### Request
    [{
        userId: String,
        roleId: String
    },...]
### Response
    {
        code: Number,
        message: String
    }
:::

## queryAllRoleUsers
:::tip
    查询角色下所有用户信息
    GET /system/role/all-users
### Request
    {
        id: String
    }
### Response
    {
        code: Number,
        message: String,
        data: [User]
    }
:::

## delRoleUser
:::tip
    删除角色下的用户，后端告知前端结果即可
    POST /system/role/del-user
### Request
    {
        userId: String,
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
+ [API](http://gitlab.taiji.com.cn/vue/element-admin/tree/master/src/api/system-management/role.js)
+ [Mock](http://gitlab.taiji.com.cn/vue/element-admin/tree/master/src/mock/system-management/role.js)
:::