import { Card } from '@mui/material'
import React, { Key, useEffect } from 'react'
import { getMyDoubts } from 'src/app/actions/questionPost'
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from 'src/app/store';
import UserPostCard from 'src/@core/components/proposalComponents/UserPostCard';

const DoubtStatus = () => {
    const dispatch = useDispatch<AppDispatch>();
  const {userDoubt} = useSelector((state: RootState) => state.userDoubt);
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

export default DoubtStatus