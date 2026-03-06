"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

type FormState = {
  name: string;
  surname: string;
  email: string;
  date: string;
  time: string;
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    surname: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Appointment Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Randevu Al</h1>

      <Input
        name="name"
        label="Name"
        type="text"
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        name="surname"
        label="Surname"
        type="text"
        placeholder="Enter Your Surname"
        value={formData.surname}
        onChange={handleChange}
      />

      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="Enter Your Email"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        name="date"
        label="Date"
        type="date"
        value={formData.date}
        onChange={handleChange}
      />

      <Input
        name="time"
        label="Time"
        type="time"
        value={formData.time}
        onChange={handleChange}
      />

      <Button type="submit">Save</Button>
    </form>
  );
};

export default AppointmentForm;
