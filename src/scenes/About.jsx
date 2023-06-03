import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AnimatedText from "../hooks/AnimatedText";

const About = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="about"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-2/5 z-10 mt-16 md:mt-16 flex justify-center">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-2 before:-left-2 rounded-[10px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-100 transition duration-500 z-10 rounded-[10px] w-full max-w-[400px] md:max-w-[800px]"
              src="assets/user.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-100 transition duration-500 z-10 rounded-[10px] w-full max-w-[400px] md:max-w-[600px]"
            src="assets/user.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-3/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-4xl font-playfair z-10 text-center md:text-start">
            About {""}
            <span
              className="xs:relative xs:text-blue xs:font-semibold z-20"
            >
              Me
            </span>
          </p>
          <p className="mt-5 mb-3 text-xs md:text-base text-justify font-playfair">
            I am a highly motivated and ambitious individual, dedicated to both fitness and personal growth. 
            Each day at 6am, you can find me at the gym, striving to push my boundaries and improve my overall wellbeing. 
            Alongside my commitment to fitness, I am also actively pursuing a successful future for myself. 
            </p>

          <p className="mt-5 mb-3 text-xs md:text-base text-justify font-playfair">
            As an scientist and entrepreneur, I have taken the initiative to start my own company, showcasing my entrepreneurial drive and passion 
            for innovation. Balancing both my studies and business responsibilities has helped me develop a strong work ethic, and a deep 
            appreciation for the value of time management.
            </p>
          <p className="mt-5 mb-3 text-xs md:text-base text-justify font-playfair">
            In my free time, I am always eager to expand my skill set and stay up-to-date with emerging trends in my field. I have a keen 
            interest in machine learning and website development, which allows me to continuously challenge myself and remain competitive in my industry. 
            <br/>Through my academic and professional experiences, I have developed a strong foundation in various areas of mechanical engineering, 
            including programming, automation, graphic design and simulation such as CAD, CFD, and FEM. This expertise, combined with my passion for the field, makes me a valuable asset to any team.
            </p>
          <p className="mt-5 mb-3 text-xs md:text-base text-justify font-playfair">
            Overall, my drive, dedication, and expertise make me a strong candidate for success in my field. I am eager to continue pushing myself, 
            expanding my knowledge, and contributing to the industry in meaningful ways.
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
