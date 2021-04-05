import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
     ScrollView
} from 'react-native'
import { useDispatch } from 'react-redux'
import PhotoPost from '../components/ImagePicker'
import { addPost } from '../redux/actions/post'

export const CreateScreen = ({ navigation }) => {
    const [text, setText] = React.useState('')
    const [image, setImage] = React.useState('')

    const dispatch = useDispatch()

    const createPost = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: image, 
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    }

    const photoGetHandler = uri => {
        setImage(uri)
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapp}> 
                    <Text style={styles.title}>Создайте свой пост</Text>
                    <TextInput style={styles.input} value={text} multiline placeholder='Введите текст...' onChangeText={setText} /> 
                    <PhotoPost onGet={photoGetHandler}/>
                    <Button title='Добавить' color='#663399' onPress={createPost} disabled={!text || image === ''}/> 
                </View>  
            </TouchableWithoutFeedback>
        </ScrollView>  
    )
}

const styles = StyleSheet.create({
    wrapp: {
        padding: 10
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 10
    },
    input: {
        padding: 10,
        marginBottom: 10
    },
})