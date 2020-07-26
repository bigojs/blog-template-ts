import http from 'http'
import fs from 'fs'
import path from 'path'
import mime from 'mime-types'
import { Request } from 'bigojs'
import { HomeComponent } from './components/Home/Home'
import { MasterComponent } from './components/Master/Master'
import { ErrorComponent } from './components/Error/Error'
import { ArticleComponent } from './components/Article/Article'

const host: string = '127.0.0.1'
const port: number = 3001

const server: http.Server = http.createServer((req, res) => {
  const bigoReq = new Request(req)

  switch(req.method) {
    case 'GET':
      switch (bigoReq.route[0]) {
        case 'article':
          debugger;
          const articlePage = new ArticleComponent(bigoReq.route[1]).render()
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(new MasterComponent({page: articlePage}).render(), 'utf-8')
          break
        case undefined:
          const homePage = new HomeComponent({}).render()
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(new MasterComponent({page: homePage}).render(), 'utf-8')
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
              let statusNo: number = error.code === 'ENOENT' ? 404 : 500
              const page = new ErrorComponent({
                message: 'Oops something went wrong 😥', 
                status: statusNo, 
                stack: ''
              }).render()
              res.writeHead(statusNo, { 'Content-Type': 'text/html' })
              res.end(new MasterComponent({page: page}).render(), 'utf-8')
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