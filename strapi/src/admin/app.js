const config = {
  locales: ["zh-Hans", "zh"],
  translations: {
    "zh-Hans": {
      "Auth.form.email.label": "xiang4603@qq.com",
      Users: "xiang4603@qq.com",
      City: "Chinese (Simplified, China) (zh-Hans-CN)", // 这里是刚刚在设置中新建的国际化语言版本的ID
      Id: "2",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
