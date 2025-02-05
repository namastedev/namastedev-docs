import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { HERO_SECTION_IMAGE, PROJECTS, STEPS } from '../../utils/constants';
import { ChevronsDown, CircleCheckBig } from 'lucide-react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="min-h-screen dark:bg-web-app-bg-dark text-gray-900">

      <section className="mx-auto flex justify-center gap-20 items-center dark:text-white text-center py-10 px-4 w-[98%] lg:w-[90%] lg:mt-14 border border-brand-border-color rounded-lg">
        <div>
          <img src={HERO_SECTION_IMAGE} alt="hero-section-image" className='w-[28rem]' />
        </div>
        <div className='flex flex-col gap-3'>
          <div className='text-start text-2xl lg:text-4xl font-inter font-bold space-y-2 lg:space-y-3 dark:text-white'>
            <p>Build Real World </p>
            <p>Projects With </p>
            <p>Step-By-Step Guidance!</p>
          </div>

          <div className='mt-6 space-y-2 text-opacity-50 dark:text-white'>
              <div className='flex gap-2 items-center'><div><CircleCheckBig size={15} /></div><div>Explore hands-on projects with clear, step-by-step instructions.</div></div>
              <div className='flex gap-2 items-center'><div><CircleCheckBig size={15} /></div><div>Learn by building and enhance your development skills.</div></div>
              <div className='flex gap-2 items-center'><div><CircleCheckBig size={15} /></div><div>Start your journey today and bring your ideas to life!</div></div>
          </div>

          <a href="/docs/category/beginner-projects" className='mt-6 bg-logo-orange hover:bg-logo-orange-clicked px-6 py-3 w-1/3 text-xl text-white rounded-md'>
            Get Started
            </a>
        </div>
      </section>

      <ChevronsDown size={40} className='w-full mx-auto mt-6 dark:text-white' />

      <div className="py-8 px-6 max-w-6xl mx-auto dark:text-white">
        <h2 className="text-3xl font-semibold text-center text-brand-heading mb-16">Choose Your Difficulty Level</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <a href={project.link} key={index} className="bg-brand-light-background dark:bg-brand-card-bg rounded-lg p-6 text-center relative">
              <div className='relative'>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover rounded-md mb-4 transform transition duration-300 hover:scale-105" 
                />
                <div className="absolute top-2 left-2 text-white px-3 py-1 text-xl font-semibold rounded-md">
                  {project.level}
                </div>
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-opacity-50 font-normal mt-2">{project.description}</p>
            </a>
          ))}
        </div>
      </div>

      <ChevronsDown size={40} className='w-full mx-auto mt-8 dark:text-white' />

      <div className="py-12 px-6 text-center dark:text-white">
        <h2 className="text-3xl font-semibold mb-16 text-brand-heading">How It Works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {STEPS.map((step, index) => (
            <div key={index} className="bg-brand-light-background dark:bg-brand-card-bg p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-blue dark:text-brand-sky-blue">{step.title}</h3>
              <p className=" mt-2 font-normal">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-[#303846] text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} NamasteDev. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
