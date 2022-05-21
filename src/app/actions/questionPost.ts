import {
    POST_QUESTION_REQUEST,
    POST_QUESTION_SUCCESS,
    POST_QUESTION_FAILURE,
    GET_QUESTION_REQUEST,
    GET_QUESTION_SUCCESS,
    GET_QUESTION_FAILURE
} from '../constants/questionPost';
import axios from 'axios';

export const askQuestion = async(question : any) => {
    try {
        const {user} = localStorage.getItem('teachWiseUser') ? JSON.parse(localStorage.getItem('teachWiseUser')!) : null;
        const post = { 
            ...question, 
            createdBy: {
                id: user?._id,
                fullName: user?.fullName,
                email: user?.email
            } 
        };
        const response =await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/createPost`, post, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('teachWiseAuthToken')}`
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}


export const getQuestion = () => async(dispatch : any) => {
    try {
        dispatch({
            type: GET_QUESTION_REQUEST,
        });
        const response =await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/api/getPosts`, {
            timeout: 15000,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('teachWiseAuthToken')}`
            }
        });
        dispatch({
            type: GET_QUESTION_SUCCESS,
            payload: response?.data,
        });
    } catch (error) {
        dispatch({
            type: GET_QUESTION_FAILURE,
            payload: error,
        });
    }
}

export const submitProposal = async(proposal: any ) => {
    try {
        const user = localStorage.getItem('teachWiseUser') ? JSON.parse(localStorage.getItem('teachWiseUser')!) : null;
        const post = {
            ...proposal,            
            fullName: user?.fullName,
            email: user?.email,
            _id: user?._id
        };
        console.log(post);
        const response =await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/teacherProposal/${proposal.postID}`, post, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('teachWiseAuthToken')}`
            }
        });
        localStorage.setItem('teachWiseUser', JSON.stringify(response.data.updatedUser));
        return true;
    } catch (error) {
        return error;
    }
}
