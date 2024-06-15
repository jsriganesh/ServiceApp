import { Alert, StyleSheet, Text, View } from 'react-native'
import React ,{useState}from 'react'
import { Text10PXBold } from '../styledComponents/labels'
import { labels } from '../../utils/labels'
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'

const ChooseComplaintType = () => {
    const [selected, setSelected] = useState<string[]>([]);
    // const [selected, setSelected] = useState<string>('');

    const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]
  return (
    <View style={styles.container}>
      <Text10PXBold>{labels.chooseComplaintTypes}</Text10PXBold>
      <MultipleSelectList 
        setSelected={(val:string[]) => setSelected(val)} 
        data={data} 
        save="value"
        // onSelect={() => {Alert.alert(selected.toString())}} 
        // label={''}
        boxStyles={{borderRadius:5,
          backgroundColor: '#f0f0f0',
          borderWidth: 1,
          borderColor: '#CCC'
        }}
    />
    {/* <SelectList
        setSelected={(val:string) => setSelected(val)} 
        data={data} 
        save="value"
    /> */}
    </View>
  )
}

export default ChooseComplaintType

const styles = StyleSheet.create({
    container:{}
})