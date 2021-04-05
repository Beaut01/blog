import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider} from 'react-redux'
import store  from './src/redux/store'
import { fonts } from './src/fonts'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [ready, setReady] = React.useState(false)

  if (!ready) {
    return(
      <AppLoading 
        startAsync={fonts}
        onFinish={() => setReady(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}


