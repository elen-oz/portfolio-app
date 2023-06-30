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
    description:
      '<strong>Project Description</strong><p>Grin and Baste It is a cooking site that provides recipes and cooking tips for food enthusiasts. This project is built with React.js, CSS, and HTML.</p><strong>Features</strong><ul><li><strong>Add/Delet Items</strong>: The application allows users to add and delete recipes.</li><li><strong>Theme Switching</strong>: The application includes a feature to switch between different color themes.</li><li><strong>Firestore Integration</strong>: The application uses Firestore for storing and retrieving data.</li></ul>',
  },
  {
    id: 8,
    name: 'Today I Learned',
    image: WorkImg8,
    github: 'https://github.com/elen-oz/today-i-learned-app',
    live: 'https://today-i-learned-app-mauve.vercel.app/',
    description:
      '<b>Project Description</b><p>Today I Learned is a web application where users can share interesting facts and vote for others. This project is built with React and uses Supabase for backend services.</p><b>Features</b><ul><li><strong>Interaction with Supabase</strong>: The application uses Supabase for backend services, providing a seamless experience for data management.</li><li><strong>Adding New Facts</strong>: Users can share interesting facts they have learned.</li><li><strong>Liking Facts</strong>: Users can vote for facts they find interesting.</li><li><strong>Sorting Facts</strong>: Facts can be sorted based on the number of likes they have received, making it easy to find the most popular facts.</li><li><strong>Category Filter</strong>: Users can filter facts based on categories, allowing them to focus on topics they are interested in.</li></ul>',
  },
  {
    id: 5,
    name: 'My Money',
    image: WorkImg3,
    github: 'https://github.com/elen-oz/my-money',
    live: 'https://mymoney-54d85.web.app/',
    description:
      '<b>Project Description</b><p>My Money is a web application designed to help users keep track of their expenses. This project is built with React and uses Firebase for backend services.</p><b>Features</b><ul><li><strong>Interaction with Firebase</strong>: The application uses Firebase for backend services.</li><li><strong>User Registration and Login</strong>: The application supports user registration and login.</li><li><strong>Adding and Deleting Records</strong>: Users can add and delete their own expense records.</li></ul>',
  },
  {
    id: 6,
    name: 'Brain Games: CLI App',
    image: WorkImg6,
    github: 'https://github.com/elen-oz/brain-games',
    live: null,
    description:
      '<b>Project description</b><p>Brain Games is a collection of five mini-games designed to challenge the users mental agility. Each game begins with a greeting, personalized with the users name, and consists of three rounds.</p><b>Games</b><ul><li><strong>Brain Even</strong>: The game asks the user to determine if a number is even.</li><li><strong>Brain Calc</strong>: The game presents an arithmetic operation (addition, subtraction, multiplication) on two numbers and asks the user to calculate the result.</li><li><strong>Brain GCD</strong>: The game asks the user to find the greatest common divisor of two numbers.</li><li><strong>Brain Progression</strong>: The game presents an arithmetic progression with one number missing and asks the user to identify the missing number.</li><li><strong>Brain Prime</strong>: The game asks the user to determine if a number is prime.</li></ul>',
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
