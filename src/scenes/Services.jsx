import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
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
            MY <span className="text-blue">SERVICES</span>
          </p>
        <LineGradient width="mx-auto w-3/5" />
        <p className="mt-10">
          Just write me an E-Mail for the price.
        </p>
      </motion.div>

      {/* EXPERIENCES */}
      <div className="grid grid-col-1 md:grid-cols-3 md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center font-playfair font bold text-2xl mb-3">
            UI/UX
          </p>
          <p className="text-center font-playfair">
          I can provide you with a website featuring a cool design and assist you in deploying it as a static website. This is particularly useful for creating a portfolio or promoting your business online.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center font-playfair font-bold text-2xl mb-3">
            Thermodynamic Private
          </p>
          <p className="text-center font-playfair">
          Based on my knowledge gained from studying at RWTH Aachen and my experience as a Hiwi at LTT, I believe I am qualified to offer private lessons in thermodynamics.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center font-bold font-playfair text-2xl mb-3">
            Simulation
          </p>
          <p className="text-center font-playfair">
          As a company, you have the option to engage my services as a freelancer for high-quality modeling and simulation of complex systems. With my extensive work experience and expertise in mechanical engineering, I am highly qualified for this role.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
