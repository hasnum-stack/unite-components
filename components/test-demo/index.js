import React from 'react';
import { Input, Table, Slider } from 'antd';
// import 'antd/lib/slider/style/index'
import './style/index.less';
const a = () => {};
function TestDemo({ a = 123 }) {
  const fn = async () => {
    return 13;
  };

  const af = () => {
    const a = [1123];
    Array.isArray(a) && console.log(123);
    console.log({ ...a });
    const map = new Map();
    {
      let a = 465;
    }
  };
  const fn1 = () => {
    return new Promise(() => {});
  };
  return (
    <>
      <Slider defaultValue={30} />
      <div onClick={fn}>1234</div>
      <Input></Input>
      <Table></Table>
      {a}
    </>
  );
}
export default TestDemo;
