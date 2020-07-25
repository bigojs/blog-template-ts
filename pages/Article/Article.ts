import { Component } from 'bigojs'
import fs from 'fs'
import path from 'path'

export interface ArticleInterface {
  
}

const template = fs.readFileSync(path.resolve(__dirname, 'Article.html'), 'utf8')

/**
 * Class that represents an Article component
 */
export class ArticleComponent extends Component<ArticleInterface> {
  constructor(viewData: ArticleInterface) {
    super(viewData, template)
  }
}