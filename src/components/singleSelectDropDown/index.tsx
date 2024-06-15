import { Alert, StyleSheet, Text, View } from 'react-native'
import React ,{useEffect, useState}from 'react'
import { Text10PXBold } from '../styledComponents/labels'
import { labels } from '../../utils/labels'
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'

interface SigleSelectDropDownProps {
    label?:string,
    selectedData:(data:any)=> void
  }

const SigleSelectDropDown= ({label,selectedData}: SigleSelectDropDownProps) => {
    // const [selected, setSelected] = useState<string[]>([]);
    const [selected, setSelected] = useState<string>('');
    const data = [
        {key:'1', value:'1/179, dhasampalayam, mettupalayam, coimbatore', disabled:true},
        {key:'2', value:'2/179, dhasampalayam, mettupalayam, coimbatore'},
        {key:'3', value:'3/179, dhasampalayam, mettupalayam, coimbatore'},
        {key:'4', value:'4/179, dhasampalayam, mettupalayam, coimbatore', disabled:true},
        {key:'5', value:'5/179, dhasampalayam, mettupalayam, coimbatore'},
        {key:'6', value:'6/179, dhasampalayam, mettupalayam, coimbatore'},
        {key:'7', value:'7/179, dhasampalayam, mettupalayam, coimbatore'},
    ]

    useEffect(()=>{
        const findSelectedData = data.find(obj=>obj.value === selected)
        selectedData(findSelectedData)
    },[selected])
  return (
    <View style={styles.container}>
     {label && <Text10PXBold style={{marginTop:10}}>{label}</Text10PXBold>}
    <SelectList
        setSelected={(val:string) => setSelected(val)} 
        data={data} 
        save="value"
        boxStyles={{borderRadius:5,
            backgroundColor: '#f0f0f0',
            borderWidth: 1,
            borderColor: '#CCC'
          }}
    />
    </View>
  )
}

export default SigleSelectDropDown

const styles = StyleSheet.create({
    container:{}
})