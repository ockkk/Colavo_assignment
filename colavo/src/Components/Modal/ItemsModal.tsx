import React from 'react'
import { CustomModal } from './style'
import Card from '../Card/Card'

type Itemsprops ={
  show:boolean
  setshow:Function
  setselectItems:Function
  Data:Object
  title: string
  renderTotal:Function
}

export default function Items({ show, setshow, Data, title, setselectItems, renderTotal}:Itemsprops) {
  let List:Array<Object> = Object.entries(Data)
  
  const handleClickCheck = ():void => {
    setshow(false)
    let storageData:string | null= localStorage.getItem("items")
    localStorage.setItem("previtems", storageData || "{}")
    setselectItems(JSON.parse(storageData || "{}"))
  
    renderTotal()
  }

  const handleClickCancle = ():void => {
    setshow(false)
    let prevStorage:string | null = localStorage.getItem("previtems")
    prevStorage ? localStorage.setItem("items", prevStorage) : localStorage.removeItem("items")

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
