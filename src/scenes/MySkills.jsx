import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import React from "react";

const MySkills = ({color}) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-10">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-tael">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul 
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "font-playfair font-semibold py-10" +
                      (openTab === 1
                        ? "text-white bg-" + color + "-600"
                        : "text-600 ")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                  Skill
                  </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-playfair font-semibold py-10" +
                  (openTab === 2
                    ? "text-white bg-600"
                    : "text-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Experience
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-playfair font-semibold py-10" +
                  (openTab === 3
                    ? "text-white bg-600"
                    : "text-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
                >
                 Education
              </a>
            </li>
              </ul>
              <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">
                <div className="px-10 -py-3 flex-auto">
                  <div className="tab-content tab-space">
                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        CAD
                      </p>
                      <p className="font-playfair mb-3">NX10, Inventor, PTC Creo, Solidworks.</p>
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        CFD and FEM
                      </p>
                      <p className="font-playfair mb-3">Numeca, Comsol, Ansys, Comsol, LS-Dyna.</p>                    
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        Modelling
                      </p>
                      <p className="font-playfair mb-3">Dymola, Matlab and Simulink, Python.</p>                    
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        Programming
                      </p>
                      <p className="font-playfair mb-3">Python, Java, HTML, CSS, JS, React JS, SQL, MonggoDB, Flutter, Docker, Rasa.</p>
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        Operating System
                      </p>
                      <p className="font-playfair mb-3">MacOS, Kali-Linux, Parrot OS, Debian, Rasberry PI, Windows 10</p>                    
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        EDP
                      </p>
                      <p className="font-playfair mb-3">MS-Office, PowerBI, Knime, Tableau</p>                    
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        Others
                      </p>
                      <p className="font-playfair mb-3">Adobe Photoshop, InDesign, Lightroom</p>
                      </div>
                      
                      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                      <p className="font-playfair font-semibold mb-3 text-tael">
                      2023 - current
                      </p>
                      <p className="font-playfair mb-3">Internship as scientist at Bosch</p>
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        2022
                      </p>
                      <p className="font-playfair mb-3">HIWI at LTT RWTH-Aachen</p>                    
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        2021
                      </p>
                      <p className="font-playfair mb-3">Bachelor Thesis at IKDG RWTH-Aachen</p>                    
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        2020
                      </p>
                      <p className="font-playfair mb-3">Project Work at KEmikro RWTH-Aachen</p>
                    </div>
                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <p className="font-playfair font-semibold mb-3 text-tael">
                      2017 - 2023
                      </p>
                      <p className="font-playfair mb-3">Mechanical Engineering at RWTH-Aachen University</p>
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        2016
                      </p>
                      <p className="font-playfair mb-3">Electrical Engineering at TU Kaiserslautern</p>                    
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        2016
                      </p>
                      <p className="font-playfair mb-3">Precolleg at Studienkolleg HS-Kaiserslautern</p>                    
                      <p className="font-playfair font-semibold mb-3 text-tael">
                        2012-2015
                      </p>
                      <p className="font-playfair mb-3">Highschool at SMAN 001 Pekanbaru</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      {/* SKILLS */}
      <div className="w-full md:w-2/3 md:flex-col md:justify-between mt-16 gap-32 px-5">
        {/* EXPERIENCE */}
        <motion.div
          className="mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full">
              <div className="relative h-48">
                <div className="z-10">
                  <p className="font-playfair font-semibold text-5xl">01</p>
                  <p className="font-playfair font-semibold text-3xl mt-3">
                    Simulation & Modelling
                  </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-48 bg-blue absolute right-0 top-0 z-[-1]" />
                </div>
              </div>
              <div >
                <p className="px-2">
                  During my initial internship at Bosch, I successfully applied my skills
                  in Matlab and Python to develop simulations and models that resulted in
                  a product generating over half a million dollars in revenue for the company.
                  
                </p>
              
              </div>
            </div>
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full">
            <div className="relative h-48">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Data Science
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-48 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
            </div>
            <div >
            <p className="px-2">
            While building my company's AI in the LLM domain, I not only gained significant knowledge and
             experience in data science and machine learning but also became proficient in various tools for
              data processing and visualization. My preferred tools for these tasks are Python and Power BI.
          </p>
            </div>
          </div>
        </motion.div>
        
                {/* EXPERIENCE */}
                <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full">
            <div className="relative h-48">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Fullstack Developer
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-48 bg-tael absolute right-0 top-0 z-[-1]" />
          </div>
            </div>
            <div >
            <p className="px-2">
            In addition to my side projects and freelance work in app and web development, I also have the
             responsibility of developing our company's app as the CTO. Therefore, I am always seeking out new 
             technologies and expanding my skillset to ensure that we are utilizing the latest and most effective
              tools in our app development process.
          </p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
      
    </section>

  );
};

//export default MySkills;

export default function TabsRender() {
  return (
    <> <MySkills color="red" />
    </>
  );
}
