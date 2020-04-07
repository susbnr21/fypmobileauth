//L3C11_SUSHIL_BHANDARI_17031188
//RENTAL SHIFTERS APP

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
  import Landing from './Landing';
  import Login from '../auth/Login';
  import Register from '../auth/Register';
  import Dashboard from '../dashboard/Dashboard';
  import Selection from '../dashboard/Selection';
  import About from '../dashboard/About';
  import Worker from '../dashboard/Worker';
  import Boxs from '../dashboard/Boxs';
  import Extra from '../dashboard/Extra';
  import Maps from '../dashboard/Maps';
  import Final from '../dashboard/Final';

  const AppNavigator = createStackNavigator({
    Landing: { screen: Landing },
    Login: {screen: Login},
    Register: {screen: Register},
    Dashboard: {screen: Dashboard},
    Selection: {screen: Selection},
    About: {screen: About},
    Worker: {screen: Worker},
    Boxs: {screen: Boxs},
    Extra: {screen: Extra},
    Maps: {screen: Maps},
    Final: {screen: Final},
  });

  export default createAppContainer(AppNavigator);