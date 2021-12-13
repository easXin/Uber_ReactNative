import React from 'react'
import { StyleSheet, View, Text ,SafeAreaView, Image} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        // h : height  p: padding
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    source={{
                        uri:'https://links.papareact.com/gzs',
                    }}
                    style={styles.logo}
                />
                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen


// export default HomeScreen

const styles = StyleSheet.create({
    logo:{
        width:100, height:100, resizeMode:"contain"
    }
})

