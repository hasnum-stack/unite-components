import React from 'react';
console.log('🚀 ~ React', React);
import { Button } from 'antd';
// import './style/index';

// function CountryCodeInput() {
//   return (
//     <>
//       <div className="cnm6666666666">123</div>
//       <Button>1231</Button>
//     </>
//   );
// }
class CountryCodeInput extends React.Component {
  render() {
    return (
      <>
        <Button
          onClick={() => {
            console.log(123);
          }}
        >
          123
        </Button>
      </>
    );
  }
}
export { CountryCodeInput };
// CountryCodeInput.React = React;
// export default { CountryCodeInput, Button };
