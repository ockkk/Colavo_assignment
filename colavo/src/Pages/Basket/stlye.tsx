import sc from 'styled-components'
import {Button} from 'antd'

export const Body = sc.div`
  margin-left: 30%;
  margin-right: 30%;
  height: 800px;
  margin-top: 40px;
  border: solid;
`

export const UserNameBox = sc.div`
  text-align: center;
  border-bottom: solid;
`

export const ButtonBox = sc.div`
  height: 40px;
  padding: 10px;
`
export const Antdbutton = sc(Button)`
  width: 40%;
  height: 50px;
  border-radius: 10px;
`
// border: solid;
// text-align: center;
// padding: 20px;