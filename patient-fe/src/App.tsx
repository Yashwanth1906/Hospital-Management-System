import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import RegisterPage from './pages/Signup'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/Home'
import { HospitalDetailsPage } from './pages/HospitalDetails'
import { PatientProfile } from './components/Dashboard'
import { PatientApt } from './components/PatientApt'


function App() {
	return(




	<BrowserRouter>
		<Routes>

			<Route path="/" element={<Landing />}></Route>
			<Route path="/register" element={<RegisterPage />}></Route>		
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/home" element={<HomePage />}></Route>
			<Route path="/dashboard" element={<PatientProfile />}></Route>
			<Route path="/patientappointments" element={<PatientApt />}></Route>

			<Route path="/hospdetails" element={<HospitalDetailsPage />}></Route>
		</Routes>




	</BrowserRouter>

)


}
export default App
