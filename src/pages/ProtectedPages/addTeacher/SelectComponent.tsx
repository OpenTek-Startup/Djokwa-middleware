import React from 'react';
import { Select } from 'antd';

type SelectComponentProps = {
  placeholder: string;
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelectComponent: React.FC<SelectComponentProps> = ({ placeholder }) => (
  <Select
    onChange={handleChange}
    showSearch
    style={{ width: '100%' }}
    placeholder={placeholder}
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '')
        .toLowerCase()
        .localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
    ]}
  />
);

export default SelectComponent;
