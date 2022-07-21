import React, { useState } from 'react';
import { Form, Button, Row, Col, Input, Divider, Select } from 'antd';

import { CountryCodeInput } from '@ehome/unite-components';
const countryCodeInputDefaultFormItemProps = CountryCodeInput.defaultFormItemProps;
import countryCodeList from './countryCodeList.json';
// const CountryCodeInput = ({ value = {}, onChange }) => {
//   const [number, setNumber] = useState(0);
//   const [currency, setCurrency] = useState('rmb');

//   const triggerChange = changedValue => {
//     onChange?.({
//       number,
//       currency,
//       ...value,
//       ...changedValue,
//     });
//   };

//   const onNumberChange = e => {
//     const newNumber = parseInt(e.target.value || '0', 10);

//     if (Number.isNaN(number)) {
//       return;
//     }

//     if (!('number' in value)) {
//       setNumber(newNumber);
//     }

//     triggerChange({
//       number: newNumber,
//     });
//   };

//   const onCurrencyChange = newCurrency => {
//     if (!('currency' in value)) {
//       setCurrency(newCurrency);
//     }

//     triggerChange({
//       currency: newCurrency,
//     });
//   };

//   return (
//     <span>
//       <Input
//         type='text'
//         value={value.number || number}
//         onChange={onNumberChange}
//         style={{
//           width: 100,
//         }}
//       />
//       <Select
//         value={value.currency || currency}
//         style={{
//           width: 80,
//           margin: '0 8px',
//         }}
//         onChange={onCurrencyChange}
//       >
//         <Option value='rmb'>RMB</Option>
//         <Option value='dollar'>Dollar</Option>
//       </Select>
//     </span>
//   );
// };
// const checkPrice = (_, value) => {
//   if (value.number > 0) {
//     return Promise.resolve();
//   }

//   return Promise.reject(new Error('Price must be greater than zero!'));
// };
const FormItem = Form.Item;
function WithForm() {
  const [form] = Form.useForm();
  return (
    <>
      <Form
        form={form}
        layout='vertical'
        onFinish={v => {
          console.log('🚀 ~ WithForm ~ v', v);
        }}
        // layout='vertical'
      >
        <FormItem
          name='inputtest'
          label='输入框'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input></Input>
        </FormItem>
        <FormItem
          label='手机号码'
          name='testbs'
          colon={false}
          {...countryCodeInputDefaultFormItemProps}
          // initialValue={{ countryCode: 86 }}
          // validateTrigger={['onBlur']}
          // normalize={(value, prevValue, prevValues) => {
          //   const contactToken = value?.contactToken;
          //   if (contactToken?.length > 11 || !/^[0-9]*$/.test(contactToken)) {
          //     value.contactToken = prevValue.contactToken;
          //   }
          //   return value;
          // }}
          // rules={[
          //   {
          //     required: true,
          //     validator: async (rule, value) => {
          //       if (!value.contactToken) {
          //         return Promise.reject(new Error(''));
          //       }
          //       return Promise.resolve();
          //     },
          //   },
          // ]}
        >
          <CountryCodeInput
            codeItemOption={countryCodeList}
            // inputFormItemPorps={{
            //   rules: [{ required: true, message: 'Please input your username!' }],
            // }}
          />
        </FormItem>
        <FormItem>
          <Button
            type='primary'
            onClick={async () => {
              const res = await form.validateFields();
              console.log('🚀 ~ onClick={ ~ res', res);
            }}
          >
            {/* htmlType='submit' */}
            获取value
          </Button>
        </FormItem>
      </Form>
      <Divider />
      <p>一般收集信息都会使用Form,所以组件内部使用Form.Item,外部需要使用Form,收集字段</p>
    </>
  );
}
export default WithForm;
