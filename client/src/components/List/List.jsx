import React from 'react';
import './List.scss';
import Card from '../Card/Card';
import { useFecth } from '../../hooks/useFetch';

const List = ({caId, maxPrice,sort,selectedSubCats}) => {

    const {data,loading,error} = useFecth(`/products?populate=*&[filters][categories][id][$eq]=${caId}${selectedSubCats?.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}`);

  return (
    <div className='list'>
        {loading 
        ? "is Loading"
        : data?.map(item =>(
                <Card item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default List