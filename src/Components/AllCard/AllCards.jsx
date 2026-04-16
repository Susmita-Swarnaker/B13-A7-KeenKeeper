

import { useLoaderData } from "react-router";



const AllCards = () => {


    const friends = useLoaderData();
    console.log(friends);
    return (
        <div>
            <h2>Your Friends</h2>
            <p>Total friends :{friends.length}</p>
            {
                friends.map(friend => {
                    return <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={friend.picture} />
  </figure>
  <div className="card-body">
    
     <h2 className="text-[20px] font-semibold">{friend.name} </h2>
     <p className="text-[#647488]">62d ago</p>
    <div className="flex gap-3 ">
       {
       friend.tags.map((tag,ind)=>(
        <span className="bg-green-100 p-2 rounded-full"  key={ind}>{tag}</span>

       )
       )
     }
     
    </div>

{/* <p
  className={
    friend.status === "overdue"
      ? "bg-red-400 text-white inline-block px-2 py-1 rounded"
      : friend.status === "on-track"
      ? "bg-green-400 text-white inline-block px-2 py-1 rounded"
      : "bg-orange-400 text-white inline-block px-2 py-1 rounded"
  }
>
  {friend.status}
</p> */}


 <p
  className={
    friend.status === "overdue"
      ? "bg-red-200 text-red-700"
      : friend.status === "almost due"
      ? "bg-yellow-200 text-yellow-700"
      : "bg-green-200 text-green-700"
  }
>
  {friend.status}
</p> 



     
    
  
 
  </div>
</div>
                })
            }

        </div>
    );
};

export default AllCards;