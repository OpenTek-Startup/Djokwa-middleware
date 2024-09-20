/* eslint-disable no-duplicate-imports */
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';

const props: UploadProps = {
  name: 'file',
  action: 'http://localhost:5000/upload', // Using a mock endpoint that always returns success
  headers: {
    authorization: 'authorization-text',
  },
  method: 'POST',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadFile: React.FC = () => (
  <Upload {...props} className="w-full" style={{ width: '100%' }}>
    <Button className="" icon={<UploadOutlined />}>
      Upload CV
    </Button>
  </Upload>
);

export default UploadFile;
