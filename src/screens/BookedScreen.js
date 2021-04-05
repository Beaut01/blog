import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPosts } from '../redux/actions/post'
import { PostList } from '../components/PostList'

export const BookedScreen = ({navigation}) => {
    const handleOpenPost = post => {
        navigation.navigate('Post', {
            postId: post.id,
            booked: post.booked
        })
    }

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const bookedPosts = useSelector(({post}) => post.bookedPosts)

    return (
        <PostList data={bookedPosts} onOpen={handleOpenPost}/>      
    )
}

