module.exports = {
  types: [
    { value: 'feat', name: 'feat: 新特性' },
    { value: 'fix', name: 'fix: bug修复' },
    { value: 'docs', name: 'docs: 仅更改文档' },
    {
      value: 'style',
      name:
        'style: 不影响代码运行的格式更改\n (如空格，格式化代码，分号等)',
    },
    {
      value: 'refactor',
      name: 'refactor: 代码重构',
    },
    {
      value: 'perf',
      name: 'perf: 使项目性能提升的代码',
    },
    { value: 'test', name: 'test:  添加测试用例' },
    {
      value: 'chore',
      name:
        'chore: 项目构建、辅助工具等\n 如文档生成等',
    },
    { value: 'revert', name: 'revert: 回滚代码' },
    { value: 'WIP', name: 'WIP: 待完成的代码' },
  ],

  scopes: [],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "选择提交的类型:",
    scope: '\n指明更改的范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '指明此次修改的范围:',
    subject: '针对此次修改，填写一个简单明了的说明:\n',
    body: '提供一个详细的说明 (可选). 用 "|" 来换行:\n',
    breaking: '列出此次不兼容的变更 (可选):\n',
    footer: '列出关闭的ISSUES (可选). 比如: #31, #34:\n',
    confirmCommit: '确定使用以上内容来提交本次commit吗?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: [],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
