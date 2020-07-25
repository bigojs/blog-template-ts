import { Component } from 'bigojs'
import fs from 'fs'
import path from 'path'

export interface HomeInterface {
  articles? : Array<{
    title: string,
    author: string,
    tags: string[],
    description: string
  }>
}

const template = fs.readFileSync(path.resolve(__dirname, 'Home.html'), 'utf8')

/**
 * Class that represents a Home component
 */
export class HomeComponent extends Component<HomeInterface> {
  constructor(viewData: HomeInterface) {
    super(viewData, template)

    viewData.articles = [
      {
        title: 'Everything You Need to Know About Grunt',
        author: 'Eric Ferraiuolo',
        tags: ['Javascript', 'Web', 'Development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        title: 'Everything You Need to Know About Grunt',
        author: 'Eric Ferraiuolo',
        tags: ['Javascript', 'Web', 'Development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        title: 'Everything You Need to Know About Grunt',
        author: 'Eric Ferraiuolo',
        tags: ['Javascript', 'Web', 'Development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ]
  }
}