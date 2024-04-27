export const zhCN = {
  aside: {
    connect: '连接',
    file: '文件',
    history: '历史',
    github: 'GitHub',
    user: '用户',
    setting: '设置',
    chatBot: 'AI助手',
  },
  setting: {
    basic: '通用设置',
    theme: '主题外观',
    language: '系统语言',
    about: '关于软件',
    auto: '跟随系统',
    dark: '暗黑主题',
    light: '月白主题',
    ai: {
      title: 'GPTs配置',
      others: '其他GPTs',
      model: '模型',
      apiKey: 'API密钥',
      prompt: '提示词',
      form: {
        reset: '重置',
        save: '保存并启用',
      },
      missing: 'GPT 未配置或未启用',
      defaultPrompt: `您是一个专业数据库开发者，熟悉 Elasticsearch 和 OpenSearch，用户会问一些问题，例如：列出数据库中的所有索引，用户会提供相关的索引名称、索引映射，您的任务是编写查询 DSL 查询来回答问题。查询 DSL 响应应该在 json 代码块中，并遵循以下格式：
        \`\`\`json
        <method> <path>
        <Query DSL>
        \`\`\`
        删除路径开头的斜杠，body 是一个 JSON 对象，如果表示，它是可选的，并且应该从新行开始，您可以在 body 中使用提供的索引名称和索引映射来回答问题。`,
    },
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
    sslCertVerification: 'SSL 证书验证',
    add: '添加连接',
    edit: '编辑连接',
    testSuccess: '连接成功',
    formValidation: {
      nameRequired: '请输入连接名称',
      hostRequired: '请输入主机地址',
      portRequired: '请输入端口号',
      sslCertOnlyHttps: 'SSL 证书验证只能在 HTTPS 连接下开启',
    },
    operations: {
      connect: '连接',
      edit: '编辑',
      remove: '删除',
    },
    validationFailed: '表单验证失败！',
    unAuthorized: '认证失败，请输入正确的用户名和密码！',
  },
  dialogOps: {
    warning: '提示',
    removeNotice: '确认删除该连接？',
    confirm: '确认',
    cancel: '取消',
    removeSuccess: '连接删除成功',
  },
  editor: {
    establishedRequired: '请选择执行操作的数据库实例',
    invalidJson: '无效的 JSON 格式',
  },
  history: {
    empty: '无历史记录',
    emptyDesc: '执行扫描和查询时，查询历史记录将显示在此处',
  },
  version: {
    newVersion: '发现新版本',
    message: '发现新版本，是否立即下载',
    skip: '跳过该版本',
    download: '下载',
    later: '忽略',
  },
};
