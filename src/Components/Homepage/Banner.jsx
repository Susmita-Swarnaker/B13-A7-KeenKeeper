import React from 'react';

const Banner = () => {
    return (
    <div className='bg-[#F8FAFC] py-10'>
            <div className='container mx-auto   '>
            <div className='text-center space-y-6'>
                <h1 className='text-[48px] font-bold'>Friends to keep close in your life</h1>
                <p className='text-[#647488]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
<button className='text-white bg-[#244D3F] btn p-3'> + Add a Friend</button>
            </div>

            <div className=' bg-[#F8FAFC] grid grid-cols-4 gap-4 mt-10 container mx-auto '>
                <div className='border p-5 bg-[#FFFFFF] border-none rounded-2xl flex justify-center items-center' >
                   
                    <div>
                         <h1>10</h1>
                    <p>Total pages</p>
                    </div>
                   
                </div>
                 <div className='border p-5 bg-[#FFFFFF] border-none rounded-2xl flex justify-center items-center' >
                   
                    <div>
                         <h1>10</h1>
                    <p>Total pages</p>
                    </div>
                   
                </div>
                 <div className='border p-5 bg-[#FFFFFF] border-none rounded-2xl flex justify-center items-center' >
                   
                    <div>
                         <h1>10</h1>
                    <p>Total pages</p>
                    </div>
                   
                </div>
                <div className='border p-5 bg-[#FFFFFF] border-none rounded-2xl flex justify-center items-center' >
                   
                    <div>
                         <h1>10</h1>
                    <p>Total pages</p>
                    </div>
                   
                </div>
               
                 
            </div>

             <hr className='mt-4 text-gray-300 ' />

            
        </div>
    </div>
    );
};

export default Banner;