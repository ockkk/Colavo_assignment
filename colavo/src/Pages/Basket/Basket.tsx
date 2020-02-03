import React, { useState, useEffect} from 'react'
import ItemsModal from '../../Components/Modal/ItemsModal'
import DiscountModal from '../../Components/Modal/DiscountModal'
import getData from '../../Data/getData'
import {Body, UserNameBox, ButtonBox, Antdbutton} from './stlye'

type Data = {
  items: object
  discounts: object
  currency_code: string
}

export default function Basket() {
  const [dataObj, setdataObj] = useState<Data>({
    items:{},
    discounts:{},
    currency_code:""
  })

  const [showItems, setshowItems] = useState<boolean>(false)
  const [selectItems, setselectItems] = useState<object>({})
  
  const [showDiscounts, setshowDiscounts] = useState<boolean>(false)
  const [selectDiscount, setselectDiscount] = useState<object>({})
  

  useEffect(()=>{getData(setdataObj)},[])
  return (
    <Body>
      <UserNameBox>
        <h1>
          테스트
        </h1>
      </UserNameBox>
      <ButtonBox>
        <Antdbutton onClick={() => setshowItems(true)}>시술</Antdbutton>
        <ItemsModal show={showItems} setshow={setshowItems} Data={dataObj.items} setselectItems={setselectItems} title="시술"/>
        <Antdbutton onClick={()=> setshowDiscounts(true)}>할인</Antdbutton>
        <DiscountModal show={showDiscounts} setshow={setshowDiscounts} Data={dataObj.discounts} setselectDiscount={setselectDiscount} title="할인"/>
      </ButtonBox>
      <div style={{height: "70%"}}></div>
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
