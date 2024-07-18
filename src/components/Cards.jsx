/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
function Cards({users , handleRemoveFormData}) {
  return (
    <div className="w-full h-72 p-4 flex gap-4 items-center justify-center flex-wrap overflow-auto">
    {users.map((item ,index) =>{
      return (
        <div key={index}>
          <Card user={item} index={index} handleRemoveFormData ={handleRemoveFormData}/>
        </div>
      )
    })}
    </div>
  );
}

export default Cards;
