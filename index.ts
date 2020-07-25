import http from 'http'
import fs from 'fs'
import path from 'path'
import mime from 'mime-types'
import { Request } from 'bigojs'
import { HomeComponent } from './pages/Home/Home'
import { MasterComponent } from './pages/Master/Master'

const host: string = '127.0.0.1'
const port: number = 3000

const server: http.Server = http.createServer((req, res) => {
  const bigoReq = new Request(req)

  switch(bigoReq.method) {
    case 'GET':
      switch (bigoReq.route[0]) {
        case 'article':
          res.writeHead(200)
          res.end(`article ${bigoReq.route[1]}`)
        break
        
        case undefined:
          const page = new HomeComponent({}).render()
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(new MasterComponent({page: page}).render(), 'utf-8')
        break

        default:
          let filePath: string = 'static' + req.url
          if (filePath === 'static/') {
            filePath = 'static/index.html'
          }

          const extname: string = String(path.extname(filePath)).toLowerCase()

          const contentType: string = mime.lookup(extname) || 'application/octet-stream'

          fs.readFile(filePath, (error: NodeJS.ErrnoException, content: Buffer) => {
            if (error) {
              if(error.code == 'ENOENT') {
                fs.readFile('static/404.html', (error, content) => {
                  res.writeHead(404, { 'Content-Type': 'text/html' })
                  res.end(content, 'utf-8')
                  console.log(bigoReq)
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
      }
    break
  }
})

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})