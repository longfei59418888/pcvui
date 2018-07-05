const { exec } = require('child_process');
exec('git add .',(error,stdout,stderr)=>{
    if(error){
        console.error(`exec add error: ${error}`)
        return
    }
    exec('git commit -m d',(error,stdout,stderr)=>{
        if(error){
            console.error(`exec commit error: ${error}`)
            return
        }

    })
})

