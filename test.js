const { spawn } = require('child_process');
const ls = spawn('git', ['add', '.']);
ls.stdout.on('data', (data) => {


});
ls.stderr.on('data', (data) => {
    console.log(`add - 错误：${data}`);
});
ls.on('close', (code) => {
    if(code == 0){
        let ls = spawn('git', ['commit', '-m',"test"]);
        ls.stderr.on('data', (data) => {
            console.log(`commit-错误：${data}`);
        });
        ls.on('close', (code) => {
            console.log(`commit-子进程退出码：${code}`);
        });
    }
});

