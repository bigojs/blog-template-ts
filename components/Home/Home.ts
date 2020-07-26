import { Component } from 'bigojs'
import fs from 'fs'
import path from 'path'
import { ArticleInterface } from '../Article/Article'
import { ArticlesService } from '../../services/Articles'

export interface HomeInterface {
  articles? : Array<ArticleInterface>
}

const template = fs.readFileSync(path.resolve(__dirname, 'Home.html'), 'utf8')

/**
 * Class that represents a Home component
 */
export class HomeComponent extends Component<HomeInterface> {
  constructor(viewData: HomeInterface) {
    super(viewData, template)

    viewData.articles = new ArticlesService().articles
  }
}