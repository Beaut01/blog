import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import { Post } from './Post'

export const PostList = ({ data, onOpen }) => {

    if(!data.length) {
        return (
            <View style={styles.empty}>
                <Text style={styles.text}>У вас ещё нет постов!</Text>
            </View>
        )
    }

    return (
        <View style={styles.wrapp}>
            <FlatList 
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => {
                    return(
                        <Post post={item} onOpen={onOpen}/>
                    )
                }}
            />
        </View>    
    )
}

const styles = StyleSheet.create({
    wrapper:{
        padding: 10
    },
    empty: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
})
