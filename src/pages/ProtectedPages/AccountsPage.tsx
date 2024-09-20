import SingleAccount from '../../components/molecules/SingleAccount';

import {
  adminsvg,
  parentsvg,
  proffessoursvg,
  studentsvg,
} from '../../assets/svg';
import { Button } from '../../components/ui/button';
import Heading from '../../components/ui/heading';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import Modal from '../../components/molecules/modal/Modal.molecule';
import CreateClass from '../../components/molecules/class-component/CreateClass.molecule';
const items = [
  {
    icon: adminsvg,
    title: 'Admin',
    to: '#',
  },
  {
    icon: proffessoursvg,
    title: 'Teacher',
    to: '/dashboard/addTeacher',
  },
  {
    icon: studentsvg,
    title: 'Student',
    to: '/dashboard/addStudent',
  },
  {
    icon: parentsvg,
    title: 'Parent',
    to: '#',
  },
];
const AccountsPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="max-w-3xl px-4 pb-10 mr-auto">
      <Button
        onClick={handleOpenModal}
        className="w-[min(calc(100%-1rem),30rem)] mb-6 bg-secondaryColor h-14 shadow-sm  flex justify-between items-center"
      >
        <Heading className="text-lg font-black lg:text-lg">
          Create A New Class
        </Heading>
        <PlusCircle />
      </Button>
      {isOpen && (
        <Modal isOpen title="Créer une classe">
          <CreateClass onClose={handleCloseModal} />
        </Modal>
      )}
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(min(15rem,calc(100%-60px)),_1fr))] gap-x-4 ">
        {items.map((account) => (
          <SingleAccount key={account.title} {...account} />
        ))}
      </div>
    </div>
  );
};

export default AccountsPage;
