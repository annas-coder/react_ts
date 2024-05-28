import React from 'react';

export const App: React.FC = (): JSX.Element => {
  return (
    <div className='bg-grey-500 w-full h-screen bg-gray-100 flex'>
      <Header/>          

    </div>
  ); 
};

export const Header : React.Fc = () :JSX.Element =>{
  return(
      <div className='h-1/2 w-6/12 gap-5 m-auto bg-gray-600'>
              <div className='flex m-8 justify-between'>
               <h3 className='text-2xl'>TodoList</h3>
                <span className='w-80 flex gap-4'>
                  <input type="text" name="" id="" className='w-full rounded-sm outline-none px-2' />
                  <input type="submit" value="Submit" className='btn border-solid border-2 border-sky-500 bg-white px-3 py-1 rounded-lg' />
                </span>
              </div>
      </div>
  )
}
