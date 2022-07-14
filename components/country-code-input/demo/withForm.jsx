import React from 'react';
import { Form } from 'antd';
import { CountryCodeInput } from '@ehome/unite-components';
const FormItem = Form.Item;
function WithForm() {
  return (
    <>
      <Form>
        <FormItem>
          <CountryCodeInput />
        </FormItem>
      </Form>
    </>
  );
}
export default WithForm;
