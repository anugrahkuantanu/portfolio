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
        viewport={{ once: true, amount: 0.1 }}
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
        <p className="font-playfair mt-10 mb-5">
        These are some projects that I work on in my free time, and there are several other projects for companies that I am unable to publish due to data protection regulations.
        </p>
        <a className="font-playfair flex justify-center mb-20 text-red" href="http://bbuddy.ai/">Also check bbuddy.ai</a>
      </motion.div>
      
      <div className="App grid grid-cols-1 md:grid-cols-3 mb-12 space-y-4 md:mb-48 justify-items-center allign-center">
        <div className="image-container items-center justify-items-center">
          <img src={require('../assets/homescreen.png')} alt="Website Screenshot" className="image h-4/5 md:h-4/5" />
        </div>
        <div className="image-container items-center justify-items-center">
          <img src={require('../assets/goals.png')} alt="Website Screenshot" className="image h-4/5 md:h-4/5" />
        </div>
        <div className="image-container items-center justify-items-center">
          <img src={require('../assets/progress.png')} alt="Website Screenshot" className="image h-4/5 md:h-4/5"/>
        </div>
      </div>



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
