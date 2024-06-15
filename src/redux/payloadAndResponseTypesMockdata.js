
const bookingRequest ={
    type:'A/C',
    complaint:'camera not working',
    complaintDescription :'AC is not wokring properly past one week.',
    status:'P',
    bookingDate:'13-12-2024 12:00 AM',
    complaintImages:[],
    reasonForReject:'',
    reasonForCanceled:'',
    serviceAmount:'500',
    customerFeedBack:'',
    serviceManDetails:{
        serviceManName:'Sriganesh',
        mobileNo:'9080706060',
        serviceManId:'0001'
    },
    customerDetails:{
        customerID:'0001',
        name:'Sriganesh',
        mobileNo:'9080706060',
        address:'2/179, dhasampalayam, mettupalayam, coimbatore',
    },
}

const serviceAndComplaintTypes=[
    {
        serviceTypeId:'ST1',
        serviceTypeName:'A/C',
        serviceTypeImage:'',
        complaintTypes:[
            'Not woking',
            'Leaking refrigerant',
            'A C smells bad',
            'Coil freezing',
            'AC not turning on',
            'Ac fan failure',
            'AC running constantly',
            'Low refrigerant level',
            'Uneven cooling',
            'Capacitor failure'
        ] 
    },
    {
        serviceTypeId:'ST2',
        serviceTypeName:'Solor',
        serviceTypeImage:'',
        complaintTypes:[
            'Solar Panels are not always efficient',
            'Solar Panels can be damaged by severe weather',
            'Solar Panels require regular maintenance',
            'Solar panels can be stolen',
            'Solar panels can be aesthetically displeasing',
            'Electrical issues',
            'Solar Panel Inverter Problems',
            'Battery problems',
            'Panel Damage',
            'Cost'
        ] 
    }
]

export const bookingHistory =[  
    {...bookingRequest,status:'A'},
    {...bookingRequest,status:'P'},
    {...bookingRequest,status:'C'},
    {...bookingRequest,status:'D'},
    {...bookingRequest,status:'R'}
]
        // if upcomming - [PENDING-'P',Approved-'A']
        // if past - [Canceled-'C',Rejected-'A',Done-'D']

