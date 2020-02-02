import React, { useState, useEffect} from 'react'
import ItemsModal from '../../Components/Modal/ItemsModal'
import DiscountModal from '../../Components/Modal/DiscountModal'
import getData from '../../Data/getData'
import {Body} from './stlye'

type Data = {
  items: object
  discounts: object
  currency_code: string
}

export default function Basket() {
  const [showItems, setshowItems] = useState<boolean>(false)
  const [showDiscounts, setshowDiscounts] = useState<boolean>(false)
  const [select, setselect] = useState<object>({})
  const [dataObj, setdataObj] = useState<Data>({
    items:{},
    discounts:{},
    currency_code:""
  })

  useEffect(() => {getData(setdataObj)},[])

  return (
    <Body>
      <div>테스트</div>
      <button onClick={() => setshowItems(true)}>시술</button>
      <ItemsModal show={showItems} setshow={setshowItems} Data={dataObj.items} setselect={setselect} title="시술"/>
      <button onClick={()=> setshowDiscounts(true)}>할인</button>
      <DiscountModal show={showDiscounts} setshow={setshowDiscounts} Data={dataObj.discounts} setselect={setselect} title="할인"/>
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
