import React from 'react'
import {DiscountMenu, Btn} from './stlye'
import { Menu, Dropdown, Button, Icon } from 'antd'

type DiscountItemsDropdown = {
  itemList:any
  discountName:string
  rate:any
}

export default function DiscountItemsDropdown({ itemList, discountName, rate }:DiscountItemsDropdown){
  const handleDIscountItem = (e:any):void => {
    let itemName = e.key
    let oldStorage:any = localStorage.getItem('discount')
    let newSrotage:any = []
    let itemsPrice:number = 0

    newSrotage = JSON.parse(oldStorage)
    newSrotage.map((val:any) => {
      if(val["name"] === discountName){
        val["items"].map((item:{[index:string]:any})=>{
          if(item["name"].indexOf(itemName) === 0){
            console.log(item["discountcheck"])
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
  }

  let discountItemList=(
    <div>
    <DiscountMenu
    style={{ 
      width: "150px",
      height: "150px", 
      overflow: "auto",
      borderRadius: "5px",
      marginBottom: "13px",
      boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
      }}>
    {
      itemList.map((item:{[index:string]:string}) => 
          <Menu.Item key={item["name"]} onClick={handleDIscountItem}>
            {`${item["name"]} x ${item["count"]} \n
            ${Number(item["price"]) * Number(item["count"])}`}
          </Menu.Item>
      )
    }
    </DiscountMenu>
    <Btn>삭제</Btn>
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
