import React, { useState, useEffect} from 'react'
import { Modal } from 'antd'  
import Card from '../Card/Card'

type Itemsprops ={
  show:boolean
  setshow:Function
  setselectItems:Function
  Data:Object
  title: string
}

export default function Items({ show, setshow, Data, title, setselectItems}:Itemsprops) {
  let List:Array<Object> = Object.entries(Data)
  const handleClickCheck = ():void => {
    show ? setshow(false): setshow(true)
  }

  return (
    <Modal
    title={title}
    centered
    visible={show}
    onCancel={() => setshow(false)}
    style={{ height: "500px", overflow: "auto"}}
  >
    {List.map( (val:{[index: string]:any}) => 
        <div key={val[0]}>
              <Card key={val[0]} Data={val[1]} title={title} show={show}/>
         </div>
    )}
    <button onClick={handleClickCheck}>확인</button>
  </Modal>
  )
}
