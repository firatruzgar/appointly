"use client";
import Button from "../ui/Button";
import Input from "../ui/Input";

const AppointmentForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <form onSubmit={handleSubmit}>
      <h1>Randevu Al</h1>
      <Input label="Name" type="text" placeholder="Enter Your Name" />
      <Input label="Surname" type="text" placeholder="Enter Your Surname" />
      <Input label="Email" type="email" placeholder="Enter Your Email" />
      <Input label="Date" type="date" />
      <Input label="Time" type="time" />
      <Button type="submit">Save</Button>
    </form>
  );
};

export default AppointmentForm;
