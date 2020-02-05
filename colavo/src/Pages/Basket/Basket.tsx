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
  const [selectDiscount, setselectDiscount] = useState([])

  const [total, settotal] = useState("0")

  const renderTotal = () => {
    let itemStorage:string | null = localStorage.getItem("items")
    let itemList = JSON.parse(itemStorage || "{}")
    let discountStorage:string | null = localStorage.getItem("discount")
    let discountList = JSON.parse(discountStorage || "{}")
    let sum = 0

    if(itemList){
      itemList.map((val:{[index:string]:string})=>{
        sum += Number(val["price"]) * Number(val["count"])
      })
    }
    if(discountList){
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
        <ItemsModal 
          show={showItems} 
          setshow={setshowItems} 
          Data={dataObj.items} 
          setselectItems={setselectItems} 
          renderTotal={renderTotal} 
          title="시술"
        />
        <span style={{padding:"15px"}}/>
        <Antdbutton onClick={()=> setshowDiscounts(true)}>할인</Antdbutton>
        <DiscountModal 
          show={showDiscounts} 
          setshow={setshowDiscounts} 
          Data={dataObj.discounts} 
          setselectDiscount={setselectDiscount} 
          renderTotal={renderTotal} 
          setselectItems={setselectItems} 
          title="할인"
        /> 
      </ButtonBox>
      <BasketBox>
        {selectItems.map((val:{[index:string]:string}, index:number) => 
        <CardBody key={index}>
          <div>
          <span>{val["name"]}</span>
          <Counter name={val["name"]} title="바구니" renderTotal={renderTotal} setselectItems={setselectItems}/>
          </div>
          <p>{val["price"]}</p>
        </CardBody>
        )}
        {selectDiscount.map((val:{[index:string]:string}, index:number) => 
        <CardBody key={index}>
          <div>
            <span>{val["name"]}</span>
            <DiscountItemsDropdown 
              discountName={val["name"]} 
              itemList={val["items"]} 
              rate={val["rate"]} 
              setselectDiscount={setselectDiscount}
              renderTotal={renderTotal}
            />
          </div>
          <span>-{val["discount"]}</span>
          <span>({val["rate"]}%)</span>
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
    </Body>
  )
}
