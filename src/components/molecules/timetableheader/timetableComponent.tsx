import React from 'react';
import FullCallender from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction'
// import { cn } from '../../../lib/utils';
//
const TimetableComponent = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <FullCallender
        plugins={[timeGridPlugin]}
        initialView={'timeGridWeek'}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'timeGridWeek,timeGridDay',
        }}
        views={{
          timeGridFourDay: {
            type: 'timeGrid',
            duration: { days: 4 },
          },
        }}
      />
    </div>
  );
};

export default TimetableComponent;
