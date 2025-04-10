// File: components/ContactForm.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // In a real implementation, you would send this data to your backend
      console.log("Form submitted:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(
        "There was a problem submitting your form. Please try again."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {submitSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p>
            Thank you for your message! We will get back to you as soon as
            possible.
          </p>
          <button
            type="button"
            className="mt-2 text-green-700 underline"
            onClick={() => setSubmitSuccess(false)}
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          {submitError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>{submitError}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-2 border rounded-lg ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 border rounded-lg ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                className={`w-full px-4 py-2 border rounded-lg ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9()-\s]+$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="block text-gray-700 mb-1">
                Service Needed
              </label>
              <select
                id="service"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                {...register("service")}
              >
                <option value="">Select a service</option>
                <option value="residential">Residential Electrical</option>
                <option value="commercial">Commercial Electrical</option>
                <option value="emergency">Emergency Service</option>
                <option value="installation">New Installation</option>
                <option value="repair">Repair/Troubleshooting</option>
                <option value="inspection">Electrical Inspection</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </>
      )}
    </form>
  );
}
