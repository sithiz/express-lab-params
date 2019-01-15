let express = require('express')

let app = express()


app.get('/greeting/:name',(request,response)=>{
	response.send(`Hello ${request.params.name},I SEE YOU`)
})

app.listen(9000)