import { View, Text } from 'react-native'
import React from 'react'
import { Text10PXBold, Text10PXRegular, Text10PXSemiBold, Text12PXBold, Text12PXRegular, Text12PXSemiBold } from './src/components/styledComponents/labels';
import { CustomeFonts } from './src/utils/customeFonts';

const App = () => {
  return (
    <View>
      <Text10PXSemiBold>{"Semi bold 10 PX "}</Text10PXSemiBold>
      <Text12PXSemiBold>{"Semi bold 12 PX "}</Text12PXSemiBold>
      <Text10PXBold>{" bold 10 PX"}</Text10PXBold>
      <Text12PXBold>{" bold 12 PX"}</Text12PXBold>

      <Text10PXRegular>{" regular 10 PX"}</Text10PXRegular>
      <Text12PXRegular>{" regular 12 PX"}</Text12PXRegular>

      <Text style={{
        fontFamily:CustomeFonts.fontBold
      }}>{"23456789o"}</Text>
    </View>
  )
}

export default App