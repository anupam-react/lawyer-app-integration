import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import EightScreen from './Screens/EightScreen'
import ElevenScreen from './Screens/ElevenScreen'
import FifthScreen from './Screens/FifthScreen'
import Fourth from './Screens/Fourth'
import HomeScreen from './Screens/HomeScreen'
import Ninth from './Screens/Ninth'
import SecondScreen from './Screens/SecondScreen'
import SeventhScreen from './Screens/SeventhScreen'
import SixthScreen from './Screens/SixthScreen'
import TenScreen from './Screens/TenScreen'
import ThirdScreen from './Screens/ThirdScreen'
import ThirteenScree from './Screens/ThirteenScree'
import TwelveScreen from './Screens/TwelveScreen'
import PrivateRoutes from './utils/PrivateRoutes'
import MyCasesLawyer from './Screens/Lawyer/MyCasesLawyer'
import HearingLawyer from './Screens/Lawyer/HearingLawyer'
import Document from './Screens/Lawyer/Document'
import AddCase from './Screens/Lawyer/AddCase'
import Reminder from './Screens/Lawyer/Reminder'
import Consultation from './Screens/Lawyer/Consultation'

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/ninth' element={<Ninth />} />
        <Route path='/ten' element={<TenScreen />} />
        <Route path='/eleven' element={<ElevenScreen />} />
        <Route path='/twelve' element={<TwelveScreen />} />
        <Route path='/thirteen' element={<ThirteenScree />} />
        <Route path='/mycase' element={<MyCasesLawyer />} />
        <Route path='/hearing' element={<HearingLawyer />} />
        <Route path='/documents' element={<Document />} />
        <Route path='/add-case' element={<AddCase />} />
        <Route path='/reminder' element={<Reminder />} />
        <Route path='/consultations' element={<Consultation />} />
  
        </Route>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/second' element={<SecondScreen /> } />
        <Route path='/third' element={<ThirdScreen />} />
        <Route path='/fourth' element={<Fourth />} />
        <Route path='/fifth' element={<FifthScreen />} />
        <Route path='/sixth' element={<SixthScreen />} />
        <Route path='/seven' element={<SeventhScreen />} />
        <Route path='/eight' element={<EightScreen />} />

       </Routes>
    </BrowserRouter>
   </>
  )
}

export default App