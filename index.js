import express from 'express'
const chineseArray =['传/傳',"磨","宿","见/見","败","是","哦"]
const port = 4200
const app = express()

app.get('/',(req,res)=>{
res.send(chineseArray[Math.floor(Math.random()*chineseArray.length)])
})

app.listen(port,()=>{
  console.log(`Listening on http://localhost:${port}/...`)
})