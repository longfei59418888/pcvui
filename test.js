const { exec } = require('child_process');
exec('git add .',(error)=>{
    if(error){
        console.error(`exec add error: ${error}`)
        return
    }
    exec('git commit -m d',(error)=>{
        if(error){
            console.error(`exec commit error: ${error}`)
            return
        }
        exec('git pull',(error,stdout)=>{
            if(error){
                console.error(`exec pull error: ${error}`)
                return
            }
            if(stdout.indexOf("Already up to date") != -1){
                exec('git push',(error,stdout)=>{
                    if(error){
                        console.error(`exec push error: ${error}`)
                        return
                    }
                    console.log(`exec push success!`)
                })
            }
        })
    })
})

