import React, { useState } from 'react'
import { useStateContext } from '../context/index'

const RegisterPatient = () => {
  const [patientName, setPatientName] = useState("");
  const [loading, setLoading] = useState(false);
  const [patientAge, setPatientAge] = useState(null);
  const [patientGender, setPatientGender] = useState("");
  const [patientHeight, setPatientHeight] = useState("");
  const [patientWeight, setPatientWeight] = useState(null);
  const [patientPhoneNum, setPatientPhoneNum] = useState("");
  const [patientEmailId, setPatientEmailId] = useState("");
  const [date, setDate] = useState(null);
  const [doctorId, setDoctorId] = useState(null);
  const [hospitalId, setHospitalId] = useState(null);
  const { store_hospital_details } = useStateContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(doctorName == '' || doctorNum == '' || doctorUID == ''){
        alert('Patients fields cannot be empty')
        return
    }
    setLoading(true)
    // await store_hospital_details([hospitalName, hospitalAdd, hospitalSpec])
    setPatientName("");
    setPatientAge(null);
    setPatientEmailId("");
    setDate(null)
    setPatientGender("")
    setPatientHeight('')
    setPatientWeight(null)
    setPatientPhoneNum("")
    setDoctorId(null)
    setHospitalId(null)
    setLoading(false)
  };
  return (
    <div className="h-full w-screen flex items-center justify-center flex-col mt-5">
      <div className="bg-[#fafafa] flex flex-col items-center justify-center">
        <div className="text-3xl my-4 font-semibold">Register Patient</div>
        <div className="min-w-[300px] sm:w-[45vw]">
          <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-5">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="patient_name"
              >
                Patient Name
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patient_name"
                type="text"
                onChange={(e) => setPatientName(e.target.value)}
                value={patientName}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="patient_age"
              >
                Patient Age
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patient_age"
                type="number"
                onChange={(e) => setPatientAge(e.target.value)}
                value={patientAge}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="patient_gender"
              >
                Patient Gender
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="patient_gender"
                type="text"
                onChange={(e) => setPatientGender(e.target.value)}
                value={patientGender}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="patient_height"
              >
                Patient Height
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="patient_height"
                type="text"
                onChange={(e) => setPatientHeight(e.target.value)}
                value={patientHeight}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="patient_weight"
              >
                Patient Weight
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="patient_weight"
                type="number"
                onChange={(e) => setPatientWeight(e.target.value)}
                value={patientWeight}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="patient_phn_no"
              >
                Patient Phone Number
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="patient_phn_no"
                type="text"
                onChange={(e) => setPatientPhoneNum(e.target.value)}
                value={patientPhoneNum}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="patient_email"
              >
                Patient Email
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="patient_email"
                type="text"
                onChange={(e) => setPatientEmailId(e.target.value)}
                value={patientEmailId}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="patient_date"
              >
                Date
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="patient_date"
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="doctor_id"
              >
                Doctor Id
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="doctor_id"
                type="number"
                onChange={(e) => setDoctorId(e.target.value)}
                value={doctorId}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="hospital_id"
              >
                Hospital Id
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="hospital_id"
                type="number"
                onChange={(e) => setHospitalId(e.target.value)}
                value={hospitalId}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className={`${loading ? 'pointer-events-none' : 'pointer-events-auto'} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                type="button"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPatient