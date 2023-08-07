import { createI18n } from 'vue-i18n';
const enUS = {
  setting: {
    basic: 'Basic',
    theme: 'Theme',
    language: 'Language',
    about: 'About Us',
  },
  connection: {
    new: 'New connection',
    test: 'Test connection',
    name: 'Name',
    host: 'Host',
    port: 'Port',
    username: 'Username',
    password: 'Password',
    queryParameters: 'query parameters',
    add: 'Add connection',
    testSuccess: 'connect success',
    formValidation: {
      nameRequired: 'Name is required',
      hostRequired: 'Host is required',
      portRequired: 'Port is required',
    },
  },
  form: {
    confirm: 'Confirm',
    cancel: 'Cancel',
  },
};

const zhCN = {
  setting: {
    basic: '通用设置',
    theme: '主题外观',
    language: '系统语言',
    about: '关于软件',
  },
  connection: {
    new: '新建连接',
    test: '测试连接',
    name: '连接名称',
    host: '主机地址',
    port: '端口号',
    username: '用户名',
    password: '密码',
    queryParameters: '查询参数',
    add: '添加连接',
    testSuccess: '连接成功',
    formValidation: {
      nameRequired: '请输入连接名称',
      hostRequired: '请输入主机地址',
      portRequired: '请输入端口号',
    },
  },
  form: {
    confirm: '确认',
    cancel: '取消',
  },
};

const langType = localStorage.lang || 'auto';
let langName = langType;
if (langType === 'auto') {
  langName = navigator.language === 'zh-CN' ? 'zhCN' : 'enUS';
}

const lang = createI18n({
  globalInjection: true,
  locale: langName,
  legacy: false,
  messages: {
    zhCN,
    enUS,
  },
});
import { useI18n } from 'vue-i18n';
const useLang = useI18n;

export { lang, useLang };