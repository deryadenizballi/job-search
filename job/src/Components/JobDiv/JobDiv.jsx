import React from "react";


//Impoerted Icons =====>
import { BiTimeFive } from 'react-icons/bi'

import whatsap from '../../assets/whatsapp.png'

const Data= [
  {
    id:1,
    image:whatsap,
    title:'Web Developer',
    time:'now',
    location:'Canada',
    desc:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sint!',
    company:'Novac Linus Co.'
  },

  {
    id:2,
    image:whatsap,
    title:'Sofware Eng',
    time:'10Hrs',
    location:'Canada',
    desc:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sint!',
    company:'Liquid Accessments'
  },


  {
    id:3,
    image:whatsap,
    title:'Frontend Dev',
    time:'2Hrs',
    location:'Canada',
    desc:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sint!',
    company:'Novac Linus Co.'
  },
  {
    id:4,
    image:whatsap,
    title:'Lead Dev',
    time:'1Hrs',
    location:'Leeds',
    desc:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sint!',
    company:'Novac Linus Co.'
  },

  {
    id:5,
    image:whatsap,
    title:'Data Scientist',
    time:'6Hrs',
    location:'Canada',
    desc:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sint!',
    company:'Liquid Accessments'
  },


  {
    id:6,
    image:whatsap,
    title:'UI/UX Designer',
    time:'8Hrs',
    location:'Canada',
    desc:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sint!',
    company:'Novac Linus Co.'
  }
]
const JobDiv = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 mt-[3rem]">

        {
          Data.map(({id,image,title,time,location,desc,company}) =>{
            return(
              <div className="group group/item singleJob w-[300px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semobold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1"><BiTimeFive /> {time}</span>
              </span>

              <h6 className="text-[#ccc]"> {location}</h6>

              <p className="text-[13px] text-[#c5c5c5]  pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white" >
               {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="whatsap" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
              </div>

              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white" >
                Apply Now
              </button>
               </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default JobDiv;
