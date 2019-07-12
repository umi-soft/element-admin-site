# 用户分组
## queryPageGroups
:::tip
    根据条件，分页查询用户分组信息
    POST /system/group/query-page
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
            list: [Group]
        }
    }
:::

## queryAllGroups
:::tip
    根据条件，查询用户分组（不分页）
    POST /system/group/query-all
### Request
    {
        filters: [{field: String, value: String},...],
        sorts: [{field: String, value: ['desc'|'esc']},...]
    }
### Response
    {
        code: Number,
        message: String,
        data: [Group] //返回用户分组信息数组
    }
:::

## addGroup
:::tip
    增加新的用户分组，并完整返回该用户分组信息
    POST /system/group/add
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
        data: Group // 返回新增的用户分组信息
    }
:::

## editGroup
:::tip
    编辑用户分组信息，后端告知前端结果即可
    POST /system/group/edit
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

## delGroup
:::tip
    删除用户分组，后端告知前端结果即可
    GET /system/group/del
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

## queryAllGroupUsers
:::tip
    查询分组下所有用户信息
    GET /system/group/all-users
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

## delGroupUser
:::tip
    删除分组下的用户，后端告知前端结果即可
    POST /system/group/del-user
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
+ [API](https://github.com/umi-soft/element-admin/tree/master/src/api/system-management/group.js)
+ [Mock](https://github.com/umi-soft/element-admin/tree/master/src/mock/system-management/group.js)
:::