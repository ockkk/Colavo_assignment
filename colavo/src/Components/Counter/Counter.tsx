import React, {useState, useEffect} from 'react'
import { Icon, Button, Dropdown, Menu } from 'antd';

type Counterprops = {
  name:string
  title:string
  renderTotal:Function
}
let numberArr:Array<number> = []
for(let i = 1; i < 101; i++){
  numberArr.push(i)
}

export default function Counter({ name, title, renderTotal }:Counterprops) {
  const [count, setcount] = useState<string>("1")
  const [baketCount, setbasketCount] = useState<string>()
  
  const handleClickCount = (e:any):void => {
    setcount(e.key)
    setbasketCount(e.key)
    let oldItemStorage:any = localStorage.getItem('items')
    let newItemsSrotage = []

    newItemsSrotage = JSON.parse(oldItemStorage)

    for(let i = 0; i < newItemsSrotage.length; i++){
      if(newItemsSrotage[i]["name"] === name){
        newItemsSrotage[i]["count"] = e.key
      } 
    }
    localStorage.setItem("items",JSON.stringify(newItemsSrotage))

    let oldDiscountStorage:any = localStorage.getItem('discount')
    let newDiscountStorage = []

    newDiscountStorage = JSON.parse(oldDiscountStorage)
    
    if(oldDiscountStorage){
      console.log(e.key)
      for(let i = 0; i < newDiscountStorage.length; i++){
        console.log(newDiscountStorage[i])
        newDiscountStorage[i]["items"].map((item:{[index:string]:string}) => {
          console.log(item)
          if(item["name"] === name){
            item["count"] = e.key
          }
        })
      }
      console.log("[COUNTER]", newDiscountStorage)
      localStorage.setItem("discount",JSON.stringify(newDiscountStorage))
    }
    renderTotal()
  }
  
  const BasketCount = () => {
    let Storage:any = localStorage.getItem("items")
    let itemList = JSON.parse(Storage)
    itemList = itemList.filter((val:{[index:string]:string}) => val["name"] === name)

    setbasketCount(itemList[0]["count"])
  }

  useEffect(() => {
    BasketCount()
  }, [])
  let menu = (
    <div>
      <Menu style={{ 
        height: "150px", 
        overflow: "auto",
        borderRadius: "5px",
        marginBottom: "13px",
        boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
        }}>
        {
          numberArr.map((val:number) => {
            return(
            <Menu.Item key={val} onClick={handleClickCount} style={{margin:"0px", height:"30px", textAlign: "center" }}>
              {val}
            </Menu.Item>)
          })
        }
      </Menu>
      {title === "바구니" && <Button>삭제</Button>}
    </div>
  )
  return (
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button style={{float:"right" ,border: "none" , boxShadow:"0 5px 10px rgba(0,0,0,0.1)"}}>
            {title === "바구니" ? baketCount : count } <Icon type="down"/>
          </Button>
        </Dropdown>
  )
}
