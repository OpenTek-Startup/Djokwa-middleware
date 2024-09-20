/* eslint-disable @typescript-eslint/no-empty-function */

import React, { useState } from 'react';
import Input from '../updated-input/Input';
import { IconRepository } from '../../../repository/icons/icon.repository';
import ColorPalette from './colorPalette';
import { Button } from '../../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../ui/dropdown';
import DropDownMenuCards from '../dropdownmenucards/drop-down-menu-Cards';

const Timetableadd = () => {
  const [selectedTeacher, setIsselectedTeacher] = useState('');

  const [isDaydropDownVisible, setIsDaydropDownVisible] = useState(false);

  const [isTeacherdropDownVisible, setIsTeacherdropDownVisible] =
    useState(false);

  const [selectedDay, setIsselectedDay] = useState('');

  const handleClick = (teacher: string) => {
    setIsselectedTeacher(teacher);
    setIsTeacherdropDownVisible(!isTeacherdropDownVisible);
  };

  const handleClick2 = (day: string) => {
    setIsselectedDay(day);
    setIsDaydropDownVisible(!isDaydropDownVisible);
  };

  return (
    <form className="w-1/4 mx-auto  border-t shadow-md p-5 space-y-2 rounded-sm">
      <div>
        <Input placeholder="subject" className="formgroup ring-1 ring-ring" />
      </div>

      <div className="flex ring-ring ring-1 overflow-hidden rounded-lg formgroup">
        <Input
          placeholder="teacher"
          className="formgroup uppercase focus:rounded-none"
          value={selectedTeacher}
          readOnly
        />
        <div className="flex ring-ring  overflow-hidden rounded-lg formgroup">
          <div className="flex justify-center items-center w-12">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex justify-center items-center  "
                asChild
              >
                <svg
                  onClick={() =>
                    setIsTeacherdropDownVisible(!isTeacherdropDownVisible)
                  }
                  className=" w-1/2 h- justify-center "
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  width="2em"
                  height="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </DropdownMenuTrigger>

              {isTeacherdropDownVisible === false && (
                <DropdownMenuContent className="">
                  <DropDownMenuCards
                    onclick={handleClick}
                    title={'mr. Djomo brown'}
                  />
                  <DropDownMenuCards
                    onclick={handleClick}
                    title={'ms. ange angoh'}
                  />
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="flex ring-1 ring-ring rounded-lg overflow-hidden formgroup">
        <span className="grid w-12 place-items-center">
          <IconRepository.CalenderIcon width={20} height={20} />
        </span>
        <Input
          placeholder="day"
          className="focus:rounded-none uppercase formgroup"
          value={selectedDay}
          readOnly
        />

        <div className="flex justify-center items-center w-12">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex justify-center items-center  "
              asChild
            >
              <svg
                onClick={() => setIsDaydropDownVisible(!isDaydropDownVisible)}
                className=" w-1/2 h- justify-center "
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                width="2em"
                height="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
            </DropdownMenuTrigger>
            {isDaydropDownVisible === false && (
              <DropdownMenuContent className="">
                <DropDownMenuCards onclick={handleClick2} title={'monday'} />
                <DropDownMenuCards onclick={handleClick2} title={'tuesday'} />
                <DropDownMenuCards onclick={handleClick2} title={'wednesday'} />
                <DropDownMenuCards onclick={handleClick2} title={'thursday'} />
                <DropDownMenuCards onclick={handleClick2} title={'friday'} />
                <DropDownMenuCards onclick={handleClick2} title={'saturday'} />
                <DropDownMenuCards onclick={handleClick2} title={'sunday'} />
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        </div>
      </div>

      <div className="flex gap-2 ">
        <div className="formgroup flex ring-ring ring-1 rounded-lg overflow-hidden">
          <span className="grid w-12 place-items-center  ">
            <IconRepository.TimerIcon width={20} height={20} />
          </span>
          <Input placeholder="Start" className="focus:rounded-none" />
        </div>
        <div className="flex justify-center items-center">
          <IconRepository.Arrowpointright width={20} height={20} />
        </div>
        <div className="formgroup flex ring-ring ring-1 rounded-lg overflow-hidden">
          <span className="grid place-items-center w-12">
            <IconRepository.TimerIcon width={20} height={20} />
          </span>

          <Input placeholder="End" className="focus:rounded-none" />
        </div>
      </div>

      <div className="ring-ring ring-1 rounded-lg overflow-hidden formgroup">
        <Input placeholder="hall" />
      </div>

      <div className="ring-ring ring-1 rounded-lg overflow-hidden formgroup">
        <Input placeholder="description" width={200} maxLength={200} />
      </div>

      <ColorPalette
        color1={'#F5EC11'}
        color2={'#99FC1B'}
        color3={'#0AF09E'}
        color4={'#FB8417'}
        color5={'#218CAD'}
        color6={'#3CACBB'}
      />

      <div className="flex gap-2 justify-end">
        <div className="px-4 py-2">cancel</div>
        <Button>Save</Button>
      </div>
    </form>
  );
};

export default Timetableadd;
