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
      'Added the ability to add items to the cart, counting the quantity of goods and the amount. <br /> App linked to fairbase storage.',
  },
  {
    id: 2,
    name: 'RSS Aggregator',
    image: WorkImg1,
    github: 'https://github.com/elen-oz/rss-aggregator',
    live: 'https://frontend-project-11-01.vercel.app/',
    description:
      'Rss Reader is a service for aggregating RSS feeds, which makes it easy to read a variety of sources. The feed is automatically updated every 5 seconds.',
  },
  {
    id: 3,
    name: 'Management App',
    image: WorkImg2,
    github: 'https://github.com/elen-oz/the-dojo',
    live: 'https://thedojosite-355e3.web.app/',
    description:
      'Implemented signup/login, upload your own avatar. The ability to create and to delete (complete) the project; On the general page (dashboard), you can filter projects by category. In addition to the name and details, the ability to specify the date (project deadline), category, responsible users from among the created users. Commenting each project',
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
