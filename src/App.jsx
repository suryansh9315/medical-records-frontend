
import { Home, RegisterDoctor, RegisterHospital, RegisterPatient, AddPatientRecord, ViewPatientRecords } from './pages'
import { Navbar } from './components'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register-hospital' element={<RegisterHospital />} />
        <Route path='/register-doctor' element={<RegisterDoctor />} />
        <Route path='/register-patient' element={<RegisterPatient />} />
        <Route path='/add-patient-record' element={<AddPatientRecord />} />
        <Route path='/view-patient-records' element={<ViewPatientRecords />} />
      </Routes>
    </div>
  );
}
