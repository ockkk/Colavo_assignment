export default async function getData(set:any){
  let data = await fetch("https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData")
      .then(res => res.json())
  set(data)
}