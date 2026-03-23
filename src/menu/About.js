import React from 'react';

function About() {
  return (
    <section
  id="about"
  className="bg-gradient-to-b from-pink-50 to-pink-100 text-gray-900 body-font py-24 px-6 pt-32"
>

      <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 transition-opacity duration-1000 opacity-100">
          About Me
        </h1>

        <p className="leading-relaxed text-lg transition-opacity duration-1000 delay-200 opacity-100">
          I’m Harshika, a final-year Diploma student in Computer Science & Engineering at Karnataka Polytechnic (KPT), Mangalore.
          I’m passionate about web development and enjoy building modern, responsive websites using React and Tailwind CSS.
        </p>

        <p className="leading-relaxed text-lg transition-opacity duration-1000 delay-400 opacity-100">
          Throughout my diploma, I’ve built a solid foundation in programming, databases, data structures, computer networks, and software engineering.
          I’ve gained practical experience through mini-projects, lab work, and collaborative assignments, which have helped me turn ideas into real solutions.
          Currently, I’m doing my internship at Winman Software, where I’m working in software testing and gaining hands-on experience in quality assurance and real-world development workflows.
        </p>

        <p className="leading-relaxed text-lg transition-opacity duration-1000 delay-600 opacity-100">
          I enjoy coding, exploring new technologies, and actively participating in cultural and technical events at college.
          My goal is to design and develop innovative software solutions that can make a positive impact.
        </p>
      </div>
    </section>
  );
}

export default About;
