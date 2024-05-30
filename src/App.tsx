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
      <div className='min-1/2 lg:w-6/12 sm:w-full gap-5 m-auto bg-card'>
              <div className='lg:flex m-8 justify-between'>
               <h3 className='text-2xl'>TodoList</h3>
                <span className='lg:w-80 sm:w-full flex gap-4'>
                  <input type="text" name="" id="" className='w-full rounded-sm outline-none px-2' />
                  <input type="submit" value="Submit" className='btn btn-blue'/>
                </span>
              </div>

      
      <div className="container">
              <ul className='mx-10'>
                 <li className='my-3 p-3 bg-white rounded-sm flex '>
                   testing
                    <span className='ms-auto'>
                      <button className='px-4 py-1 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 '>Delete</button>
                    </span>
                 </li>
              </ul>
      </div>
     
      </div>
  )
}
