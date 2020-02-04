import React, { useState, useEffect} from 'react'
import ItemsModal from '../../Components/Modal/ItemsModal'
import DiscountModal from '../../Components/Modal/DiscountModal'
import Counter from '../../Components/Counter/Counter'
import getData from '../../Data/getData'
import { Body, UserNameBox, ButtonBox, Antdbutton, BasketBox, FooterBox, Text } from './stlye'
import {CardBody }from '../../Components/Card/style'
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
    console.log("실행 되니 ?")
    if(discountList){
      console.log("[TOTAL]",discountList)
      discountList.map((val:{[index:string]:string})=>{
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

  return (
    <Body>
      <UserNameBox>
        <h1>
          ockkk
        </h1>
      </UserNameBox>
      <ButtonBox>
        <Antdbutton onClick={() => setshowItems(true)}>시술</Antdbutton>
        <ItemsModal show={showItems} setshow={setshowItems} Data={dataObj.items} setselectItems={setselectItems} renderTotal={renderTotal} title="시술"/>
        <span style={{padding:"15px"}}/>
        <Antdbutton onClick={()=> setshowDiscounts(true)}>할인</Antdbutton>
        <DiscountModal show={showDiscounts} setshow={setshowDiscounts} Data={dataObj.discounts} setselectDiscount={setselectDiscount} renderTotal={renderTotal} title="할인"/> 
      </ButtonBox>
      <BasketBox>
        {selectItems.map((val:{[index:string]:string}, index) => 
        <CardBody key={index}>
          <div>
          <span>{val["name"]}</span>
          <Counter name={val["name"]} title="바구니" renderTotal={renderTotal}/>
          </div>
          <p>{val["price"]}</p>
        </CardBody>
        )}
        {selectDiscount.map((val:{[index:string]:string}, index:any) => 
        <CardBody key={index}>
          <div>
            <span>{val["name"]}</span>
            <DiscountItemsDropdown discountName={val["name"]} itemList={val["items"]} rate={val["rate"]}/>
          </div>
          <span>{val["rate"]}</span>
          <span>-{val["discount"]}</span>
        </CardBody>
        )}
      </BasketBox>
      <FooterBox>
        <Text>
          합계
        </Text>
        <Text style={{float:"right"}}>
          {total}
        </Text>
      </FooterBox>
      {/* <button>다음</button> */}
    </Body>
  )
}
