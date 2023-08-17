import { GridMainStyles } from './gridmain.styles'
import { Cards } from '..'
import { TestApi } from '../../api/TestApi'
import { useEffect } from 'react';
import { getDataApi } from '../../api/getDataApi';

export const GridMain = () => {
  useEffect(()=>{
    getDataApi("users")
  })
  console.log(getDataApi("users"));
  return (
    <GridMainStyles>
        
    </GridMainStyles>
  )
}
