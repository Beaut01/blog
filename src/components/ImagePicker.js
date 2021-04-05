import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Button, Platform, View, StyleSheet, Image } from 'react-native'

export default function PhotoPost({ onGet }) {
    const [img, setImg] = React.useState(null)

    React.useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (status !== 'granted') {
              alert('Извините, но вы не дали права на использование камеры!')
            }
          }
        })()
      }, [])

      const pickImage = async () => {
          let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: false,
              aspect: [16, 9],
              quality: 1
          })

          console.log(result)

          if (!result.cancelled){
              setImg(result.uri)
              onGet(result.uri)
          }
      }

      return(
          <View style={styles.wrapper}>
              <Button title='Загрузить фото' onPress={pickImage}/>
              {img && <Image source={{uri: img}} style={styles.image}/>}
          </View>
      )
}

const styles = StyleSheet.create({
    wrapper:{
        marginBottom: 10
    },
    image:{
        width: '100%',
        height: 200,
        marginTop: 10
    }
})