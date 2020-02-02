import React, {useState} from 'react'
import { Icon,Button } from 'antd';

type Counterprops = {
  name:string
  selectItemObj:any
}

export default function Counter({ name, selectItemObj }:Counterprops) {
  const [visible, setvisible] = useState<string>("none")
  const [count, setcount] = useState<string>("1")
  const [showCount, setshowCount] = useState<string>("1")
  
  let numberArr:Array<number> = []
  for(let i = 1; i < 11; i++){
    numberArr.push(i)
  }

  const handleClickDropdown = ():void => {
    visible === "none"? setvisible("block") : setvisible("none")
  }

  const hadleClickCount = (e:any):void => {
    setcount( e.target.innerHTML)
  }

  const handleClickConfirm = ():void => {
    selectItemObj[name]["counter"] = count
    setshowCount(count)
    setvisible("none")
  }
  
  return (
    <div>
      <button onClick={handleClickDropdown}> {showCount} <Icon type="down" /></button>
        <ul style={{display:`${visible}`}}>
        {
          numberArr.map( (val:number) => {
          return  (
              <li key={val} onClick={hadleClickCount}> 
                {val} 
              </li>
            )
          })
        }
        <Button onClick={handleClickDropdown}>실행취소</Button>
        <Button onClick={handleClickConfirm}>완료</Button>
      </ul>
    </div>
  )
}
