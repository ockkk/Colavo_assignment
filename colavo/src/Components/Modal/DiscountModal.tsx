import React from 'react'
import { CustomModal } from './style'
import Card from '../Card/Card'

type Itemsprops ={
  show:boolean
  setshow:Function
  setselectDiscount:Function
  Data:Object
  title: string
  renderTotal: Function
  setselectItems:Function
}

export default function Discount({ show, setshow, Data, title, setselectDiscount, renderTotal, setselectItems }:Itemsprops) {
  let List:Array<Object> = Object.entries(Data)

  const handleClickCheck = ():void => {
    setshow(false)
    let storageData:any= localStorage.getItem("discount")
    localStorage.setItem("prevdiscount", storageData)
    setselectDiscount(JSON.parse(storageData))
  }

  const handleClickCancle = ():void => {
    setshow(false)
    let prevStorage:any = localStorage.getItem("prevdiscount")
    prevStorage ? localStorage.setItem("discount", prevStorage) : localStorage.removeItem("discount")
  }

  return (
    <CustomModal
    title={title}
    centered
    visible={show}
    bodyStyle={{height:"700px", overflow:"auto"}}
    onOk={handleClickCheck}
    onCancel={handleClickCancle}
  >
    {List.map( (val:{[index: string]:any}) => 
        <div key={val[0]}>
          <Card key={val[0]} Data={val[1]} title={title} show={show} renderTotal={renderTotal} setselectItems={setselectItems}/>
        </div>
    )}
  </CustomModal>
  )
}
