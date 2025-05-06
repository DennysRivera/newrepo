import express from 'express';
const app = express();

app.get('/', async (req, res) => {
    let numbers = []
    for(let i = 0; i < 5; i++){
        numbers.push(test())
    }
    

    res.send(`Hello World ${numbers}`)
    
});

app.get('/hello', async (req, res) => {
  console.log("Hello World")
  res.send("Hello World!!")
});

function test(){
  let number = Math.random() * 20
  console.log(number)
  return number
}

app.get('/nono', (req, res) => {
  res.status(403).send({msg: "This is a JSON response"})
  
})

app.get('/endpoint', (req, res) => {
  res.status(403).send({msg: "This is a JSON response"})
  
})

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});