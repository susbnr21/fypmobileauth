import React from 'react';
import { StyleSheet} from 'react-native';
import AppNavigator from './src/components/layout/AppNavigator';
import jwt_decode from 'jwt-decode';
import setAuthToken from './src/utils/setAuthToken';


import 'localstorage-polyfill'
import { setCurrentUser, logoutUser } from './src/actions/authActions';
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator
        style={styles.container}
      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

console.disableYellowBox = true;
