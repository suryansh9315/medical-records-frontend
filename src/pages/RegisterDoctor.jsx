import React,{ useState } from 'react'
import { useStateContext } from '../context/index'

const RegisterDoctor = () => {
  const [doctorName, setDoctorName] = useState("");
  const [loading, setLoading] = useState(false);
  const [doctorNum, setDoctorNum] = useState("");
  const [doctorUID, setDoctorUID] = useState("");
  const { store_hospital_details } = useStateContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(doctorName == '' || doctorNum == '' || doctorUID == ''){
        alert('Doctors fields cannot be empty')
        return
    }
    setLoading(true)
    // await store_hospital_details([hospitalName, hospitalAdd, hospitalSpec])
    setDoctorUID("");
    setDoctorName("");
    setDoctorNum("");
    setLoading(false)
  };
  return (
    <div className="h-full w-screen flex items-center justify-center flex-col mt-5">
      <div className="bg-[#fafafa] flex flex-col items-center justify-center">
        <div className="text-3xl my-4 font-semibold">Register Doctor</div>
        <div className="min-w-[300px] sm:w-[45vw]">
          <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-5">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="doctor_name"
              >
                Doctor Name
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="doctor_name"
                type="text"
                onChange={(e) => setDoctorName(e.target.value)}
                value={doctorName}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="doctor_ph"
              >
                Doctor Phone Number
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="doctor_ph"
                type="text"
                onChange={(e) => setDoctorNum(e.target.value)}
                value={doctorNum}
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="doctor_uid"
              >
                Doctor UID
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="doctor_uid"
                type="text"
                onChange={(e) => setDoctorUID(e.target.value)}
                value={doctorUID}
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

export default RegisterDoctor