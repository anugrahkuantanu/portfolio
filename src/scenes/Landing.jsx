import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-2/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-150 transition duration-500 z-10 rounded-t-[400px] w-full max-w-[400px] md:max-w-[600px]"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-150 transition duration-500 z-10 rounded-t-[400px] w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-3/5 mt-12 md:mt-40">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Anugrah {""}
            <span
              className="xs:relative xs:text-blue xs:font-semibold z-20"
            >
              Kuantanu
            </span>
          </p>

          <p className="mt-5 mb-3 text-sm text-center md:text-start font-playfair">
          I am a highly motivated and ambitious individual, dedicated to both fitness and personal growth. 
          Each day at 6am, you can find me at the gym, striving to push my boundaries and improve my overall wellbeing. 
          Alongside my commitment to fitness, I am also actively pursuing a successful future for myself. As a current mechanical 
          engineering student, I have taken the initiative to start my own company, showcasing my entrepreneurial drive and passion 
          for innovation. Balancing both my studies and business responsibilities has helped me develop a strong work ethic, and a deep 
          appreciation for the value of time management.
          <br/>In my free time, I am always eager to expand my skill set and stay up-to-date with emerging trends in my field. I have a keen 
          interest in machine learning and website development, which allows me to continuously challenge myself and remain competitive in my industry. 
          Through my academic and professional experiences, I have developed a strong foundation in various areas of mechanical engineering, including CAD,
           CFD, and FEM. This expertise, combined with my passion for the field, makes me a valuable asset to any team.
           <br/>Overall, my drive, dedication, and expertise make me a strong candidate for success in the field of mechanical engineering. I am eager to continue pushing myself, 
           expanding my knowledge, and contributing to the industry in meaningful ways.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-7 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-0 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
