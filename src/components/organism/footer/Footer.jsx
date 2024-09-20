import { Link } from 'react-router-dom';
import { IconRepository } from '../../../repository/icons/icon.repository';
import Heading from '../../ui/heading';
import { Button } from '../../ui/button';
import SearchComponent from '../../molecules/search-component/Search';
import { Mail } from 'lucide-react';

const Footer = () => {
  // change the logo on the searchcomponent and fix the color later
  return (
    <div
      className="px-4 pt-10 pb-24 "
      style={{
        borderTop: '1px solid gray',
      }}
    >
      {/* start here */}
      <div className="md:flex gap-x-4 items-center justify-between max-w-4xl mx-auto ">
        <Link to="/" className="flex-none-- ">
          <Heading className="flex flex-col my-6 font-serif text-xl text-center uppercase">
            <IconRepository.DjokwaIcon className="w-full  mx-auto" />
          </Heading>
        </Link>
        <div className="flex-1 flex items-center justify-center gap-x-2 ">
          <SearchComponent
            className=""
            placeholder="Enter Email Address"
            containerClassName="ring-[1px] rounded-sm ring-gray-600 mx-0 !ml-0 flex-1 w-[calc(100%-7rem)]"
          />
          <Button className="bg-[#9747ff] w-28">subscribe</Button>
        </div>
      </div>
      {/* end here */}

      <div className="gap-y-6 gap-x-4 items-start mx-auto justify-between max-w-4xl grid grid-cols-[repeat(auto-fit,minmax(min(12rem,calc(100%-60px)),_1fr))]">
        <Heading className="font-semibold w-full col-span-full lg:col-end-auto mb-2 text-2xl text-center lg:text-start">
          Follow up and management made easy for you
        </Heading>

        <div>
          <Heading className="font-semibold mb-4 text-xl">Contact Us</Heading>
          <ol className=" space-y-1 ">
            <li className="flex items-center gap-x-1">
              <IconRepository.PhoneIcon
                height={20}
                width={20}
                className="size-14"
              />
              <a href="tel:66266326" className="ml-1 font-medium">
                66266322
              </a>
            </li>
            <li className="flex items-center gap-x-1">
              <Mail size={20} />
              <a href="tel:66266326" className="ml-1 font-medium">
                example@gmail.example
              </a>
            </li>
          </ol>
        </div>
        <div>
          <Heading className="font-semibold mb-4 text-xl">Company</Heading>
          <ol className=" space-y-1 ">
            <li className="flex items-center gap-x-1">
              <Link to="/about">About Us</Link>
            </li>
            <li className="flex items-center gap-x-1">
              <Link to="/contact">Testimonials</Link>
            </li>
            <li className="flex items-center gap-x-1">
              <Link to="#">Services</Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Footer;
