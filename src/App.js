import React from 'react';
import './App.css';
import { useToastMessage } from './components/notifications/ToastProvider';
import WarningImage  from "./assets/images/custom_warn.png"
import loginNotice from './components/loginNotice';

function App() {
  const { addToast } = useToastMessage();

  const handleClick = () => {
    alert('Click event function.')
  }

  return (
    <div className='p-10 flex flex-col justify-center items-center h-screen gap-8 max-w-1/3 m-auto'>
      <div className='w-full'>
        <p className='mb-2'>Dismissable success button type with no display duration</p>
        <button 
          onClick={() => addToast({ 
            content: "Registration successful!",
            type: "success",
            dismissable: true,
            duration:0, 
          })}
          className='bg-green-500 p-3 rounded-lg text-white font-bold w-full'
        >
          {'Register now'}
        </button>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Error button type with custom icon and custom type of content</p>
        <button 
          onClick={() => addToast({ 
            content: loginNotice,
            type: "error",
            icon: WarningImage,
          })}
          className='bg-red-800 p-3 rounded-lg text-white font-bold w-full'
        >
          {'Login now'}
        </button>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Warning button type with custom color.</p>
        <button 
          onClick={() => addToast({ 
            content: "Please fill all required fields.",
            type: "warning",
            color: {background: '#ffff00', text: '#000', border:'#7F00FF' }
          })}
          className='bg-orange-400 p-3 rounded-lg text-white font-bold w-full'
        >
          {'Warn me'}
        </button>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Info button type with custom 1 second duration and click event.</p>
        <button 
          onClick={() => addToast({ 
            content: "Click here to know more!",
            type: "info",
            dismissable: false,
            duration: 10000, 
            action: handleClick 
          })}
          className='bg-blue-400 p-3 rounded-lg text-white font-bold w-full'
        >
          {'Know more'}
        </button>
      </div>
    </div>
  );
}

export default App;
