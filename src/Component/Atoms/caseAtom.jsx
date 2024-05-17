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