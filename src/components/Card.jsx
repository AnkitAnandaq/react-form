// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Card({ user ,handleRemoveFormData ,index}) {
  return (
    <>
      <div  className="w-52 bg-zinc-200 rounded-md flex flex-col items-center p-4">
        <div className="w-14 h-14 bg-blue-800 rounded-full overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            src={user.image}
            alt=""
          />
        </div>
        <div className="mt-2">
          <h1 className="text-xl text-center font-mono font-bold">
            {user.name}
          </h1>
          <p className="email opacity-45 text-sm font-bold">
           {user.email}
          </p>
        </div>
        <div className="text-wrap tracking-tighter text-xs font-bold mt-2 text-center">
          Lorem ipsum dolor sit ametureisti consectetur adipisicing elitVolupt
          atem vero eius excepturi libero dolorem eos?
        </div>
        <button onClick={()=>handleRemoveFormData(index)} className="bg-red-600 text-white font-semibold px-2 py-1 rounded-md mt-2">
          Remove It
        </button>
      </div>
    </>
  );
}

export default Card;
