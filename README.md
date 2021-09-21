# React Smooth Number Counter

동적으로 숫자가 카운팅되는 숫자 카운터 컴포넌트 입니다.

![screen-shot](https://user-images.githubusercontent.com/86874556/134227710-f7b8c0af-9de4-4d98-a9ed-a9a05a57e005.gif)

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
            suffix='₩/KRW'
            transition={1000}
        />
    )

}

export default Page

```

## Props

---

```
{
    value : number
    표시될 숫자 값입니다.

    transition? : number
    숫자 값이 렌더링 완료될 시간입니다.
    기본값은 1000ms 입니다.

    suffix? : string
    원, %, $ 등의 접미사 텍스트입니다.

    className? : string
    최상위 element에 사용될 className 입니다.

    id? : string
    최상위 element에 사용될 id입니다.
    미전달 시 자동으로 id를 생성하여 적용합니다.

    align? : 'left' | 'center' | 'right'
    글자들이 정렬될 기준점입니다.
    align에 따라 숫자들이 움직일지, 접미사가 움직일지 등이 결정됩니다.
    기본값은 'left' 입니다.
}
```
