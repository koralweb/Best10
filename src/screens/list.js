import HomeScreen from './HomeScreen';
import FirstScreen from './FirstScreen';
import ShopScreen from './ShopScreen';
import CartScreen from './CartScreen';
import BookingScreen from './BookingScreen';
import MatchesScreen from './MatchesScreen';
import ContactsScreen from './ContactsScreen';

const list = [
  {
    name: 'First',
    component: FirstScreen,
    title: 'Birinci',
  },
  {
    name: 'Home',
    component: HomeScreen,
    title: 'Ana Sayfa',
  },
  {
    name: 'Shop',
    component: ShopScreen,
    title: 'Mağaza',
  },
  {
    name: 'Cart',
    component: CartScreen,
    title: 'Araba',
  },
  {
    name: 'Booking',
    component: BookingScreen,
    title: 'Masa rezervasyonu',
  },
  {
    name: 'Matches',
    component: MatchesScreen,
    title: 'Yayınlar',
  },
  {
    name: 'Contacts',
    component: ContactsScreen,
    title: 'Kişiler',
  },
];

export default list;
