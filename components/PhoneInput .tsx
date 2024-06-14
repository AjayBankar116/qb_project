import React from 'react'

const PhoneInput = ({ value , onChange }: any) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <span className="px-3 text-gray-500">+91</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter your phone number"
        className="flex-1 px-2 py-1 focus:outline-none"
      />
    </div>
  )
}

export default PhoneInput