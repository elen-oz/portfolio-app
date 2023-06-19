import WorkImg1 from '../assets/projects/rss.png';
import WorkImg2 from '../assets/projects/dojo.png';
import WorkImg3 from '../assets/projects/myMoney.png';
import WorkImg4 from '../assets/projects/food-order.png';
import WorkImg5 from '../assets/projects/cookingApp.png';

const data = [
  {
    id: 1,
    name: 'Food Order App',
    image: WorkImg4,
    github: 'https://github.com/elen-oz/food-order-app',
    live: 'https://food-order-app-9b4ad.web.app/',
    description:
      'Added the ability to add items to the cart, counting the quantity of goods and the amount. App linked to fairbase storage.',
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
    id: 5,
    name: 'My Money',
    image: WorkImg3,
    github: 'https://github.com/elen-oz/my-money',
    live: 'https://mymoney-54d85.web.app/',
    description:
      'This app is for keeping track of your expenses (no data needed, just create new user)',
  },
];

export default data;
