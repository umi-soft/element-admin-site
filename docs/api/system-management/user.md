# 用户
## queryPageUsers
:::tip
    根据条件，分页查询用户信息
    POST /system/user/query-page
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
            list: [User]
        }
    }
:::

## checkLoginName
:::tip
    检查用户名是否已存在
    POST /system/user/check-login-name
### Request
    {
        id: [String|null], // 新增操作时，id为null，编辑时，会携带当前编辑的用户id
        loginName: String
    }
### Response
    {
        code: Number,
        message: String,
        data: {
            exist: [0|1] //  0: 不存在，1：已存在
        }
    }
:::

## addUser
:::tip
    增加新的用户，并完整返回该用户信息
    POST /system/user/add
### Request
    {
        state: 1,
        index: String,
        loginName: String,
        password: String,
        name: String,
        nickName: String,
        avatar: String,
        idNumber: String,
        gender: [0|1],
        birthday: String,
        phone: String,
        email: String,
        address: String,
        tag: String,
        remark: String
    }
### Response
    {
        code: Number,
        message: String,
        data: User // 返回新增的用户信息
    }
:::

## editUser
:::tip
    编辑用户信息，后端告知前端结果即可
    POST /system/user/edit
### Request
    {
        id: String,
        state: [0|1],
        index: String,
        loginName: String,
        name: String,
        nickName: String,
        avatar: String,
        idNumber: String,
        gender: [0|1],
        birthday: String,
        phone: String,
        email: String,
        address: String,
        tag: String,
        remark: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::


## editUserPassword
:::tip
    编辑用户密码信息，后端告知前端结果即可
    POST /system/user/edit-password
### Request
    {
        id: String,
        password: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## delUser
:::tip
    删除用户，后端告知前端结果即可
    GET /system/user/del
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

## queryAllUserRoles
:::tip
    查询用户具有的所有角色信息
    GET /system/user/all-roles
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

## addUserRole
:::tip
    增加用户角色信息，后端告知前端结果即可
    POST /system/user/add-role
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

## delUserRole
:::tip
    删除用户角色信息，后端告知前端结果即可
    POST /system/user/del-role
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

## queryAllUserDepts
:::tip
    查询用户具有的所有部门信息
    GET /system/user/all-depts
### Request
    {
        id: String
    }
### Response
    {
        code: Number,
        message: String,
        data: [Dept]
    }
:::

## addUserDept
:::tip
    增加用户部门信息，后端告知前端结果即可
    POST /system/user/add-dept
### Request
    [{
        userId: String,
        deptId: String
    },...]
### Response
    {
        code: Number,
        message: String
    }
:::

## delUserDept
:::tip
    删除用户部门信息，后端告知前端结果即可
    POST /system/user/del-dept
### Request
    {
        userId: String,
        deptId: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## queryAllUserGroups
:::tip
    查询用户具有的所有分组信息
    GET /system/user/all-groups
### Request
    {
        id: String
    }
### Response
    {
        code: Number,
        message: String,
        data: [Group]
    }
:::

## addUserGroup
:::tip
    增加用户部门信息，后端告知前端结果即可
    POST /system/user/add-group
### Request
    [{
        userId: String,
        groupId: String
    },...]
### Response
    {
        code: Number,
        message: String
    }
:::

## delUserGroup
:::tip
    删除用户部门信息，后端告知前端结果即可
    POST /system/user/del-group
### Request
    {
        userId: String,
        groupId: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## Source
:::tip
+ [API](http://gitlab.taiji.com.cn/vue/element-admin/tree/master/src/api/system-management/user.js)
+ [Mock](http://gitlab.taiji.com.cn/vue/element-admin/tree/master/src/mock/system-management/user.js)
:::

