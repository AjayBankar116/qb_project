"use client"
import PhoneInput from "@/components/PhoneInput ";
import { useState } from "react";

export default function InputField() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event: any) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <div>
      <PhoneInput value={phoneNumber} onChange={handlePhoneNumberChange} />
    </div>
  );
}
