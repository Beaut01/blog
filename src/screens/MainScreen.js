import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { PostList } from '../components/PostList'
import {loadPosts} from '../redux/actions/post'

export const MainScreen = ({ navigation }) => {
    const handleOpenPost = post => {
        navigation.navigate('Post', {postId: post.id})
    }

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(({post}) => post.allPosts)
    const loading = useSelector(({post}) => post.loading)

    if (loading) {
        return(
            <View style={styles.center}>
                <ActivityIndicator color='#663399'/>
            </View>
        )
    }
    return (
        <PostList data={allPosts} onOpen={handleOpenPost}/> 
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})


