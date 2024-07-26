import React, { useLayoutEffect } from 'react';
import project1 from '../Images/projects/p1.jpeg'; // Replace with actual image paths
import project2 from '../Images/projects/p2.jpeg';
import project3 from '../Images/projects/p3.jpeg';
import project4 from '../Images/projects/p4.jpeg'; // Replace with actual image paths
import project5 from '../Images/projects/p5.jpeg';
import project6 from '../Images/projects/p6.jpeg';
import Navbar from '../Navsec/navbar';
import Footer from '../Navsec/footer';

const projects = [
  {
    id: 3,
    image: project3,
    title: 'Project 1',
    description: 'A brief description of project 1.',
  },
  {
    id: 5,
    image: project5,
    title: 'Project 2',
    description: 'A brief description of project 2.',
  },
  {
    id: 4,
    image: project4,
    title: 'Project 3',
    description: 'A brief description of project 3.',
  },

  

  {
    id: 1,
    image: project1,
    title: 'Project 5',
    description: 'A brief description of project 3.',
  },

  {
    id: 2,
    image: project2,
    title: 'Project 6',
    description: 'A brief description of project 3.',
  },

  // {
  //   id: 4,
  //   image: project4,
  //   title: 'Project 4',
  //   description: 'A brief description of project 3.',
  // },
];

const Projects = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);

  return (
    <div>
    <Navbar/>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#060A4C]" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>Our Completed Projects</h1>
          <p className="mt-4 text-lg text-gray-700" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>
            Here are some of the projects we have successfully completed.
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {projects?.map(project => (
            <div key={project.id} className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
              <div className="relative">
                <img src={project?.image} alt={project?.title} className="object-cover w-full h-90 rounded-t" />
                <div className="p-5 bg-white rounded-b">
                  <h5 className="mb-2 text-xl font-semibold text-[#29456A]" style={{ fontFamily: 'Poppins', fontWeight: '600' }}>{project.title}</h5>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Projects;
