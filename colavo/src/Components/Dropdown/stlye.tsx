import sc from 'styled-components'
import {Menu, Dropdown, Button} from 'antd'

export const DiscountMenu = sc(Menu)`
  height: "150px";
  overflow: "auto";
  borderRadius: "5px";
  marginBottom: "13px";
  boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
`

export const DiscountDropdown = sc(Dropdown)`

`

export const Btn = sc(Button)`
  float:"right";
  border: "none";
  boxShadow:"0 5px 10px rgba(0,0,0,0.1)"
`