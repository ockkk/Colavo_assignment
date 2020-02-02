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

export default function Discount({ show, setshow, Data, title, setselect }:Itemsprops) {
  const [selectDiscount, setselectDiscount] = useState()
  let List:Array<Object> = Object.entries(Data)
  let selectDiscountObj:any = {}

  const handleClickCheck = ():void => {
    show ? setshow(false): setshow(true)
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
        <Card title={title} key={props[0]} Data={props[1]} setselectItems={setselectDiscount} selectDiscountObj={selectDiscountObj} setshow={setshow}/>
        </div>
    )}
    <button onClick={handleClickCheck}>확인</button>
  </Modal>
  )
}