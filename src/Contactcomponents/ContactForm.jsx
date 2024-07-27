import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = ({ onSubmit, isLoading, isSubmitting, setValue, errors }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col place-items-center gap-[1rem]">
      <div className="relative flex flex-col mb-[1%] sm:flex-row gap-[1rem] sm:pb-[1rem] sm:gap-[0rem]">
        <input
          id="ab"
          className="capitalize border-solid border-[2px] border-blue-950 rounded-3xl relative right-[0%] text-blue-900 text-center sm:right-[10%]"
          type="text"
          placeholder="enter contact name"
          {...register("contactname", {
            required: { value: true, message: "contact name required" },
            maxLength: { value: 34, message: "contact name is too long" },
            pattern: {
              value: /^[a-zA-Z][a-zA-Z0-9\s]*$/,
              message: "field must contain certain pattern",
            },
          })}
        />
        <input
          id="bc"
          className="capitalize border-solid border-[2px] border-blue-950 rounded-3xl relative left-[0%] text-blue-900 text-center sm:left-[10%]"
          type="number"
          placeholder="enter phone number"
          {...register("phonenumber", {
            required: { value: true, message: "phone number required" },
            maxLength: { value: 12, message: "phone number does'nt exust" },
            minLength: { value: 10, message: "phone number does'nt exist" },
          })}
        />
        {errors.contactname && (
          <div className="text-center capitalize text-red-600 pt-[2%]">
            {errors.contactname.message}
          </div>
        )}
        {errors.phonenumber && (
          <div className="text-center capitalize text-red-600 pt-[1%]">
            {errors.phonenumber.message}
          </div>
        )}
      </div>
      {!isLoading && (
        <div className="w-[25%] bg-blue-900 rounded-3xl mb-[1%] flex sm:w-[6%]">
          <button
            className="flex rounded-3xl bg-blue-900 text-white w-[100%] mb-[1.1%] mr-[20%]"
            disabled={isLoading || isSubmitting}
            placeholder="save"
          >
            <lord-icon
              src="https://cdn.lordicon.com/slmechys.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{ height: "100%", width: "100%", position: "relative", left: "10%" }}
            ></lord-icon>
            <div className="p-[4%] relative left-[10%]">Save</div>
          </button>
        </div>
      )}
      {(isLoading || isSubmitting) && (
        <div className="flex flex-col">
          <div>Saving</div>
          <lord-icon
            src="https://cdn.lordicon.com/jpgpblwn.json"
            trigger="loop"
            state="loop-line"
          />
        </div>
      )}
    </form>
  );
};

export default ContactForm;
