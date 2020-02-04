import sc from 'styled-components'

export const Body = sc.div`
  margin-left: 34%;
  margin-right: 34%;
  height: 800px;
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 20px;
  background: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(239, 240, 244);
  border-image: initial;
  border-radius: 5px;
  padding: 20px;
`

export const UserNameBox = sc.div`
  text-align: center;
  border-bottom: 1.5px solid rgb(244, 247, 246);
`

export const ButtonBox = sc.div`
  height: 10%;
  text-align: center;
  padding: 10px
`
export const Antdbutton = sc.button`
  width: 40%;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #eff0f4;
  &: hover{
    transform: scale(1.2);
    transition: transform 0.2s linear;
  }
`
export const BasketBox = sc.div`
  height: 70%;
  border-bottom: 1.5px solid rgb(244,247,246);
`

export const FooterBox = sc.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`

export const Text = sc.span`
  font-weight: 700;
  font-size: -webkit-xxx-large;
`