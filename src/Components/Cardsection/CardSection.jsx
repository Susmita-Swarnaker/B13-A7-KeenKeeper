import React from 'react';

const CardSection = ({friend}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm p-4">
  <figure>
    <img
      src={friend.picture} className="rounded-full" />
  </figure>
  <div className="card-body text-center">
    
     <h2 className="text-[20px] font-semibold">{friend.name} </h2>
     <p className="text-[#647488] text-center">62d ago</p>
    <div className="flex gap-3 justify-center">
       {
       friend.tags.map((tag,ind)=>(
        <span className="bg-green-100 p-2 rounded-full"  key={ind}>{tag}</span>

       )
       )
     }
     
    </div>




 <p
  className={
    ` w-fit px-3 py-1 rounded-full mx-auto rotate text-sm font-medium   ${friend.status === "Overdue"
      ? "bg-red-200 text-red-700 text-center"
      : friend.status === "Almost due"
      ? "bg-yellow-200 text-yellow-700"
      : "bg-green-200 text-green-700"}`
  }
>
  {friend.status}
</p> 



     
    
  
 
  </div>
</div>
        </div>
    );
};

export default CardSection;