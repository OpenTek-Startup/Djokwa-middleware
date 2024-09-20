import React from 'react';
import { cn } from '../../../lib/utils';
import { IconRepository } from '../../../repository/icons/icon.repository';

interface iSearch extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: any;
}
const SearchComponent = ({
  className,
  containerClassName,
  ...props
}: iSearch) => {
  return (
    <div
      className={cn(
        'flex max-w-2xl px-4 w-full my-4 mx-auto items-stretch h-10 parent border-secondary rounded-lg cursor-pointer border-[3px]',
        containerClassName
      )}
    >
      <span className="flex-none flex justify-center items-center px-2">
        <IconRepository.SearchIcon width={20} height={20} />
      </span>
      <input
        className={cn(
          'flex-1 bg-transparent dark:placeholder:text-white h-full border-none outline-none text-sm pl-4',
          className
        )}
        defaultValue={''}
        // onChange={debouncedHandleChange}
        // onChange={(e) => handleFilterChange({ key: 'search', value: e.target.value })}
        placeholder="Search..."
        {...props}
      ></input>
    </div>
  );
};

export default SearchComponent;
