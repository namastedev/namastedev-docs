import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { PROJECTS, STEPS } from '../../utils/constants';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="min-h-screen dark:bg-web-app-bg-dark text-gray-900">

      <header className="bg-blue-600 text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold">Build Real-World Projects with Step-by-Step Guidance!</h1>
        <p className="mt-4 text-lg">Get hands-on experience by working on industry-level projects with our detailed documentation.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Explore Projects
        </button>
      </header>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Choose Your Difficulty Level</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center relative">
              <div className='relative'>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover rounded-md mb-4 transform transition duration-300 hover:scale-105" 
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white px-3 py-1 text-sm font-semibold rounded-md">
                  {project.level}
                </div>
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {STEPS.map((step, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
