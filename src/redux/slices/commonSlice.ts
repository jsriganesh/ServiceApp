import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { ServiceDetails } from "../../interface/commonTypes"

const commonSlice = createSlice({
  name: "commonData",
  initialState: {
    serviceList:[
        {serviceName:'A/C',key:'ac',serviceId:1},
        {serviceName:'Camera',key:'camera',serviceId:2},
        {serviceName:'Solor',key:'solor',serviceId:3},
        {serviceName:'UPS',key:'ups',serviceId:4},
    ]
  },
  reducers: {
    updateServiceList(state, action: PayloadAction<ServiceDetails[]>) {
        state.serviceList = action.payload
      }
  
  }
})
export const { updateServiceList } = commonSlice.actions

export default commonSlice.reducer
