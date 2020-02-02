import React, { useState, useEffect} from 'react'
import { Modal } from 'antd'  
import Card from '../Card/Card'

type Itemsprops ={
  show:boolean
  setshow:Function
  setselect:Function
  Data:Object
  title: string
}

export default function Items({ show, setshow, Data, title, setselect}:Itemsprops) {
  const [selectItems, setselectItems] = useState<Array<string>>([])

  let List:Array<Object> = Object.entries(Data)
  let selectItemObj:any = {}

  console.log("MODAL",selectItems)
  const handleClickCheck = ():void => {
    show ? setshow(false): setshow(true)
    setselect()
  }

  return (
    <Modal
    title={title}
    centered
    visible={show}
    onCancel={() => setshow(false)}
  >
    {List.map( (props:{[index: string]:any}) => 
        <div key={props[0]}>
        <Card title={title} key={props[0]} Data={props[1]} setselectItems={setselectItems} selectItemObj={selectItemObj} setshow={setshow}/>
        </div>
    )}
    <button onClick={handleClickCheck}>확인</button>
  </Modal>
  )
}
