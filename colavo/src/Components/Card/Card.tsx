import React, {useState, useEffect} from 'react'
import Counter from '../Counter/Counter'
import { Body, Box, Title, Detail } from './style'
import {Checkbox} from 'antd'

type Cardprops = {
  title: string
  Data: {[index: string]:string}
  setselectItems:Function
  setshow:Function
  selectItemObj?:any
  selectDiscountObj?:any
}

export default function Card({ title, Data, setselectItems, selectItemObj, selectDiscountObj }:Cardprops) {
  const [checked, setchecked] = useState<boolean>(false)

  const handleItemCheck = (e:any):void => {
    let items:Array<string> = e.target.value.split(",")
    let name:string= items[0]
    let price:string = items[1]

    if(checked){
      setchecked(false)
      delete selectItemObj[name]
    } else {
      setchecked(true)
      selectItemObj[name] = {"price" : price, "counter" : 1}
      setselectItems(selectItemObj)
    }
  }

  const handleDiscountCheck = (e:any):void => {
    let Discount = e.target.value.split(",")
    let name = Discount[0]
    let rate = Discount[1]

    if(checked){
      setchecked(false)
      delete selectDiscountObj[name]
    } else {
      setchecked(true)
      selectDiscountObj[name] = rate
    }
  }
  useEffect(()=> {console.log("Card 실행")},[])
  return (
    <Body>
      <Box>
        <span>
        {title === "시술" ? <Checkbox onClick={handleItemCheck} checked={checked} value={[Data["name"],Data["price"]]}/> : 
         title === "할인" ? <Checkbox onClick={handleDiscountCheck} checked={checked} value={[Data["name"], Data["rate"]]}/> : 
         undefined}
        </span>
        <span>
        <Title>
          {Data["name"]}
        </Title>
        <Detail>
          {Data["price"]}
          {Data["rate"]}
        </Detail>
        </span>
        { title === "시술" && checked ? <Counter name={Data["name"]} selectItemObj={selectItemObj}/> : undefined}
      </Box>
    </Body>
  )
}
