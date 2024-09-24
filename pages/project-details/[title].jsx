// Librairies
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

// Components
import { useProjectContext } from "@/context/projectContext";

// MAIN FUNCTION
export default function ProjectDetails() {
  // STATES
  // State 1 : projectData
  const { projectData } = useProjectContext();

  if (!projectData) {
    // Gérer le cas où il n'y a pas de données de projet disponibles
    return null;
  }

  // VARIABLES
  // Variable 1 - ProjectData
  const {
    title,
    description,
    backgroundImg,
    resume,
    language,
    frontend,
    style,
    backend,
    blockchain,
    projectUrl,
  } = projectData;
  // Variable 3 : check URL address valid
  const isValidProjectUrl = typeof projectUrl === "string";

  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />

        <Image
          className='absolute z-1 object-cover'
          fill={true}
          priority={true}
          src={backgroundImg}
          alt='Blockchain & Star - Your web3 trusted partner'
        />

        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{title}</h2>
          <h3>{resume}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            Project
          </p>
          <h2>Overview</h2>
          <p>{description}</p>

          {isValidProjectUrl && (
            <Link href={projectUrl} target='_blank' rel='noreferrer'>
              <button className='px-8 py-2 mt-4'>Demo</button>
            </Link>
          )}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                {language}
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                {frontend}
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                {backend}
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                {style}
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Blockchain : {blockchain}
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
}
