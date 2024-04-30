import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import DashboardHeader from '../../components/dashboardHeader'
import { dashboardStyle } from './styles'
import { colors } from '../../utils/colors'
import Footer from '../../components/footer'

const CustomerDashboard = () => {
  return (
    <View style={dashboardStyle.body}>
        <View style={dashboardStyle.container}>
        <StatusBar backgroundColor={colors.black}/>
      <DashboardHeader/>
      </View>
      <Footer/>
    </View>
  )
}

export default CustomerDashboard