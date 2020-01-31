import React, { useState} from 'react'
import getData from '../../Data/getData'
import {Body} from './stlye'
import {Modal} from 'antd'

export default function Basket() {
  const [show, setshow] = useState(false)
  
  console.log(getData())
  return (
    <Body>
      <div>테스트</div>
      <button onClick={() => setshow(true)}>시술</button>
      <Modal
          title="Vertically centered modal dialog"
          centered
          visible={show}
          onOk={() => setshow(false)}
          onCancel={() => setshow(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      <button>할인</button>
      <div>
        <span>
          합계
        </span>
        <span>
          0원
        </span>
      </div>
      <button>다음</button>
    </Body>
  )
}
