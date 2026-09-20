import React from 'react'
import axios from 'axios'
import {useEffect} from 'react'
import {pro} from '../redux/fetchApi'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import {setLoading, setError, setItems} from '../redux/features/productSlice.js'
import {useDispatch, useSelector} from 'react-redux'
import ProductPageLayout from '../components/ProductPageLayout'
export default function Product() {
const dispatch = useDispatch();
const {items, loading, error}=useSelector((state)=>state.products)

useEffect(() => {
    const loadData = async () => {
      try {
        dispatch(setLoading(true));
        const data = await pro();
        dispatch(setItems(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    loadData();
  }, [dispatch]);


  return (
    <div>
        <NavBar/>
        {loading ? (
        <div className="text-center py-20 font-bold">Loading products...</div>
      ) : (
        <ProductPageLayout items={items} />
      )}
        <Newsletter/>
        <Footer/>
    </div>
  )
}