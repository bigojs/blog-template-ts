import { MasterComponent } from "./Master/Master"
import http from 'http'
import fs from 'fs'
import path from 'path'
import mime from 'mime-types'

const host: string = '127.0.0.1'
const port: number = 3000

const server: http.Server = http.createServer((req, res) => {
  /*res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')  
  res.end(
  new MasterComponent({
    title: 'My Website'      
  }).render()
  )*/

  let filePath = 'static' + req.url
  if (filePath == 'static/') {
    filePath = 'static/index.html'
  }

  const extname: string = String(path.extname(filePath)).toLowerCase()


  const contentType: string = mime.lookup(extname) || 'application/octet-stream'

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code == 'ENOENT') {
        fs.readFile('static/404.html', (error, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' })
          res.end(content, 'utf-8')
        })
      }
      else {
        res.writeHead(500)
        res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n')
      }
    }
    else {
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf-8')
    }
  })
})

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
