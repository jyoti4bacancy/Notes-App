const chalk = require("chalk")
const fs=require("fs")

const getnotes=()=>{
    return'your notes....'
}
const addnotes=(title,body)=>{
  const notes=loadnotes()
  const duplicatenotes=notes.filter((note)=> note.title===title)

  debugger
//   const duplicatenotes=notes.filter(function(note){
//     return note.title===title
// })
  if(duplicatenotes.length===0){
    notes.push({
        title:title,
        body:body
    })
    savenotes(notes)
    console.log(chalk.green.inverse('note added'))//inverse to define background green.
  }
  else{
    console.log(chalk.red.inverse('note title already taken..!'))
  }
  
}
const removenotes=(title)=>{
    const notes=loadnotes()
    const tokeepnotes=notes.filter((note)=>
             note.title!==title
         )
         if(notes.length>tokeepnotes.length){
             console.log(chalk.green.inverse('note removed'))
             savenotes(tokeepnotes)
            }
           else{
            console.log(chalk.red.inverse('no note found'))
              
           } 
 }

const listnotes=()=>{
    const notes=loadnotes()
    console.log(chalk.green.inverse("your notes list"))
    notes.forEach((note) =>
    console.log(note.title) )
}
const readnotes= (title)=>{
    const notes=loadnotes()
const result=notes.find((note)=> note.title===title)
if(result){
    console.log(chalk.blue.inverse(result.title))
    console.log(chalk.inverse(result.body))
}
else{
    console.log("no note found")
}
}

const loadnotes=()=>{
    try{
        const databuffer=fs.readFileSync('notes.json')
        const datajson=databuffer.toString();
        return JSON.parse(datajson)
    }
    catch(e){
        return []
    }
}
//arrow function def. syntax
const savenotes=(notes)=>{
    const datajson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',datajson)
}
//standard function defination syntax
// const savenotes=function(notes){
//     const datajson=JSON.stringify(notes)
//     fs.writeFileSync('notes.json',datajson)
// }

module.exports={
    addnotes:addnotes,
    getnotes:getnotes,
    removenotes:removenotes,
    listnotes:listnotes,
    readnotes:readnotes
}