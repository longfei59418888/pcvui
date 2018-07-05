
var yargs = require('yargs')
const argv = require('yargs').argv
let { m = "info" } = argv
const { exec } = require('child_process');
exec('git add .',(error)=>{
    if(error){
        console.error(`exec add error: ${error}`)
        return
    }
    exec(`git commit -m "${m}"`,(error)=>{
        if(error){
            console.error(`exec commit error: ${error}`)
            return
        }
        console.log(`commit "${m}"`)
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

