import { Component } from 'bigojs'
import fs from 'fs'
import path from 'path'
import { ArticlesService } from '../../services/Articles'

export interface ArticleInterface {
  title?: string,
  author?: string,
  tags?: string[],
  description?: string,
  content?: string,
  link?: string
}

const template = fs.readFileSync(path.resolve(__dirname, 'Article.html'), 'utf8')

/**
 * Class that represents an Article component
 */
export class ArticleComponent extends Component<ArticleInterface> {
  articleService = new ArticlesService()

  constructor(link: string, viewData: ArticleInterface = {}) {
    super(viewData, template)
    var article = this.articleService.articles.find(
      article => article.link == link
    )
    if (article) {
      viewData.title = article.title
      viewData.author= article.author
      viewData.tags = article.tags
      viewData.description = article.description
      viewData.content = article.content
    } else {
      viewData.title = 'Article not found'
      viewData.content = 'Maybe it’s out there, somewhere...\n You can check our other stuff on our <a href="/">homepage</a>'
    }
  }
}