let express = require('express')

let app = express()


let magic8 = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

randomIZer = ()=> Math.floor(Math.random() * (magic8.length - 1))


let tipFunction = function(total,tipPersent){
	return total * (tipPersent/100)
}

app.get('/greeting/:name',(request,response)=>{
	response.send(`Hello ${request.params.name},I SEE YOU`)
})

app.get('/tip/:total/:tipPersent',(request,response)=>{
	response.send(`Your tip is ${tipFunction(request.params.total,request.params.tipPersent)}`)
})

app.get('/magic/:Question',(request,response)=>{
	response.send(`<p>${request.params.Question}</p><p>${magic8[randomIZer]}`)
})





app.listen(9000)




