import React, { useState, useMemo, useRef } from 'react';
import { Form, Select, Slider, Input } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
const prefixCls = 'country-code-input';
function CountryCodeInput({
  codeFormItemProps = {},
  selectProps = {},
  inputProps = {},
  codeItemOption = [],
  inputFormItemPorps = {},
  ...rest
}) {
  if (codeFormItemProps?.name == null) {
    codeFormItemProps.name = 'countryCode';
  }
  if (inputFormItemPorps?.name == null) {
    inputFormItemPorps.name = 'contactToken';
  }

  const [selectSearchValue, setSelectSearchValue] = useState('');

  const selectList = useMemo(() => {
    if (codeItemOption.length === 0) {
      codeItemOption.push({ name: '中国大陆', code: 86, regionCode: '+86' });
    }

    let renderOptions = codeItemOption;

    //手动处理过滤
    if (selectSearchValue != '') {
      //过滤出来了就使用
      const filterOptions = codeItemOption.filter(item => {
        return item.regionCode.includes(selectSearchValue);
      });
      //如果没搜索到就用origin
      if (filterOptions.length > 0) {
        renderOptions = filterOptions;
      }
    }

    return renderOptions.map(item => {
      const { regionCode, name, code, id } = item;
      return {
        optionLabelProp: regionCode,
        label: `${name} ${regionCode}`,
        value: code,
        key: id,
      };
    });
  }, [codeItemOption, selectSearchValue]);

  return (
    <>
      <Input.Group compact className={[prefixCls, `${prefixCls}-group`, `${prefixCls}-group-compact`].join(' ')}>
        <FormItem noStyle={true} {...codeFormItemProps} initialValue={86}>
          <Select
            className={`${prefixCls}__code`}
            showSearch
            showArrow
            optionLabelProp='optionLabelProp'
            options={selectList}
            // 使用下面属性会关闭虚拟滚动,所以设置了dropdownStyle.minWidth
            // dropdownMatchSelectWidth={false}
            dropdownStyle={{
              minWidth: '210px',
            }}
            filterOption={false}
            searchValue={selectSearchValue}
            onSearch={value => {
              if (value.length > 4) {
                return;
              }
              setSelectSearchValue(value);
            }}
            {...selectProps}
          />
        </FormItem>
        <FormItem
          noStyle={true}
          validateTrigger='onBlur'
          rules={[
            {
              required: true,
              message: '',
            },
            // {
            //   //todo
            // },
          ]}
          {...inputFormItemPorps}
        >
          <Input className={`${prefixCls}__input`} placeholder='请输入' />
        </FormItem>
      </Input.Group>
    </>
  );
}

export default CountryCodeInput;
