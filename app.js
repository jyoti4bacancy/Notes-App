const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')
//const add=require('./utils.js')
 //console.log(add(5,3))

 // const fs=require('fs')
// fs.writeFileSync('notes.txt','hello world..')
// fs.appendFileSync('notes.txt','bacancy technology')

// console.log(validator.isEmail('jyoti@gmail.com'))
// console.log(validator.isURL('w.w.w.google.com'))
// console.log(chalk.green.inverse.bgWhite.bold('SUccess..!'))
// console.log(chalk.red.underline.bgWhite.bold('SUccess..!'))


yargs.command({
    command:'add',
    describe:'add new note',
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"

             }
            },
     handler(argv){
         notes.addnotes(argv.title,argv.body)
     }       
})

yargs.command({
    command:'remove',
    describe:'remove note',
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"

             }
            },
     handler(argv){
         notes.removenotes(argv.title)
     }       
})

yargs.command({
    command:'list',
    describe:'add new note',
     handler(){
         notes.listnotes()
     }       
})

yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string"

             }
            },
     handler(argv){
         notes.readnotes(argv.title)
     }       
})
yargs.parse();