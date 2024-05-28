import React from 'react';

const App: React.FC = (): JSX.Element => {
  return (
    <div className='bg-grey-500 w-full h-screen bg-gray-300 flex'>
          <div className='grid grid-cols-2 gap-5 m-auto'>
              <div className='bg-gray-200 w-full h-52'></div>
              <div className='bg-gray-600 w-full'></div> 
          </div>
    </div>
  ); 
};

export default App;
