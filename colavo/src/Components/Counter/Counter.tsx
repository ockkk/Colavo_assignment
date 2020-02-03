import React, {useState} from 'react'
import { Icon, Button, Dropdown, Menu } from 'antd';

type Counterprops = {
  name:string
}
let numberArr:Array<number> = []
for(let i = 1; i < 11; i++){
  numberArr.push(i)
}

export default function Counter({ name }:Counterprops) {
  const [count, setcount] = useState<string>("1")
  
  const handleClickCount = (e:any):void => {
    setcount(e.key)
    let oldStorage:any = localStorage.getItem('items')
    let newSrotage:any = []

    newSrotage = JSON.parse(oldStorage)
    
    for(let i = 0; i < newSrotage.length; i++){
      if(newSrotage[i][name]){
        newSrotage[i][name]["count"] = e.key
      } 
    }
    localStorage.setItem("items",JSON.stringify(newSrotage))
  }
  
  let menu = (
    <Menu>
      {
        numberArr.map((val:number) => {
          return(
          <Menu.Item key={val} onClick={handleClickCount}>
            {val}
          </Menu.Item>)
        })
      }
    </Menu>
  )
  return (
    <div>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button>
            {count} <Icon type="down"/>
          </Button>
        </Dropdown>
    </div>
  )
}
