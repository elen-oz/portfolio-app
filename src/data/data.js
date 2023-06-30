import WorkImg1 from '../assets/projects/rss.png';
import WorkImg2 from '../assets/projects/dojo.png';
import WorkImg3 from '../assets/projects/myMoney.png';
import WorkImg4 from '../assets/projects/food-order.png';
import WorkImg5 from '../assets/projects/cookingApp.png';
import WorkImg6 from '../assets/projects/brain-game.png';
import WorkImg7 from '../assets/projects/difference-calculator.png';
import WorkImg8 from '../assets/projects/today-i-learned.png';

const data = [
  {
    id: 1,
    name: 'Food Order App',
    image: WorkImg4,
    github: 'https://github.com/elen-oz/food-order-app',
    live: 'https://food-order-app-9b4ad.web.app/',
    description:
      '<b>Description</b><p>This is a food ordering application built with React.js, CSS, and HTML. The application allows users to browse through a menu, select their desired items, and place an order.</p><b>Features</b><ul><li>Browse through a list of available food items</li><li>Add desired items to a shopping cart</li><li>Place an order for the selected items</li></ul>',
  },
  {
    id: 2,
    name: 'RSS Aggregator',
    image: WorkImg1,
    github: 'https://github.com/elen-oz/rss-aggregator',
    live: 'https://frontend-project-11-01.vercel.app/',
    description:
      '<b>Description</b><p>This is an RSS aggregator, a specialized tool designed to collate news feeds, article announcements, and other content. It provides an easy way for websites, typically blogs, to allow users to subscribe to updates. The aggregator polls sites&#39; RSS feeds for new posts and displays them in a user-friendly manner, marking what has been read, and so on.</p><p>This project is the third project on the Hexlet platform for the front-end development programme.</p><b>Features</b><ul><li>Subscribe to RSS feeds from various websites</li><li>View a list of all posts from subscribed feeds</li><li>Mark posts as read</li><li>View a summary of each post within the aggregator</li></ul>',
  },
  {
    id: 3,
    name: 'Management App',
    image: WorkImg2,
    github: 'https://github.com/elen-oz/the-dojo',
    live: 'https://thedojosite-355e3.web.app/',
    description:
      '<b>Description</b><p>The Dojo is a collaborative project management tool. Register, invite colleagues, and work together on projects. This application is built with React.js, CSS, and HTML.</p><b>Features</b><ul><li>User registration and login</li><li>Project creation and management</li><li>Collaboration with colleagues</li><li>Real-time updates on project progress</li></ul>',
  },
  {
    id: 4,
    name: 'Cooking App',
    image: WorkImg5,
    github: 'https://github.com/elen-oz/cooking-site',
    live: 'https://cooking-ninja-site-e369e.web.app/',
    description: 'Site with recipes: the ability to add ypuer own recipe and remove them',
  },
  {
    id: 8,
    name: 'Today I Learned',
    image: WorkImg8,
    github: 'https://github.com/elen-oz/today-i-learned-app',
    live: 'https://today-i-learned-app-mauve.vercel.app/',
    description: 'A web application where you can share interesting facts and vote for others.',
  },
  {
    id: 5,
    name: 'My Money',
    image: WorkImg3,
    github: 'https://github.com/elen-oz/my-money',
    live: 'https://mymoney-54d85.web.app/',
    description:
      'This app is for keeping track of your expenses (no data needed, just create new user)',
  },
  {
    id: 6,
    name: 'Brain Games: CLI App',
    image: WorkImg6,
    github: 'https://github.com/elen-oz/brain-games',
    live: null,
    description:
      'This project presents 5 mini-games with the user. Each game has a greeting, addressing the user by name. The number of rounds in all games is three.',
  },
  {
    id: 7,
    name: 'Difference Calculator: CLI App',
    image: WorkImg7,
    github: 'https://github.com/elen-oz/difference-calculator',
    live: null,
    description: 'Difference Calculator determines the difference between two data structures.',
  },
];

export default data;
