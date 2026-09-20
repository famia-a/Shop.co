import axios from 'axios'

export const  pro =async  ()=>{
  const res=await axios.get('https://fakestoreapi.com/products')
  const a = res.data
  return a
}