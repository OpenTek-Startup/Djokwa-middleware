import React from 'react';
import { TimetableaddcolorsType } from '../../../types/timetable.type';

const ColorPalette = ({
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
}: TimetableaddcolorsType) => {
  return (
    <div className="flex gap-2">
      <div
        style={{ backgroundColor: color1 }}
        className="size-3 rounded-full "
      ></div>
      <div style={{ backgroundColor: color2 }} className="size-3 rounded-full ">
        {}
      </div>
      <div style={{ backgroundColor: color3 }} className="size-3rounded-full ">
        {}
      </div>
      <div style={{ backgroundColor: color4 }} className="size-3 rounded-full ">
        {}
      </div>
      <div style={{ backgroundColor: color5 }} className="size-3 rounded-full ">
        {}
      </div>
      <div style={{ backgroundColor: color6 }} className="size-3 rounded-full ">
        {}
      </div>
    </div>
  );
};

export default ColorPalette;
