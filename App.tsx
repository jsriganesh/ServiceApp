import { View, Text } from 'react-native'
import React from 'react'
import { Text10PXBold, Text10PXRegular, Text10PXSemiBold, Text12PXBold, Text12PXRegular, Text12PXSemiBold } from './src/components/styledComponents/labels';
import { CustomeFonts } from './src/utils/customeFonts';
import CustomerDashboard from './src/pages/customerDashboard';
import RootNavigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <RootNavigation/>
    </Provider>
  )
}

export default App