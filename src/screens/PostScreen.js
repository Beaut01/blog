import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Button, Alert, Dimensions, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, toggleBooked } from '../redux/actions/post'

export const PostScreen = ({ route, navigation }) => {
    const postId = route.params?.postId
    const post = useSelector(({post}) => post.allPosts.find(p => p.id === postId))
    const booked = useSelector(({post}) => post.bookedPosts.some(post => post.id === postId))
    const iconName = booked === true ? 'star' : 'star-outline'

    const dispatch = useDispatch()

    const handleBooked = React.useCallback(() => {
        dispatch(toggleBooked(post))
    }, [dispatch, post])
    
    const removePost = () => {
        Alert.alert(
            "Удаление поста.",
            "Точно хотите удалить этот пост?",
            [
              {
                text: "Закрыть",
                style: "cancel"
              },
              { text: "Удалить",
                style: 'destructive', 
                onPress() {
                    dispatch(deletePost(postId))
                    navigation.navigate('Main')
                }
            }
            ],
            { cancelable: true }
          )
    }

    if (!post) {
        return null
    }

    return (
        <View>
            <ImageBackground source={{uri: post.img}} style={styles.image}>
                <View style={styles.titleWrapp}>
                    <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={handleBooked}>
                        <Ionicons size={22} color='#fff' name={iconName} style={{paddingRight: 10}}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.textWrapp}>
                <Text>{post.text}</Text>
            </View>
            <Button title='Удалить' onPress={removePost} color='#663399'/>
        </View>    
    )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height: 500,
    },
    textWrapp:{
        padding: 10
    },
    titleWrapp:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title:{
        color: '#fff',
        paddingLeft: Dimensions.get('window').width / 2.3
    }
    
})