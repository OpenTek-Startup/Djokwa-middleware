import Heading from '../components/ui/heading';
import questionImage from '../assets/Images/question.png';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedText } from '../components/ui/AnimatedText';

const HowItWorks = () => {
  // interface for the steps array element
  interface iStep {
    heading: string;
    description?: string;
    index: number;
    RenderLink?: React.ReactNode;
  }
  // creating the steps in array it will be easier for another person reading my code or
  // me myself on a later to understand  what is going on here
  const MyButton = motion(Button);
  const MyLink = motion(Link);
  const variants = {
    initial: {
      scale: 0.5,
      opacity: 0.3,
      x: 'var(--initial-x)',
      y: '-4rem',
      transition: {
        delay: 0.5,
        duration: 2,
      },
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: '-2rem',
      y: '-3rem',
      transition: {
        // delay: 0.5,
        duration: 0.5,
      },
    },
  };
  const img_variants = {
    initial: {
      opacity: 0.3,
      x: '-10rem',
      transition: {
        delay: 1,
        duration: 2,
      },
    },
    animate: {
      opacity: 1,
      x: '0rem',
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };
  const text_variants = {
    initial: {
      scale: 0.5,
      opacity: 0.3,
      y: '4rem',
      transition: {
        delay: 0.5,
        duration: 2,
      },
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: '0rem',
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };
  const steps: readonly iStep[] = [
    {
      heading: 'Register /Sign up',
      description:
        'this is just a minimal description here ,you can edit this to make it more precise for any one to for may you can even add a field can contains a link to redirect to user to a specific place in the platform e.g create account',
      index: 1,
      RenderLink: (
        <MyButton
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="flex-none block text-white max-w-fit bg-[var(--color-bg-sidebar)]"
        >
          <Link to="/auth/login" className="block w-full text-white">
            Create Account
          </Link>
        </MyButton>
      ),
    },
    {
      heading: 'Set up the instruction parameter',
      description:
        'this is just a minimal description here ,you can edit this to make it more precise for any one to for may you can even add a field can contains a link to redirect to user to a specific place in the platform e.g create account',
      index: 2,
      RenderLink: (
        <>
          {/* <br /> */}
          <p>
            Follow this link set the instructions{' '}
            <MyLink
              className="italic underline underline-offset-2"
              to={'instruction/create'}
            >
              instruction &nbsp;
            </MyLink>
          </p>
        </>
      ),
    },
    {
      heading: 'Start Working',
      description:
        'this is just a minimal description here ,you can edit this to make it more precise for any one to for may you can even add a field can contains a link to redirect to user to a specific place in the platform e.g create account',
      index: 3,
      RenderLink: (
        <>
          {/* <br /> */}
          <p>
            Already a user{' '}
            <MyLink
              className="italic underline underline-offset-2"
              to={'instruction/create'}
            >
              login &nbsp;
            </MyLink>
          </p>
        </>
      ),
    },
  ];
  // renderSteps takes it arry of steps in the steps array and render it to the page
  const RenderSteps = ({ heading, description, RenderLink, index }: iStep) => {
    return (
      <li className="flex flex-col justify-start pt-4 mb-4 space-y-2 ms-6">
        <Heading className="!text-2xl dark:text-white font-semibold  mb-0 w-fit">
          {heading}
          <motion.span
            viewport={{ once: true }}
            initial={{
              width: '0px',
            }}
            whileInView={{
              width: '100%',
            }}
            transition={{
              duration: 1,
            }}
            className="h-[2px] mt-2 rounded-full  bg-[var(--color-bg-sidebar)] block max-w-[min(80%,30rem)]"
          />
        </Heading>
        <motion.span
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 1, once: true }}
          className="sticky top-[1rem] [--initial-x:-2.5rem]    text-white text-[0.7rem] flex items-center justify-center   w-5 h-5 bg-[#9747ff] rounded-full -start-2  "
        >
          {index}
        </motion.span>
        {/* RenderLink and description was not found on the design but i thought it wise to direct the user
                when s/he is using reading the instructions 
                */}
        <motion.p
          whileHover="hover"
          initial="initial"
          whileInView="animate"
          variants={text_variants}
          viewport={{ once: true, amount: 0.6 }}
          className="text-base font-normal text-gray-500 dark:text-gray-400"
        >
          {description}
        </motion.p>
        {RenderLink}{' '}
        {/*
                i juste passed one as a button in the array  but more can be passed
                */}
      </li>
    );
  };
  const words = [
    {
      word: 'How',
    },
    {
      word: 'its',
      className:
        'text-[var(--color-bg-sidebar)] font-bold italic [text-shadow:_0_1px_0_var(--tw-shadow-color,blue)]',
    },

    {
      word: 'Works',
      className:
        'text-[var(--color-bg-sidebar)] font-bold italic [text-shadow:_0_1px_0_var(--tw-shadow-color,blue)]',
    },
  ];
  return (
    <div className="relative z-20 max-w-6xl px-6 py-6 mx-auto bg-white dark:bg-black lg:px-6">
      <div className="md:flex items-start md:gap-x-[2rem] lg:gap-x-[4rem]">
        {/* setting the position to sticky will make the image to stick to the top when scrolling
            --when scrolling you will see the animation 
            you can change it by removing the position sticking  class or adding another class like static
            */}
        <div className="sticky  top-[0rem] lg:w-[min(25rem,calc(100%-2rem))] flex-none ">
          <div className="relative w-full">
            <h1 className="w-full text-4xl font-black text-center text-gray-500 uppercase -z-1 lg:text-5xl opacity-30">
              WORKS
            </h1>

            <AnimatedText
              className="text-2xl italic  text-black top-[calc(50%-0.6rem)]  lg:text-4xl !absolute  !m-0 -translate-y-1/2  z-1"
              words={words}
            />
          </div>

          {/* <Heading className='py-6 text-4xl font-semibold text-center lg:text-start'>
                        How its Works
                    </Heading> */}
          <motion.img
            whileHover="hover"
            initial="initial"
            whileInView="animate"
            variants={img_variants}
            src={questionImage}
            loading="lazy" // the browser will download the image as the image is about to enter the viewport
            // for better automising
            className="object-fill   hover:scale-[0.95]
                        duration-300 transition-all
                        max-w-[25rem]
                        max-h-[calc(100vh-10rem)]
                        mx-auto lg:mx-0"
            // max-h-[calc(100vh-10rem)] ==> with this you will be able to view the image when the phone is rotated
            alt="desk image"
          />
        </div>
        <div className="relative z-20 flex-1 bg-white">
          {/* with flex-1 as a child of an element which has a display of flex it will grow and take the avaible space  */}
          <ol
            style={{
              borderLeft: '2px solid #f7c2e4',
            }}
            className="relative my-6 border-gray-200 lg:space-y-10 border-s dark:border-gray-700"
          >
            {
              // loops here and render each steps  with data from array of objects
              steps.map((step) => (
                <RenderSteps key={step.heading} {...step} />
              ))
            }
          </ol>
        </div>
      </div>
    </div>
  );
};
HowItWorks.displayName = 'howitworks';
export default HowItWorks;
