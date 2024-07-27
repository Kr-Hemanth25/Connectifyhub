import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import ContactForm from "../Contactcomponents/ContactForm";
import ContactList from "../Contactcomponents/ContactList";

const Contact = () => {
  const [cnumbers, setCnumbers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const a = useRef('');
  let arr = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-sky-300", "bg-violet-500", 'bg-lime-500'];

  const { setValue, formState: { errors, isSubmitting } } = useForm();

  const edit = async (index) => {
    let data = cnumbers[index];
    setValue("contactname", data.name);
    setValue("phonenumber", data.number);
    a.current.value = '';
    setCnumbers(cnumbers => {
      const newArray = [...cnumbers];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  const del = (index) => {
    setCnumbers(cnumbers => {
      const newArray = [...cnumbers];
      newArray.splice(index, 1);
      return newArray;
    });
    a.current.value = '';
  };

  const search = () => {
    setSearchValue(a.current.value);
  };

  const onSubmit = async (data, e) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    e.target.reset();
    setIsLoading(false);
    setCnumbers([...cnumbers, { name: String(data.contactname).toLowerCase(), number: String(data.phonenumber) }]);
  };

  useEffect(() => {
    const storedNumbers = JSON.parse(localStorage.getItem("numbers"));
    if (storedNumbers) {
      setCnumbers(storedNumbers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("numbers", JSON.stringify(cnumbers));
  }, [cnumbers]);

  return (
    <div className="flex flex-col relative top-[15%] gap-[2rem] align-center pb-[40%] sm:pb-[10%] justify-center sm:gap-[1rem]">
      <ContactForm onSubmit={onSubmit} isLoading={isLoading} isSubmitting={isSubmitting} setValue={setValue} errors={errors} />
      <input ref={a} id="cd" onChange={search} className="rounded-3xl border-solid border-[2px] border-blue-950 text-blue-950 w-[40%] capitalize text-center self-center sm:w-[20%]" type="text" placeholder="search contact" />
      {cnumbers.length !== 0 ? (
        <ContactList cnumbers={cnumbers} edit={edit} del={del} searchValue={searchValue} arr={arr} />
      ) : (
        <div className="text-center text-[200%] text-blue-900 capitalize">your book is empty</div>
      )}
    </div>
  );
};

export default Contact;

