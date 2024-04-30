import { View, Text } from 'react-native'
import React from 'react'
import { Text10PXBold, Text10PXRegular, Text10PXSemiBold, Text12PXBold, Text12PXRegular, Text12PXSemiBold } from './src/components/styledComponents/labels';
import { CustomeFonts } from './src/utils/customeFonts';
import CustomerDashboard from './src/pages/customerDashboard';

const App = () => {
  return (
    <CustomerDashboard/>
  )
}

export default App