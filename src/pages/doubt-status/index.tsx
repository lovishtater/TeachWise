import { Card } from '@mui/material'
import React, { Key, useEffect } from 'react'
import { getMyDoubts } from 'src/app/actions/questionPost'
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from 'src/app/store';
import UserPostCard from 'src/@core/components/proposalComponents/UserPostCard';

const index = () => {
    const dispatch = useDispatch<AppDispatch>();
  const {userDoubt} = useSelector((state: RootState) => state.userDoubt);
  const userDoubt1 = useSelector((state: RootState) => state);
  console.log(userDoubt1);
  useEffect(() => {
    dispatch(getMyDoubts())
  }, [])
  return (
    <>
      {userDoubt && userDoubt.length > 0 && userDoubt.map((question:any, index: Key) => (
        <UserPostCard  question={question} key={index} />
        ))} 
    </>
  )
}

export default index