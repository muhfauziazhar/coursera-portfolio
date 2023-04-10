import React from 'react';

const Profile = () => {
  return (
    <div className="h-screen bg-cyan-900 text-white flex justify-center items-center">
      <div className="flex flex-col items-center">
        <img className="mb-3 h-56 w-56 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Zee image" />
        <h5 className="mb-1 text-xl font-medium text-white dark:text-white">Hello, I am Zee</h5>
        <span className="text-lg md:text-2xl text-gray-400 dark:text-gray-400">A Frontend Developer, specialised in React</span>
      </div>
    </div>
  );
};

export default Profile;
