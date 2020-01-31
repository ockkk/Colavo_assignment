export default async function getData(){
  let data = await fetch("https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData")
      .then(res => res.json())

  let items = data.items
  let discounts = data.discounts
  let currencyCode = data.currency_code

  let dataArr = [items, discounts, currencyCode]

  return dataArr
}