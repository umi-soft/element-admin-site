# 登录
## captcha
:::tip
    获取验证码（Base64转码）
    GET /captcha
### Request
    {}
### Response
    {
        code: Number,
        message: String,
        data: String // 验证码图片BASE64转码值
    }
:::

## loginByUsername
:::tip
    验证授权，获取token信息
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

## getUserDetails
:::tip
    获取用户与角色信息
    GET /user-details
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

## getRouterRoles
:::tip
    构建VUE异步路由信息
    GET /routers
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

## logout
:::tip
    退出登录
    GET /logout
### Request
    {
        token: String // token信息
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## Source
:::tip
+ [API](https://github.com/umi-soft/element-admin/tree/master/src/api/login.js)
+ [Mock](https://github.com/umi-soft/element-admin/tree/master/src/mock/login.js)
:::