import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../../types";
import Parallax from '../Parallax/index'

import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

   /* Using ProjectComp instead of this card, I wanted to work on Parallax and then liked it better */

  return (
    
    <div className="w-full h-auto col-span-12 p-2 tracking-wider rounded-xl bg-bg-gradient-to-b from-gray-700/90 to-gray-600 bg-gradient-to-r border-gray-400/50 shadowguy lg:col-span-5 ">
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="240"       
      />  
       <p className="my-2 text-lg text-center text-slate-100 font-sfprodisplayregular">{name}</p>
      
      {showDetail && (
        <div className="absolute left-0 z-10 grid w-full h-auto p-2 text-black border rounded-lg border-slate-100/10 backdrop-blur bg-slate-200/90 md:grid-cols-2 gap-x-12 ">
          <div>        
            <div className="flex justify-center my-4 space-x-3" >                          
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg "
              >
                <AiFillProject /> <span>Demo</span>
              </a>
            </div>
          </div>
        <div>
          <h3 className="p-2 text-center text-gray-700 indent-1 font-sfprodisplaylight md:text-lg">{description}</h3>       
          </div>
          <button
            onClick={() => setShowDetail(false)}
            className="absolute text-red-500 rounded-full top-1 right-1 focus:outline-none "
          >
            <MdClose size={16} />
          </button>
        </div>
    )}

     
    </div>
 
  );
};

export default ProjectCard;