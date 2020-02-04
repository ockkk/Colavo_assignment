import React, {useState, useEffect} from 'react'
import Counter from '../Counter/Counter'
import { CardBody, Box, Title, Detail, Check } from './style'

type Cardprops = {
  title: string
  Data: {[index: string]:string}
  show?:boolean
  renderTotal:Function
}

export default function Card({ title, Data, show, renderTotal}:Cardprops) {
  const [checked, setchecked] = useState<boolean>(false)

  const handleItemCheck = (e:any):void => {
    let items:Array<string> = e.target.value.split(",")
    let name = items[0]
    let price = items[1]
    let obj:any ={"name": name, "price":price, "count": "1"}
    let oldStorage:any = localStorage.getItem('items')
    let newSrotage:any = []
    
    if(checked){
      setchecked(false)
      newSrotage = JSON.parse(oldStorage)
      newSrotage = newSrotage.filter((val:{[index:string]:string}) => val["name"] !== name)
      localStorage.setItem("items", JSON.stringify(newSrotage))
    } else {
      setchecked(true)
      if(oldStorage){
        newSrotage = JSON.parse(oldStorage)
        newSrotage = newSrotage.filter((val:{[index:string]:string}) => val["name"] !== name)
        localStorage.setItem("items", JSON.stringify(newSrotage)) 
      }
      localStorage.setItem("items", JSON.stringify(newSrotage.concat(obj)))
    }
  }

  const handleDiscountCheck = (e:any):void => {
    let discount = e.target.value.split(",")
    let name = discount[0]
    let rate = discount[1]

    let itemStorage:any = localStorage.getItem('items')
    let itemList = JSON.parse(itemStorage)
    let itemsName:any = []
    let itemsPrice = 0
    
    if(itemList){
      itemList.map((val:{[index:string]:string})=>{
        itemsName.push({"name": val["name"], "price": val["price"], "count":val["count"], "discountcheck":true})
        itemsPrice += Number(val["price"]) * Number(val["count"])
      })
    }
    let itemDiscount = itemsPrice * rate

    let obj:any ={"name": name, "rate":rate, "items": itemsName, "discount": itemDiscount}
    let oldStorage:any = localStorage.getItem('discount')
    let newSrotage:any = []
    
       
    if(checked){
      setchecked(false)
      newSrotage = JSON.parse(oldStorage)
      newSrotage = newSrotage.filter((val:{[index:string]:string}) => val["name"] !== name)
      localStorage.setItem("discount", JSON.stringify(newSrotage))
    } else {
      setchecked(true)
      if(oldStorage){
        newSrotage = JSON.parse(oldStorage)
        newSrotage = newSrotage.filter((val:{[index:string]:string}) => val["name"] !== name)
        localStorage.setItem("discount", JSON.stringify(newSrotage)) 
      }
      localStorage.setItem("discount", JSON.stringify(newSrotage.concat(obj)))
    }
  }

  useEffect(()=> {
    setchecked(false)
  },[show])

  return (
    <CardBody>
      <Box>
        <span>
        {title === "시술" ? <Check onClick={handleItemCheck} checked={checked} value={[Data["name"],Data["price"]]}/> : 
         title === "할인" ? <Check onClick={handleDiscountCheck} checked={checked} value={[Data["name"], Data["rate"]]}/> : 
         undefined}
        </span>
        <span>
        <Title>
          {Data["name"]}
          { title === "시술" && checked ? <Counter name={Data["name"]} title={"시술"} renderTotal={renderTotal}/> : undefined}
        </Title>
          <Detail>
            {Data["price"]}
          </Detail>
          <Detail>
            {Data["rate"]}
          </Detail>
        </span>
      </Box>
    </CardBody>
  )
}
