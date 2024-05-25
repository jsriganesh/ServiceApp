import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenName } from '../utils/screenNames';
import CustomerDashboard from '../pages/customerDashboard';
import BookService from '../pages/bookService';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false,animation:'fade'}} >
            <Stack.Screen name={ScreenName.customerDashboard} component={CustomerDashboard} />
            <Stack.Screen name={ScreenName.bookService} component={BookService} />
            {/* <Stack.Screen name={ScreenName.shopScreen} component={ShopScreen} />
            <Stack.Screen name={ScreenName.whatsNewScreen} component={WhatsNewScreen} />
            <Stack.Screen name={ScreenName.myAccountScreen} component={MyAccount} />
            <Stack.Screen name={ScreenName.itemFullDetailsScreen} component={ItemFullDetailsScreen} 
           options={{
            animation: 'slide_from_bottom',
          }}
            /> */}
            
          </Stack.Navigator>
          </NavigationContainer>
  )
}

export default RootNavigation