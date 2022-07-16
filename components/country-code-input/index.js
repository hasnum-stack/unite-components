import React from 'react';
import { Form, Button, Select, Slider, Input } from 'antd';
// import 'antd/lib/slider/style/index';
// import './style/index';
const FormItem = Form.Item;
const prefixCls = 'country-code-input';
function CountryCodeInput({ formItemConfig = {}, codeItemOption = [], ...rest }) {
  const { codeItemName, inputItemName } = formItemConfig;
  return (
    <>
      <Input.Group compact className={prefixCls}>
        <FormItem noStyle={true} name={codeItemName}>
          <Select className={`${prefixCls}__code`} showSearch options={codeItemOption} />
        </FormItem>
        <FormItem noStyle={true} name={inputItemName}>
          <Input className={`${prefixCls}__input`} />
        </FormItem>
      </Input.Group>
    </>
  );
}

export default CountryCodeInput;
