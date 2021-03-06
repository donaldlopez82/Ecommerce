import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Donald',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Max',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Batman Comic',
      slug: 'batman-comic',
      category: 'comics',
      image: '/images/batmanwholaughs.jpg',
      price: 12,
      countInStock: 10,
      company: 'DC',
      rating: 4.5,
      numReviews: 110,
      discription: 'Batman vs Joker',
    },
    {
      // _id: '2',
      name: 'Spider-Man Comic',
      slug: 'spider-man-comic',
      category: 'comics',
      image: '/images/spiderman.jpg',
      price: 12,
      countInStock: 0,
      company: 'Marvel',
      rating: 4.7,
      numReviews: 150,
      discription: 'Spider-Man Spiders',
    },
    {
      // _id: '3',
      name: 'Avengers Comic',
      slug: 'avengers-comic',
      category: 'comics',
      image: '/images/avengers.jpg',
      price: 12,
      countInStock: 10,
      company: 'Marvel',
      rating: 4.0,
      numReviews: 99,
      discription: 'Avengers Origin',
    },
    {
      // _id: '4',
      name: 'Justice League Comic',
      slug: 'justice-league-comic',
      category: 'comics',
      image: '/images/justiceleague.jpg', //679px x 829px
      price: 12,
      countInStock: 10,
      company: 'DC',
      rating: 3.5,
      numReviews: 111,
      discription: 'Justice League Origin',
    },
  ],
};
export default data;
