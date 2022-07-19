import React from 'react';
import { Form, Button, Row, Col, Input, Divider } from 'antd';
import { CountryCodeInput } from '@ehome/unite-components';
import countryCodeList from './countryCodeList.json';

const FormItem = Form.Item;
function WithForm() {
  const [form] = Form.useForm();
  return (
    <>
      <Form
        form={form}
        onFinish={v => {
          console.log('🚀 ~ WithForm ~ v', v);
        }}
        // layout='vertical'
      >
        <FormItem label='输入框' required>
          <Input></Input>
        </FormItem>
        <FormItem label='手机号码' colon={false} required>
          <CountryCodeInput
            codeItemOption={countryCodeList}
            inputFormItemPorps={{
              rules: [{ required: true, message: 'Please input your username!' }],
            }}
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
