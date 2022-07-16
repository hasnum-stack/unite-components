import React from 'react';
import { Form, Button, Row, Col } from 'antd';
import { CountryCodeInput } from '@ehome/unite-components';
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
      >
        <FormItem>
          <CountryCodeInput
            formItemConfig={{
              codeItemName: 'code',
              inputItemName: 'phone',
            }}
            codeItemOption={[
              {
                label: 'Zhejiang',
                value: 'Zhejiang',
              },
              {
                label: 'Jiangsu',
                value: 'Jiangsu',
              },
            ]}
          />
        </FormItem>
        <FormItem>
          <Button type='primary' htmlType='submit'>
            获取value
          </Button>
        </FormItem>
      </Form>
    </>
  );
}
export default WithForm;
