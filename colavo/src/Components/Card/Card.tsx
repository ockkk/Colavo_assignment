import React, {useState, useEffect} from 'react'
import Counter from '../Counter/Counter'
import { Body, Box, Title, Detail } from './style'
import {Checkbox} from 'antd'

type Cardprops = {
  title: string
  Data: {[index: string]:string}
  show:boolean
  selectDiscountObj?:any
}

export default function Card({ title, Data, show,selectDiscountObj }:Cardprops) {
  const [checked, setchecked] = useState<boolean>(false)

  const handleItemCheck = (e:any):void => {
    let items:Array<string> = e.target.value.split(",")
    let name = items[0]
    let price = items[1]
    let obj:any ={}
    obj[name] ={"price":price, "count": "1"}
    let oldStorage:any = localStorage.getItem('items')
    let newSrotage:any = []
    
    if(checked){
      setchecked(false)
      newSrotage = JSON.parse(oldStorage)
      newSrotage = newSrotage.filter((val:any) => !val[name])
      localStorage.setItem("items", JSON.stringify(newSrotage))
    } else {
      setchecked(true)
      if(oldStorage){
        newSrotage = JSON.parse(oldStorage)
        for(let i = 0; i < newSrotage.length; i++){
          if(!newSrotage[i][name]){
            localStorage.setItem("items", JSON.stringify(newSrotage.concat(obj))) 
          } 
        }
      }
      localStorage.setItem("items", JSON.stringify(newSrotage.concat(obj)))
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

  useEffect(()=> {
    setchecked(false)
  },[show])

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
        { title === "시술" && checked ? <Counter name={Data["name"]} /> : undefined}
      </Box>
    </Body>
  )
}
