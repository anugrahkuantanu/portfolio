import React from 'react';
import Typewriter from 'typewriter-effect';

const AnimatedText = () => {

  return (
    <div>
      <h1 className="mt-5 mb-3 text-xl md:text-4xl text-center md:text-start font-playfair md:flex alignItems-start justifyContent-start">
        Hi there! I'm&nbsp;
          <Typewriter
            options={{
                autoStart: true,
                loop: true,
                delay: 150,
                strings: ['a scientist','an engineer', 'an entrepreneur', 'a developer', 'a lover and a figther']
            }}
        />
      </h1>
    </div>
  );
};

export default AnimatedText;
