import * as Font from 'expo-font'
import { DB } from './db'

export async function fonts() {
    try{
        await Font.loadAsync({
            'noto-regular': require('../assets/fonts/NotoSansJP-Regular.otf'),
            'noto-bold': require('../assets/fonts/NotoSansJP-Bold.otf')
        })
        await DB.init()
        console.log('Database started...')
    } catch(e) {
        console.log('Error: ', e)
    }
}