const { spawn } = require('child_process');
const add = spawn('git', ['add', '']);
add.stderr.on('data', (data) => {
    console.log(`add - 错误：${data}`);
});
add.on('close', (code) => {
    console.log('close')
    if(code == 0){
        let commit = spawn('git', ['commit', '-m',"test"]);
        commit.stderr.on('data', (data) => {
            console.log(`commit-错误：${data}`);
        });
        commit.on('close', (code) => {
            console.log(`commit-子进程退出码：${code}`);
        });
    }
});

