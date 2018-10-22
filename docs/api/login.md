# 登录
## 验证授权
:::tip
    POST /auth
### Request
    {
        username: String
        password: String
    }
### Response
    {
        code: Number,
        message: String,
        data: String // token信息
    }
:::
## 获取用户与角色信息
:::tip
    GET /user/info
### Request
    {
        token: String // token信息
    }
### Response
    {
        code: Number,
        message: String,
        data: {
            user: Object, // 详见表结构
            roles: Array //[roleId,roleId,...]
        }
    }
:::
## 构建VUE异步路由信息
:::tip
    POST /auth
### Request
    {
        token: String // token信息
    }
### Response
    {
        code: Number,
        message: String,
        data: Map //[[menuId1,[roleId1...]],[menuId2,[roleId1...]]...]   Map结构
    }
:::
## 相关连接
:::tip
+ [API](http://gitlab.taiji.com.cn/vue/element-admin/tree/master/src/api/login.js)
+ [Mock](http://gitlab.taiji.com.cn/vue/element-admin/tree/master/src/mock/login.js)
:::