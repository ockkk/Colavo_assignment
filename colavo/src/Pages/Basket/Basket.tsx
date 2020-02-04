import React, { useState, useEffect} from 'react'
import ItemsModal from '../../Components/Modal/ItemsModal'
import DiscountModal from '../../Components/Modal/DiscountModal'
import Counter from '../../Components/Counter/Counter'
import getData from '../../Data/getData'
import { Body, UserNameBox, ButtonBox, Antdbutton } from './stlye'
import DiscountItemsDropdown from '../../Components/Dropdown/DiscountItemsDropdown'

type Data = {
  items: object
  discounts: object
  currency_code: string
}
localStorage.clear()
export default function Basket() {
  const [dataObj, setdataObj] = useState<Data>({
    items:{},
    discounts:{},
    currency_code:""
  })

  const [showItems, setshowItems] = useState<boolean>(false)
  const [selectItems, setselectItems] = useState([])

  const [showDiscounts, setshowDiscounts] = useState<boolean>(false)
  const [selectDiscount, setselectDiscount] = useState<any>([])

  const [total, settotal] = useState("0")
  let discountItemList
  const renderTotal = () => {
    let itemStorage:any = localStorage.getItem("items")
    let itemList = JSON.parse(itemStorage)
    let discountStorage:any = localStorage.getItem("discount")
    let discountList = JSON.parse(discountStorage)
    let sum = 0

    if(itemList){
      itemList.map((val:{[index:string]:string})=>{
        sum += Number(val["price"]) * Number(val["count"])
      })
    }

    if(discountList){
      discountList.map((val:{[index:string]:string})=>{
        console.log(val)
        sum -= Number(val["discount"])
      })
    }
    settotal(String(sum))
  }

  useEffect(()=>{
    getData(setdataObj)
  },[])

  useEffect(()=>{
    renderTotal()
  },[selectItems,selectDiscount])

  console.log("[ITEMS]",selectItems)
  console.log("[DISCOUNT]", selectDiscount)
  return (
    <Body>
      <UserNameBox>
        <h1>
          테스트
        </h1>
      </UserNameBox>
      <ButtonBox>
        <Antdbutton onClick={() => setshowItems(true)}>시술</Antdbutton>
        <ItemsModal show={showItems} setshow={setshowItems} Data={dataObj.items} setselectItems={setselectItems} renderTotal={renderTotal} title="시술"/>
        <Antdbutton onClick={()=> setshowDiscounts(true)}>할인</Antdbutton>
        <DiscountModal show={showDiscounts} setshow={setshowDiscounts} Data={dataObj.discounts} setselectDiscount={setselectDiscount} renderTotal={renderTotal} title="할인"/> 
      </ButtonBox>
      <div style={{height: "70%"}}>
        {selectItems.map((val:{[index:string]:string}, index) => 
        <div key={index}>
          <p>{val["name"]}</p>
          <p>{val["price"]}</p>
          <Counter name={val["name"]} title="바구니" renderTotal={renderTotal}/>
        </div>
        )}
        {selectDiscount.map((val:{[index:string]:string}, index:any) => 
        <div key={index}>
          <p>{val["name"]}</p>
          <p>{val["rate"]}</p>
          <p>-{val["discount"]}</p>
          <DiscountItemsDropdown itemList={val["items"]}/>
        </div>
        )}
      </div>
      <div>
        <span>
          합계
        </span>
        <span>
          {total}
        </span>
      </div>
      <button>다음</button>
    </Body>
  )
}
