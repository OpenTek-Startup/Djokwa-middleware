import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../../components/molecules/navbar/Navbar';
import Footer from '../../components/organism/footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';

const RootElement = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{
            opacity: 0.5,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: 'tween',
            ease: 'linear',
            duration: 0.5,
          }}
        >
          <Outlet />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default RootElement;
