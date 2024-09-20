/* eslint-disable no-duplicate-imports */
import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const Datepicker: React.FC = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
);

export default Datepicker;
