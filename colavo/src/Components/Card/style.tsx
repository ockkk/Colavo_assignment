import sc from 'styled-components'
import {Checkbox} from 'antd'

export const CardBody = sc.div`
  padding: 10px;
  height: 70px;
  border-radius: 5px;
  margin-bottom: 13px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  &:hover{
    transform: scale(1.03);
    transition: transform 0.2s linear;
  }
`

export const Box = sc.div`
`

export const Title = sc.div`
`

export const Detail = sc.span`
`

export const Check = sc(Checkbox)`
  margin-right: 15px;
  padding-top: 10px;
  float: left;
`