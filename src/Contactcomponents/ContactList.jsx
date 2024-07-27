import React from "react";

const ContactList = ({ cnumbers, edit, del, searchValue, arr }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-max mx-auto overflow-hidden rounded-[2rem]">
        <thead className="bg-blue-900 text-white py-4">
          <tr className="text-center capitalize">
            <th className="pl-[0] pr-0 sm:px-10 py-2"></th>
            <th className="pl-[0] pr-0 sm:px-10 py-2 ">name</th>
            <th className="pl-[0] pr-0 sm:px-10 py-2">number</th>
            <th className="pl-[0] pr-0 sm:px-10 py-2 w-[0%]">edit / delete</th>
          </tr>
        </thead>
        <tbody className="bg-blue-100">
          {cnumbers
            .filter(i => i.name.includes(searchValue.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((i, index) => {
              const pick = arr[Math.floor(Math.random() * arr.length)];
              return (
                <tr key={index} className="text-center h-[10vh] sm:h-[auto] capitalize">
                  <td className="px-4 sm:px-10 py-2">
                    <div className={`${pick} w-[2pc] h-[2pc] rounded-[4rem] capitalize p-[0.2rem] text-white `}>
                      {i.name[0]}
                    </div>
                  </td>
                  <td className="px-2 sm:px-6 py-2 text-blue-950 text-[75%] sm:text-[100%]">{i.name}</td>
                  <td className="px-2 sm:px-6 py-2 text-blue-950 text-[75%] sm:text-[100%]">
                    <a href={"tel:" + i.number}>{i.number}</a>
                  </td>
                  <td className="pl-[1rem] pr-0 sm:px-10 flex items-center py-2 relative top-[1rem] sm:top-0">
                    <button onClick={() => edit(index)} className="w-8 h-8 sm:w-10 sm:h-10">
                      <lord-icon
                        src="https://cdn.lordicon.com/wuvorxbv.json"
                        trigger="hover"
                        colors="primary:#121331,secondary:#110a5c"
                      ></lord-icon>
                    </button>
                    <button onClick={() => del(index)} className="w-8 h-8 sm:w-10 sm:h-10">
                      <lord-icon
                        src="https://cdn.lordicon.com/drxwpfop.json"
                        trigger="morph"
                        state="morph-trash-in"
                        colors="primary:#121331,secondary:#110a5c"
                      ></lord-icon>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
