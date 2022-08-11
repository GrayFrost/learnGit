const childProcess = require('child_process');

function bootstrap() {
  const gitCommand = 'git rev-parse --abbrev-ref HEAD';
  const gitCommand2 = 'git branch --show-current';

  const str = childProcess.execSync(gitCommand).toString();
  const str2 = childProcess.execSync(gitCommand2).toString();
  console.log('zzh git: ', str);
  console.log('zzh git2: ', str2);

  return {
    prompter: function(cz, commit) {
      cz.prompt([
        {
          type: 'list',
          name: 'type',
          message: '请选择类型',
          default: 'feat',
          choices: [{
            key: 'feat',
            value: 'feat'
          }, {
            key: 'fix',
            value: 'fix'
          }]
        },
        {
          type: 'input',
          name: 'subject',
          message: '请填写改动',
          validate: (input) => {
            if (!input) {
              console.warn('Please input changes');
              return false;
            }
            return true;
          }
        },
        {
          type: 'input',
          name: 'body',
          message: '若是fix bug单，请填写关联issue',
          validate: (input, answers) => {
            const { type } = answers; // 上一个问题的答案
            if (type === 'feat') {
              return true
            } else if (type === 'fix' && !input) {
              console.warn('Please input issue ticket');
              return false;
            }
            return true;
          }
        }
      ]).then(function(answers) {
        const { type, subject, body } = answers;
        const scope = 'spmkt-0'
        let message = `${type}(${scope}): ${subject}`;
        if (body) {
          message =  message + "\n\n" + body;
        }
        commit(message);
      })
    }
  }
}

module.exports = bootstrap()