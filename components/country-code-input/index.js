import React, { useState, useMemo, useRef } from 'react';
import { Form, Select, Slider, Input } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
const prefixCls = 'country-code-input';
const noop = () => {};
function CountryCodeInput(props) {
  const {
    value = {},
    onChange = noop,
    codeFormItemProps = {},
    selectProps = {},
    inputProps = {},
    codeItemOption = [],
    inputFormItemPorps = {},
    onBlur = noop,
    ...rest
  } = props;

  const { countryCode, contactToken } = value;

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

  const handleChange = singleValue => {
    // console.log('🚀 ~ singleValue', singleValue);
    // console.log('🚀 ~ value', value);

    // console.log('🚀 ~ handleChange ~ value', value);
    const me = {
      ...value,
      ...singleValue,
    };
    // console.log('🚀 ~ me', me);
    // onChange({});
    // onChange(v => {
    //   console.log('🚀 ~ v', v);
    // });
    // onBlur(me);
    onChange(me);
  };

  return (
    <>
      <Input.Group compact className={[prefixCls, `${prefixCls}-group`, `${prefixCls}-group-compact`].join(' ')}>
        {/* <div className={`${prefixCls}`}> */}
        <Select
          onBlur={onBlur}

          onChange={v => {
            handleChange({
              countryCode: v,
            });
          }}
          value={countryCode}
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
        <Input
          onBlur={onBlur}
          className={`${prefixCls}__input`}
          placeholder='请输入'
          value={contactToken}
          onChange={e => {
            const value = e.target.value;
            handleChange({
              contactToken: value,
            });
          }}
        />
        {/* </div> */}
      </Input.Group>
    </>
  );
}
CountryCodeInput.defaultFormItemProps = {
  initialValue: { countryCode: 86 },
  validateTrigger: ['onBlur'],
  normalize: (value, prevValue, prevValues) => {
    const contactToken = value?.contactToken;
    if (contactToken?.length > 11 || !/^[0-9]*$/.test(contactToken)) {
      value.contactToken = prevValue.contactToken;
    }
    return value;
  },
  rules: [
    {
      required: true,
      validator: (rule, value) => {
        if (!value?.contactToken) {
          return Promise.reject(new Error(''));
        }
        if (value?.countryCode === 86 && !value?.contactToken?.startsWith('1')) {
          return Promise.reject(new Error('手机号码不符合规则'));
        }
        return Promise.resolve();
      },
    },
  ],
};
export default CountryCodeInput;
