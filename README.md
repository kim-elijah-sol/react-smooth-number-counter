# React Number Counter

동적으로 숫자가 카운팅되는 숫자 카운터 컴포넌트 입니다.

## installation

---

using npm

```bash
npm i react-smooth-number-counter
```

using yarn

```bash
yarn add react-smooth-number-counter
```

<br/>

## Example

---

page.js

```
import React from 'react'
import NumberCounter from 'react-smooth-number-counter'

const Page = () => {

    return (
        <NumberCounter
            value={312039}
            suffix={₩/KRW}
            transition={2100}
        />
    )

}

export default Page

```

## Props

---

```
{
    value
    표시될 숫자 값입니다.

    transition
    숫자 값이 렌더링 완료될 시간입니다. // ms단위

    suffix
    원 , % , $ 등의 접미사 텍스트입니다.

    className?
    최상위 element에 사용될 className입니다.

    id?
    최상위 element에 사용될 id입니다.
    미전달 시 자동으로 id를 생성하여 적용합니다.
}
```
