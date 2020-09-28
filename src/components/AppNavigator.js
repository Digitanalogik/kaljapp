import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import BeerList from './BeerList';
import BeerCreate from './BeerCreate';
import BeerDelete from './BeerDelete';
import BeerEdit from './BeerEdit';
import DudeList from './DudeList';
import DudeCreate from './DudeCreate';
import DudeDelete from './DudeDelete';
import DudeDetails from './DudeDetails';
import AddBeerToDude from './AddBeerToDude';
import AddDudeToBeer from './AddDudeToBeer';
import Help from './Help';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    BeerList: BeerList,
    BeerCreate: BeerCreate,
    BeerDelete: BeerDelete,
    BeerEdit: BeerEdit,
    DudeList: DudeList,
    DudeCreate: DudeCreate,
    DudeDelete: DudeDelete,
    DudeDetails: DudeDetails,
    AddBeerToDude: AddBeerToDude,
    AddDudeToBeer: AddDudeToBeer,
    Help: Help,
  },
  {
    initialRouteName: "Home",
    headerMode: 'none'
  }
);

export default AppNavigator;
