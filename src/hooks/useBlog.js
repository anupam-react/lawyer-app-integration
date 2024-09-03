import { useEffect, useState } from "react";
import { fetchApiData } from "../utils";

const useBlog = () => {
  const [category, setCategory] = useState([])
  const [blogPopular, setBlogPopular] = useState([])
  const [blog, setBlog] = useState([])

  const getBlogCategory = async ()=>{
    const data = await fetchApiData('https://flyweisgroup.com/api/api/v1/BlogCategory/getBlogCategory')
    setCategory(data?.data)
  }
  const getBlogPopular = async ()=>{
    const data = await fetchApiData('https://flyweisgroup.com/api/api/v1/Blog/getBlogPopular')
    setBlogPopular(data?.data)
  }
  const getBlog = async ()=>{
    const data = await fetchApiData('https://flyweisgroup.com/api/api/v1/Blog/getBlog')
    setBlog(data?.data)
  }


  useEffect(()=>{
    getBlogCategory()
    getBlogPopular()
    getBlog()
  },[])

  return {
    category,
    blogPopular,
    blog
  };
};

export default useBlog;