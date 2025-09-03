import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../App.css";

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("contact", data.contact);
    formData.append("email_id", data.email_id);
    formData.append("image", data.image[0]);

    try {
      await axios.post("http://localhost:5000/api/schools", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert("School added successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to add school");
    }
  };

  return (
    <div className="addschool-bg">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="school-form">
          <h2>Add School</h2>

          <input {...register("name", { required: true })} placeholder="School Name" />
          {errors.name && <p className="error">Name is required</p>}

          <input {...register("address", { required: true })} placeholder="Address" />
          <input {...register("city", { required: true })} placeholder="City" />
          <input {...register("state", { required: true })} placeholder="State" />

          <input {...register("contact", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="Contact Number" />
          {errors.contact && <p className="error">Enter valid 10-digit number</p>}

          <input {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
          {errors.email_id && <p className="error">Enter valid email</p>}

          <input type="file" {...register("image", { required: true })} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
