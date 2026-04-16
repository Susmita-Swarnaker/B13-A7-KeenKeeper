

import { useLoaderData } from "react-router";
import CardSection from "../Cardsection/CardSection";



const AllCards = () => {


    const friends = useLoaderData();
    console.log(friends);
    return (
       <div className=" bg-[#F8FAFC]">
         <div className="container mx-auto">
            <h2 className="text-[24px] font-semibold mb-3">Your Friends</h2>
       
           <div className=" grid grid-cols-4 gap-5 shadow-2xl mb-10">
             {
                friends.map((friend,ind) => {
                    return <CardSection key={ind} friend={friend}></CardSection>
                })
            }
           </div>

        </div>
       </div>
    );
};

export default AllCards;