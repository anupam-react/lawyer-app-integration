import { atom } from 'recoil';

export const formState = atom({
  key: 'formState',
  default: {
    caseTitle:'',
    caseNumber:'',
    courtName:'',
    courtNumber:'',
    judge:'',
    nextHearingDate:'',
    lastDateOfHearing:'',
    remainderDate:'',
    hearingTime:'',
    remainderType:'Hourly',
    remainderTime:'',
    setRemainder: false,
     type:'General',
     userId:'', 
  },
});

export const singleInfo = atom({
  key: 'singleState',
  default: {},
});

export const InstantsingleInfo = atom({
  key: 'instantState',
  default: {},
});

export const BookAppoint = atom({
  key: 'BookAppointState',
  default: {
    email:'',
    name:'',
    phone:'',
    state:'',
    lawyerId:'',
    caseId:'',
    appointmentDate:'',
    appointmentType:'',
    appointmentTime:'',
    id:""
  },
});

export const BookAppointOrder = atom({
  key: 'BookAppointOrderState',
  default: {
    lawyerId:'',
    appointmentDate:'',
    appointmentType:'',
    appointmentTime:'',
  },
});