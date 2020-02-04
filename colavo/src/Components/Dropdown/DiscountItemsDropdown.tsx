import React from 'react'
import { Menu, Dropdown, Button, Icon } from 'antd'

type DiscountItemsDropdown = {
  itemList:any
}

export default function DiscountItemsDropdown({ itemList }:DiscountItemsDropdown){
  const handleDIscountItem = (e:any):void => {
    console.log(e.key)
  }

  let discountItemList=(
    <Menu>
    {
      itemList.map((item:any) => 
          <Menu.Item key={item["name"]} onClick={handleDIscountItem}>
            {item["name"]}
            {item["price"]}
          </Menu.Item>
      )
    }
    </Menu>
  )

  return (
    <div>
      <Dropdown overlay={discountItemList} trigger={["click"]}>
        <Button>
          수정 <Icon type="down"/>
        </Button>
      </Dropdown>
    </div>
  )
}
