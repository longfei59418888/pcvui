const { spawn } = require('child_process');
const ls = spawn('git', ['add', '.']);
ls.stderr.on('data', (data) => {
    console.log(`add - 错误：${data}`);
});
ls.on('close', (code) => {
    if(code == 0){
        let lss = spawn('git', ['commit', '-m',"test"]);
        lss.stderr.on('data', (data) => {
            console.log(`commit-错误：${data}`);
        });
        lss.on('close', (code) => {
            console.log(`commit-子进程退出码：${code}`);
        });
    }
});

