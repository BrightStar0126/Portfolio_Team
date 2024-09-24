// Librairies
import Link from 'next/link';

// Components
import { projectsData } from '@/constants/constant';
import ProjectItem from './ProjectItem';

// MAIN FUNCTION
export default function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-24'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What We&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projectsData.length > 0 &&
            projectsData.map((project) => (
              <ProjectItem key={project.title} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}
