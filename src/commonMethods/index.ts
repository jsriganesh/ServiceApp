import { bookingStatusColors } from "../utils/colors"


export const convertLocalDate=(date:Date)=>{
    return date.toLocaleDateString()
}
export const convertLocalTime=(date:Date)=>{
    return date.toLocaleTimeString()
}

export const getBookingStatusColorCode=(status:'P'|'A'|'C'|'R'|'D'):string=>{
    switch(status){
        case 'P':  return bookingStatusColors.pending; break;
        case 'A':  return bookingStatusColors.approved; break;
        case 'C':  return bookingStatusColors.canceled; break;
        case 'R':  return bookingStatusColors.rejected; break;
        case 'D':  return bookingStatusColors.done; break;
    }
}