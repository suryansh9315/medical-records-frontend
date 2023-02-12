import React, { useState } from "react";
import { useStateContext } from '../context/index';
import Loader from "../components/Loader";

const RegisterHospital = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [loading, setLoading] = useState(false);
  const [hospitalAdd, setHospitalAdd] = useState("");
  const [hospitalSpec, setHospitalSpec] = useState("");
  const { store_hospital_details } = useStateContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(hospitalName == '' || hospitalAdd == '' || hospitalSpec == ''){
        alert('Hospitals fields cannot be empty')
        return
    }
    setLoading(true)
    const { data, } = await store_hospital_details([hospitalName, hospitalAdd, hospitalSpec])
    console.log(data)
    setHospitalAdd("");
    setHospitalName("");
    setHospitalSpec("");
    setLoading(false)
  };

  if(loading) return <Loader />

  return (
    <div className="h-full w-screen flex items-center justify-center flex-col mt-10">
      <div className="bg-[#fafafa] flex flex-col items-center justify-center">
        <div className="text-3xl my-4 font-semibold">Register Hospital</div>
        <div className="min-w-[300px] sm:w-[45vw] max-w-[800px]">
          <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-5">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="hospital_name"
              >
                Hospital Name
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="hospital_name"
                type="text"
                onChange={(e) => setHospitalName(e.target.value)}
                value={hospitalName}
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="hospital_address"
              >
                Hospital Address
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="hospital_address"
                type="text"
                onChange={(e) => setHospitalAdd(e.target.value)}
                value={hospitalAdd}
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="hospital_spec"
              >
                Hospital Specialization
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="hospital_spec"
                type="text"
                onChange={(e) => setHospitalSpec(e.target.value)}
                value={hospitalSpec}
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
  );
};

export default RegisterHospital;
