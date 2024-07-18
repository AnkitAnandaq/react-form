// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
function Form({ handleSubmitFormData }) {
  const { register, handleSubmit, reset } = useForm();
  const handleSubmitForm = (data) => {
    handleSubmitFormData(data);
    reset(); // Clear form fields after submission
  };
  return (
    <div className="bg-zinc-500 flex justify-center items-center gap-10 p-4 mt-5">
      <form
        className="flex gap-10"
        action=""
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <input
          {...register("name")}
          className="px-2 py-1 rounded-lg outline-none font-bold font-sans"
          type="text"
          placeholder="Enter your name"
        />
        <input
          {...register("email")}
          className="px-2 py-1 rounded-lg outline-none font-bold font-sans"
          type="text"
          placeholder="Enter your email"
        />
        <input
          {...register("image")}
          className="px-2 py-1 rounded-lg outline-none font-bold font-sans"
          type="text"
          placeholder="Image Url"
        />
        <input
          className="px-3 tracking-widest py-1 rounded-lg bg-sky-700 text-white"
          type="submit"
          placeholder="Enter your name"
        />
      </form>
    </div>
  );
}

export default Form;
