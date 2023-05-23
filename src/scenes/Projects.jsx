import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-5">
        These are some projects that I work on in my free time, and there are several other projects for companies that I am unable to publish due to data protection regulations.
        </p>
        <a className="flex justify-center mb-20 text-red" href="http://bbuddy.ai/">Check also bbuddy.ai</a>
      </motion.div>
      
      <div className="App grid grid-cols-1 md:grid-cols-3 space-x-4 space-y-4">



        <div>
          <video width="auto" height="auto" controls>
            <source src={require('../assets/impeller.mp4')} type="video/ogg"/>
          </video>
        </div>
        
        <div>
        <video width="auto" height="auto" controls>
            <source src={require('../assets/turbolader.mp4')} type="video/ogg"/>
          </video>
        </div>

        <div>
          <video width="auto" height="auto" controls>
            <source src={require('../assets/exhaust.mp4')} type="video/ogg"/>
          </video>
        </div>

        <div>
          <video width="auto" height="auto" controls>
            <source src={require('../assets/fem-1.mp4')} type="video/ogg"/>
          </video>
        </div>

        <div>
          <video width="auto" height="auto" controls>
            <source src={require('../assets/fem-2.mp4')} type="video/ogg"/>
          </video>
        </div>
      </div>
    </section>
  );
};

export default Projects;
