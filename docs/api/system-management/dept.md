# 部门
## 查询全部
:::tip
    根据条件查询全部部门信息（不分页，非tree结构）
    POST /system/dept/query-all
### Request
    {
        filters: [{filed: String, value: String},...], //
        sorts: [{filed: String, Value: [desc|esc]},...] //
    }
### Response
    {
        code: Number,
        message: String,
        data: [] //返回部门信息数组，非tree结构
    }
:::

## 查询部门树
:::tip
    根据条件查询全部部门tree信息（不分页，返回tree结构数组）
    GET /system/dept/query-all-tree
### Request
    {
        id: [String|null] // null 则查询所有部门，反之查询指定部门及其子部门tree结构数据
    }
### Response
    {
        code: Number,
        message: String,
        data: [] //返回部门tree信息数组
    }
:::

## 增加新部门
:::tip
    增加新部门，并完整返回该部门信息
    POST /system/dept/add
### Request
    {
        parentId: [String|null],
        type: String,
        name: String,
        state: 1,
        index: Number,
        remark: String
    }
### Response
    {
        code: Number,
        message: String,
        data: Dept //返回新增的部门信息
    }
:::

## 编辑部门
:::tip
    编辑部门信息，后端告知前端结果即可
    POST /system/dept/edit
### Request
    {
        id: String,
        parentId: [String|null],
        type: String,
        name: String,
        state: 1,
        index: Number,
        remark: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## 删除部门
:::tip
    删除部门，后端告知前端结果即可
    GET /system/dept/del
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

## 查询全部部门用户
:::tip
    查询指定部门ID下的全部用户信息
    GET /system/dept/all-users
### Request
    {
        id: String
    }
### Response
    {
        code: Number,
        message: String,
        data: [User] //返回满足条件的User信息数组
    }
:::

## 删除部门用户
:::tip
    删除部门下的某个用户，后端告知前端结果即可
    POST /system/dept/del-user
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