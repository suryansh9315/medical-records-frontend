import React, { useEffect } from 'react'
import { useStateContext } from '../context'

const ViewPatientRecords = () => {
  const { hospitalContract } = useStateContext()
  useEffect(() => {
    const func = async () => {
      const id = 2
      const myValue = await hospitalContract.call("retrieve_hospital_details",id);
      console.log(myValue)
    }
    func()
  }, [])
  
  return (
    <div>ViewPatientRecords</div>
  )
}

export default ViewPatientRecords