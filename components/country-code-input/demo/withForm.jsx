import React, { useState } from 'react';
import { Form, Button, Row, Col, Input, Divider, Select } from 'antd';

import { CountryCodeInput } from '@ehome/unite-components';
const countryCodeInputDefaultFormItemProps = CountryCodeInput.defaultFormItemProps;
import countryCodeList from './countryCodeList.json';

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
        <FormItem label='手机号码' name='testbs' colon={false} {...countryCodeInputDefaultFormItemProps}>
          <CountryCodeInput codeItemOption={countryCodeList} />
        </FormItem>
        <FormItem>
          <Button
            type='primary'
            onClick={async () => {
              const res = await form.validateFields();
              console.log('🚀 ~ onClick={ ~ res', res);
            }}
          >
            获取value
          </Button>
        </FormItem>
      </Form>
    </>
  );
}
export default WithForm;
