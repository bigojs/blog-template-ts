import { ArticleInterface } from "../components/Article/Article";

export class ArticlesService {
  articles: ArticleInterface[]

  constructor() {
    this.articles = [
      {
        title: 'Everything You Need to Know About Grunt',
        link: 'grunt',
        author: 'Eric Ferraiuolo',
        tags: ['Javascript', 'Web', 'Development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus diam rutrum maximus ultrices. Aliquam eget ultrices augue. Fusce finibus interdum nisi vitae aliquet. Nullam ac finibus mauris, non mollis lacus. Donec metus nisi, interdum id scelerisque sed, vehicula non eros. Curabitur commodo fringilla egestas. Mauris rhoncus lorem et porta gravida.
        
        Nullam quis porta justo. Phasellus vitae fringilla dolor. Pellentesque scelerisque leo eu quam elementum, at semper erat tempor. Duis volutpat malesuada ante sed dictum. Aliquam ultricies neque et est vulputate, non pulvinar eros lacinia. Nulla et tortor nec massa tristique laoreet. Quisque luctus at ex nec vulputate. Vestibulum consequat eget diam non dictum. Nulla sapien tortor, maximus quis porta vitae, bibendum id ante. Aliquam venenatis nisl sed tincidunt maximus.
        
        Nunc rutrum id lorem a mattis. Duis pellentesque arcu in nisi mattis, quis tempor sem porta. Pellentesque maximus ipsum augue, et pellentesque leo lobortis vel. Phasellus vestibulum facilisis venenatis. Quisque pharetra consequat faucibus. Mauris vitae arcu fringilla, suscipit purus a, laoreet mauris. Suspendisse in viverra metus.
        
        Nam dignissim velit eu rutrum malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lectus est, et vehicula leo pharetra a. Vestibulum eget fringilla orci. Ut maximus placerat tortor. Sed et mattis leo. Nunc lacinia nisi at iaculis dignissim. Quisque tempor diam vel volutpat iaculis. Proin fermentum sodales feugiat.
        
        Mauris aliquet, mauris a ullamcorper suscipit, nulla est feugiat nisi, eget rhoncus est nisl in lectus. Maecenas at eleifend justo. Mauris tincidunt congue laoreet. Ut odio justo, pharetra a felis porta, mattis semper ante. Mauris non leo tincidunt, accumsan odio sit amet, mollis eros. Proin a arcu eu turpis hendrerit pulvinar in sit amet purus. Nulla dignissim est nec molestie elementum. Morbi vitae tincidunt erat. In hac habitasse platea dictumst. Aenean orci orci, luctus in porttitor vel, ultrices ut lacus. Quisque dictum ligula ex, sit amet tempus lorem laoreet in. Praesent vel vulputate dolor. Praesent sem enim, euismod laoreet malesuada sed, interdum eget dui. Mauris a elit nec nisi dictum maximus.`
      },
      {
        title: 'If the Spice Girls Were Javascript Frameworks',
        link: 'spice',
        author: 'Russel Snyder',
        tags: ['Frameworks'],
        description: `<img width="50%" src="https://images.ctfassets.net/cjwb7umaxoxv/7iSqI2YRZqoY0aBBRZ8Ab3/8e6c43569a9de579ba1f38d5aca4d4c4/Spice-up-your-dev_logos.jpg"><br/>I'll tell you what I want; what I really, really want: for you to read about which Spice Girls are the embodiment of your favourite Javascript frameworks. This is the content you didn't you know you needed.`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus diam rutrum maximus ultrices. Aliquam eget ultrices augue. Fusce finibus interdum nisi vitae aliquet. Nullam ac finibus mauris, non mollis lacus. Donec metus nisi, interdum id scelerisque sed, vehicula non eros. Curabitur commodo fringilla egestas. Mauris rhoncus lorem et porta gravida.
        
        Nullam quis porta justo. Phasellus vitae fringilla dolor. Pellentesque scelerisque leo eu quam elementum, at semper erat tempor. Duis volutpat malesuada ante sed dictum. Aliquam ultricies neque et est vulputate, non pulvinar eros lacinia. Nulla et tortor nec massa tristique laoreet. Quisque luctus at ex nec vulputate. Vestibulum consequat eget diam non dictum. Nulla sapien tortor, maximus quis porta vitae, bibendum id ante. Aliquam venenatis nisl sed tincidunt maximus.
        
        Nunc rutrum id lorem a mattis. Duis pellentesque arcu in nisi mattis, quis tempor sem porta. Pellentesque maximus ipsum augue, et pellentesque leo lobortis vel. Phasellus vestibulum facilisis venenatis. Quisque pharetra consequat faucibus. Mauris vitae arcu fringilla, suscipit purus a, laoreet mauris. Suspendisse in viverra metus.
        
        Nam dignissim velit eu rutrum malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lectus est, et vehicula leo pharetra a. Vestibulum eget fringilla orci. Ut maximus placerat tortor. Sed et mattis leo. Nunc lacinia nisi at iaculis dignissim. Quisque tempor diam vel volutpat iaculis. Proin fermentum sodales feugiat.
        
        Mauris aliquet, mauris a ullamcorper suscipit, nulla est feugiat nisi, eget rhoncus est nisl in lectus. Maecenas at eleifend justo. Mauris tincidunt congue laoreet. Ut odio justo, pharetra a felis porta, mattis semper ante. Mauris non leo tincidunt, accumsan odio sit amet, mollis eros. Proin a arcu eu turpis hendrerit pulvinar in sit amet purus. Nulla dignissim est nec molestie elementum. Morbi vitae tincidunt erat. In hac habitasse platea dictumst. Aenean orci orci, luctus in porttitor vel, ultrices ut lacus. Quisque dictum ligula ex, sit amet tempus lorem laoreet in. Praesent vel vulputate dolor. Praesent sem enim, euismod laoreet malesuada sed, interdum eget dui. Mauris a elit nec nisi dictum maximus.`
      },
      {
        title: '13 Things to Understand If You Want to Communicate With a Programmer (and stay happy)',
        link: 'things',
        author: 'Mynah Marie',
        tags: ['Scoop', 'Funny', 'Development'],
        description: '<img src="https://images.ctfassets.net/cjwb7umaxoxv/3kna5Var0DIjKKjCZvdDJs/c6a9cc3947b29b063bd61103c3bb7111/unnamed__5_.png"> <br/> As someone who remembers the transition from the non-programming to the programming world, and who faced the bewildered expressions of friends when my personality drastically changed, I remember what it’s like to think that programming is weird. ',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus diam rutrum maximus ultrices. Aliquam eget ultrices augue. Fusce finibus interdum nisi vitae aliquet. Nullam ac finibus mauris, non mollis lacus. Donec metus nisi, interdum id scelerisque sed, vehicula non eros. Curabitur commodo fringilla egestas. Mauris rhoncus lorem et porta gravida.
        
        Nullam quis porta justo. Phasellus vitae fringilla dolor. Pellentesque scelerisque leo eu quam elementum, at semper erat tempor. Duis volutpat malesuada ante sed dictum. Aliquam ultricies neque et est vulputate, non pulvinar eros lacinia. Nulla et tortor nec massa tristique laoreet. Quisque luctus at ex nec vulputate. Vestibulum consequat eget diam non dictum. Nulla sapien tortor, maximus quis porta vitae, bibendum id ante. Aliquam venenatis nisl sed tincidunt maximus.
        
        Nunc rutrum id lorem a mattis. Duis pellentesque arcu in nisi mattis, quis tempor sem porta. Pellentesque maximus ipsum augue, et pellentesque leo lobortis vel. Phasellus vestibulum facilisis venenatis. Quisque pharetra consequat faucibus. Mauris vitae arcu fringilla, suscipit purus a, laoreet mauris. Suspendisse in viverra metus.
        
        Nam dignissim velit eu rutrum malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lectus est, et vehicula leo pharetra a. Vestibulum eget fringilla orci. Ut maximus placerat tortor. Sed et mattis leo. Nunc lacinia nisi at iaculis dignissim. Quisque tempor diam vel volutpat iaculis. Proin fermentum sodales feugiat.
        
        Mauris aliquet, mauris a ullamcorper suscipit, nulla est feugiat nisi, eget rhoncus est nisl in lectus. Maecenas at eleifend justo. Mauris tincidunt congue laoreet. Ut odio justo, pharetra a felis porta, mattis semper ante. Mauris non leo tincidunt, accumsan odio sit amet, mollis eros. Proin a arcu eu turpis hendrerit pulvinar in sit amet purus. Nulla dignissim est nec molestie elementum. Morbi vitae tincidunt erat. In hac habitasse platea dictumst. Aenean orci orci, luctus in porttitor vel, ultrices ut lacus. Quisque dictum ligula ex, sit amet tempus lorem laoreet in. Praesent vel vulputate dolor. Praesent sem enim, euismod laoreet malesuada sed, interdum eget dui. Mauris a elit nec nisi dictum maximus.`
      }
    ]
  }
}