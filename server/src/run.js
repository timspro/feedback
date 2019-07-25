const finalhandler = require('finalhandler')
const http         = require('http')
const bodyParser   = require('body-parser')
const Router       = require('router')
 
const router = Router()
router.use(bodyParser.urlencoded({extended: true}))
router.post('/submit-feedback', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  const {feedback} = req.body
  res.end('We appreciate your feedback!\nYou said:\n' + (feedback ? await eval(`"${feedback}"`) : '(nothing)'))
})
 
http.createServer((req, res) => router(req, res, finalhandler(req, res)))
  .listen(8081)