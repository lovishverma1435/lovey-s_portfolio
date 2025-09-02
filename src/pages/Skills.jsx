import React from 'react';
import { useTheme } from '../Theme/ThemeProvider';
import Html from "/public/html.svg"
import Css from "/public/css.svg"
import Tailwind from "/public/tailwind.svg"
import Javascript from "/public/javascript.svg"
import Reactjs from "/public/reactjs.svg"
import Nodejs from "/public/nodejs.svg"
import mysql from "/public/mysql.svg"
import express from "/public/express.svg"
import github from "/public/github.svg"
import vscode from "/public/vscode.svg"
const Skills = () => {
  const { theme } = useTheme();

  const skills = [
    { name: 'HTML5', icon: <img src={Html} alt="HTML" className="w-8 h-8" />, level: 'Expert' },
    { name: 'CSS3', icon: <img src={Css} alt="CSS" className="w-8 h-8" />, level: 'Expert' },
    { name: 'Tailwind', icon: <img src={Tailwind} alt="Tailwind" className="w-8 h-8" />, level: 'Advanced' },
    { name: 'JavaScript', icon: <img src={Javascript} alt="JavaScript" className="w-8 h-8" />, level: 'Advanced' },
    { name: 'ReactJS', icon: <img src={Reactjs} alt="React" className="w-8 h-8" />, level: 'Advanced' },
    { name: 'NodeJS', icon: <img src={Nodejs} alt="NodeJS" className="w-8 h-8" />, level: 'Intermediate' },
    { name: 'Mysql', icon: <img src={mysql} alt="Mysql" className="w-8 h-8" />, level: 'Advanced' },
    { name: 'Express', icon: <img src={express} alt="Express" className="w-8 h-8" />, level: 'Advanced' },
    { name: 'Github', icon: <img src={github} alt="Github" className="w-8 h-8" />, level: 'Advanced' },
    { name: 'Vscode', icon: <img src={vscode} alt="Vscode" className="w-8 h-8" />, level: 'Advanced' },
  ];


  return (
    <section
      className={`w-full font-inter py-20 ${theme ? "text-black bg-portfolio-light" : "text-gray-300 bg-portfolio-dark"
        }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-orange-600 via-orange-500 to-amber-400">
            My Skills
          </h2>
          <p className="mt-4 text-lg sm:text-xl">
            Tools & technologies I use to build amazing web experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skill  gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105
              ${theme
                  ? "bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-[0_0_20px_rgba(236,86,49,0.4)]"
                  : "bg-gradient-to-br from-[#1a1a1a]/80 to-[#0d0714]/80 border border-gray-800 hover:shadow-[0_0_25px_rgba(236,86,49,0.8)]"
                }`}
            >

              <div className="p-4 bg-white/10 backdrop-blur-md rounded-full">
                {skill.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.level}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-2 rounded-full bg-[#ec5631]"
                  style={{
                    width:
                      skill.level === "Expert"
                        ? "100%"
                        : skill.level === "Advanced"
                          ? "80%"
                          : "60%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
