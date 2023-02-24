import React, { useEffect, useState } from 'react'

function Account() {
    const [user, setUser] = useState();
    
    useEffect(() => {
      const user = JSON?.parse(localStorage?.getItem("user"));
      user && setUser(user);
    }, []);

  return (
    <div>
      <div className="grid grid-cols-4 p-4">
        <div className="col-start-1 p-4 flex flex-col border items-center">
                  <img className='w-28 rounded-full bg-gray-300 p-2' src="https://img.icons8.com/ios-glyphs/120/000000/user--v1.png" alt='' />
                  <div className="p-2 text-center text-xl text-slate-800">{ user?.name}</div>
        </div>
        <div className="col-start-2 col-span-3"></div>
      </div>
    </div>
  );
}

export default Account