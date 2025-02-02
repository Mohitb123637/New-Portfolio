import React from 'react';
import CardCover from './CardCover';

const Skill = ({ skill: { style, name, icon } }) => {
  return (
    <div
      className={`shadow-md ${style?.shadow} rounded-lg text-white hover:scale-105 duration-500 m-2 h-24 w-24`}
    >
      <div
        className="rounded-md w-full bg-black bg-opacity-40 
             group relative flex flex-col justify-between duration-300 py-2 h-24 border-black"
      >
        <CardCover style={{ display: 'hidden group-hover:block', ...style }} />
        <div className="flex justify-center w-fit mx-auto z-20">{icon}</div>
        <div className="text-center text-white z-20">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
