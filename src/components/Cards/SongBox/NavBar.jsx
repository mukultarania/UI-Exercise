import React from 'react'

function NavBar({data}) {
  let count = 0;
  data.forEach(item => {
    if (item.added) count++;
  });
  
  return (
    <div className='w-full flex items-center justify-between px-3 py-3'>
      <h3>Orange</h3>
      <div className='flex p-2 px-4 gap-2 rounded-md bg-orange-400 text-sm text-white'>
        <h3>Favourites</h3>
        <h4>{count}</h4>
      </div>
    </div>
  )
}

export default NavBar
