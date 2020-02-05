import React from 'react'
import {DiscountMenu, Btn} from './stlye'
import { Menu, Dropdown, Icon, Button } from 'antd'

type DiscountItemsDropdown = {
  itemList:any
  discountName:string
  rate:any
  setselectDiscount:Function
  renderTotal:Function
}

export default function DiscountItemsDropdown({ itemList, discountName, rate, setselectDiscount, renderTotal }:DiscountItemsDropdown){
   const handleDIscountItem = (e:any):void => {
    let itemName = e.key
    let oldStorage:string | null = localStorage.getItem('discount')
    let newSrotage:Array<{[index:string]:object}> = []
    let itemsPrice:number = 0

    newSrotage = JSON.parse(oldStorage || "{}")
    newSrotage.map((val:{[index:string]:any}) => {
      if(val["name"] === discountName){
        val["items"].map((item:{[index:string]:any})=>{
          if(item["name"].indexOf(itemName) === 0){
            item["discountcheck"] === true? item["discountcheck"] = false : item["discountcheck"] = true
          }
          if(item["discountcheck"]){
            itemsPrice += Number(item["price"]) * Number(item["count"])
          }
        })
      }
      val["discount"] = itemsPrice * rate
    })

    localStorage.setItem("discount", JSON.stringify(newSrotage))
    renderTotal(newSrotage)
  }

  const handleClickDelete = () => { 
    let oldStorage:string | null = localStorage.getItem('discount')
    let newSrotage:Array<object> = []
    
    newSrotage = JSON.parse(oldStorage || "{}")
    newSrotage = newSrotage.filter((val:{[index:string]:any})=> val["name"] !== discountName )

    localStorage.setItem("discount", JSON.stringify(newSrotage))
    setselectDiscount(newSrotage)
  }

  let discountItemList=(
    <div>
    <DiscountMenu
    style={{ 
      width: "180px",
      height: "150px", 
      overflow: "auto",
      borderRadius: "5px",
      boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
      }}>
    {
      itemList.map((item:{[index:string]:string}) => 
          <Menu.Item key={item["name"]} onClick={handleDIscountItem}>
            {/* <Checkbox style={{marginRight: "10px"}}/> */}
            {`${item["name"]} x ${item["count"]} \n
            ${Number(item["price"]) * Number(item["count"])}`}
          </Menu.Item>
      )
    }
    </DiscountMenu>
    <Button
      style={{
        float: "right",
        border: "none",
        borderRadius: "5px",
        boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
      }}
      onClick={handleClickDelete}
    >
      삭제
    </Button>
    </div>
  )

  return (
      <Dropdown overlay={discountItemList} trigger={["click"]}>
        <Btn style={{float:"right" ,border: "none" , boxShadow:"0 5px 10px rgba(0,0,0,0.1)"}}>
          수정 <Icon type="down"/>
        </Btn>
      </Dropdown>
  )
}
