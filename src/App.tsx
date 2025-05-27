import './App.css'
import {Routes, Route} from 'react-router-dom'
import Menu from "./pages/Menu/Menu.tsx"
import Registration from "./pages/Registration/Registration.tsx";
import Notifications from "./pages/Notifications/Notifications.tsx";
import Date from "./pages/Date/Date.tsx"
import ChooseCoworking from "./pages/ChooseCoworking/ChooseCoworking.tsx";
import CurrentBookings from "./pages/CurentBookings/CurrentBookings.tsx";
import  BookingHistory from "./pages/BookingHistory/BookingHistory.tsx";
import Authorisation from "./pages/Authorisation/Authorisation.tsx";

function App() {

  return (
    <>
      <Routes>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/authorisation" element={<Authorisation />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/date" element={<Date />}></Route>
          <Route path="/chooseCoworking" element={<ChooseCoworking />}></Route>
          <Route path="/currentBooking" element={<CurrentBookings />}></Route>
          <Route path="/bookingHistory" element={<BookingHistory />}></Route>
      </Routes>
    </>
  )
}

export default App
