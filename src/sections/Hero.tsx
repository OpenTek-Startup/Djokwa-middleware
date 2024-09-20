import { Button } from '../components/ui/button';
import deskImage from '../assets/Images/desk.png';
// import Heading from '../components/ui/heading'
import { Link } from 'react-router-dom';
import { AnimatedText } from '../components/ui/AnimatedText';
import { motion } from 'framer-motion';
const Hero = () => {
  // hero section here but more can be added to make the hero page looks great
  const words = [
    {
      word: 'Ensure',
    },
    {
      word: 'a',
    },
    {
      word: 'better',
    },
    {
      word: 'follow-up',
      className: 'text-[var(--color-bg-sidebar)] w-full md:w-fit',
    },
    {
      word: 'for',
    },
    {
      word: 'your',
    },
    {
      word: 'Institution',
      className:
        'before--style text-[var(--color-bg-sidebar)] w-full  uppercase font-bold ',
    },
  ];

  const img_variants = {
    initial: {
      opacity: 0,
      y: '5rem',
      // transition: {
      //     duration: 1.5
      // }
    },
    animate: {
      opacity: 1,
      y: '0rem',
      // transition: {
      //     duration: 0.5
      // }
    },
    hover: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };
  return (
    <div className="top-0 sticky--- md:static">
      <div className="md:grid  lg:h-[min(35rem,100vh)] py-10 lg:items-center grid-cols-[repeat(2,1fr)] gap-6 max-w-6xl mx-auto px-4 lg:px-10">
        {/* <div
                    className='before--style'
                >testing animation before implementing it</div> */}

        <div>
          <AnimatedText
            className="text-4xl  dark:text-white  font-poppins sm:text-4xl md:text-4xl lg:text-6xl font-black lg:font-semibold text-center md:text-start
                        tracking-tight leading-[2.2rem] lg:leading-[1.1] mb-6 capitalize"
            inView
            words={words}
          />
          {/* <Heading className='text-4xl font-poppins sm:text-4xl lg:text-6xl font-black lg:font-semibold text-center md:text-start
            tracking-tight leading-[2.2rem] lg:leading-[1.1] mb-6 capitalize 
            '>
                        Ensure a better follow-up for your <span className='font-bold text-pink-600'>Institute </span>
                    </Heading> */}
          <p className="mb-6 text-lg leading-tight text-center text-gray-600 lg:text-xl md:text-start ">
            Follow up and management made easy for you and your institute{' '}
          </p>

          <div className="flex flex-wrap items-center justify-center mx-auto max-w-fit gap-x-4 gap-y-2 lg:gap-2 ">
            <Button className="text-sm sm:text-lg shadow-sm hover:bg-white hover:text-black transition-all duration-300 hover:ring bg-[var(--color-bg-sidebar)] font-medium capitalize px-10 h-auto py-2.5 pb-3.5 block  mx-auto lg:ml-0 ">
              Get started
            </Button>
            {/* this button was not on the design */}
            <Button className="text-sm sm:text-lg ring-[0.5px] group hover:bg-[var(--color-bg-sidebar)] transition-all duration-300 ring-black  bg-white text-gray-500 shadow-2xl hover:ring border-[var(--color-bg-sidebar)] font-medium capitalize px-10 h-auto py-2.5 pb-3.5 block  mx-auto lg:ml-0 ">
              <Link
                to={'#'} // link to the desire page here
                className="block hover:white group-hover:text-white "
              >
                Learn More{' '}
                {/* the learn more button can redirect the user to 
                        about page or scroll to show the user the steps s/he can use to create an account
                        */}
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <motion.img
            src={deskImage}
            whileHover="hover"
            initial="initial"
            whileInView="animate"
            variants={img_variants}
            className="object-fill hover:scale-[0.95]
                        duration-300 transition-all
                        max-w-lg mx-auto
                        "
            alt="desk image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
