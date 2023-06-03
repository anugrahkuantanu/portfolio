import React from 'react';
import Typewriter from 'typewriter-effect';

const AnimatedText = () => {

  return (
    <div>
      <h1 className="mt-5 mb-3 text-xl md:text-4xl text-center md:text-start font-playfair">Hi there!
          <Typewriter
            options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: ['I\'m a scientist','I\'m an engineer', 'I\'m an entrepreneur', 'I\'m a developer']
            }}
        />
      </h1>
    </div>
  );
};

export default AnimatedText;
