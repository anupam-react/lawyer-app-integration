import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
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
import LawyerProfile from './Screens/Lawyer/LawyerProfile'
import Appointment from './Screens/Appointment'
import Notification from './Screens/Notification'
import NotificationUser from './Screens/User/NotificationUser'
import CategoryDetails from './Screens/CategoryDetails'
import ServiceDetails from './Screens/ServiceDetails'
import UserProfile from './Screens/User/UserProfile'

import ServiceCustomer from './Screens/ServiceCustomer'
import LawyerCity from './Component/LawyerCity'
import Order from './Screens/EightScreen'

import VideoCall from './VideoCall'
import Messages from './Screens/Messages'


const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/ninth' element={<Ninth />} />
        <Route path='/ten' element={<TenScreen />} />
        <Route path='/book-appointment' element={<Appointment />} />
        <Route path='/eleven' element={<ElevenScreen />} />
        <Route path='/twelve' element={<TwelveScreen />} />
        <Route path='/thirteen' element={<ThirteenScree />} />
        <Route path='/mycase' element={<MyCasesLawyer />} />
        <Route path='/hearing' element={<HearingLawyer />} />
        <Route path='/documents' element={<Document />} />
        <Route path='/add-case' element={<AddCase />} />
        <Route path='/reminder' element={<Reminder />} />
        <Route path='/consultations' element={<Consultation />} />
        <Route path='/laywer-profile' element={<LawyerProfile />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/payment/:id' element={<Order />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/notification-user' element={<NotificationUser />} />
        <Route path='/service/:id' element={<ServiceCustomer />} />
  
        </Route>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/videocall/:id' element={<VideoCall />} />
        <Route path='/chat' element={<Messages />} />
        <Route path='/second' element={<SecondScreen /> } />
        <Route path='/third' element={<ThirdScreen />} />
        <Route path='/fourth' element={<Fourth />} />
        <Route path='/fifth' element={<FifthScreen />} />
        <Route path='/sixth' element={<SixthScreen />} />
        <Route path='/seven' element={<SeventhScreen />} />
        {/* <Route path='/eight' element={<EightScreen />} /> */}
        <Route path='/category-info/:id' element={<CategoryDetails />} />
        <Route path='/service-info/:id' element={<ServiceDetails />} />
        <Route path='/city/:id' element={<LawyerCity />} />


       </Routes>
    </BrowserRouter>
   </>
  )
}

export default App