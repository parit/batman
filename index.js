// /*
// * HTTP Cloud Function.
// *
// * @param {Object} req Cloud Function request context.
// * @param {Object} res Cloud Function response context.
// */
// exports.helloHttp = function helloHttp (req, res) {
//   response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working
//
//   res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
//   res.send(JSON.stringify({ "speech": response, "displayText": response
//   //"speech" is the spoken version of the response, "displayText" is the visual version
//   }));
// };


const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
