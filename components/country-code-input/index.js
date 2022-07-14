import React from 'react';
import { Button, Select, Slider, Input } from 'antd';
// import 'antd/lib/slider/style/index';
// import './style/index';

function CountryCodeInput() {
  return (
    <>
      <Input.Group compact>
        <Select defaultValue='Zhejiang'>
          <Option value='Zhejiang'>Zhejiang</Option>
          <Option value='Jiangsu'>Jiangsu</Option>
        </Select>
        <Input style={{ width: '50%' }} defaultValue='Xihu District, Hangzhou' />
      </Input.Group>
    </>
  );
}

export default CountryCodeInput;
