import React from 'react'
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const Post = ({ post, onOpen }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => onOpen(post)}>
            <View style={styles.post}>
                <ImageBackground style={styles.image} source={{ uri: post.img }}>
                    <View style={styles.textWrapp}>
                        <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    post:{
        marginBottom: 15,
        overflow: 'hidden',
        width: '100%'
    },
    image: {
        width: '100%',
        height: 250
    },
    textWrapp:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    title:{
        color: '#fff'
    }
})