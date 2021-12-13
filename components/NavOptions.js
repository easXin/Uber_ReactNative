import React from 'react'
import {FlatList,StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id:"1",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen"
    },
    {
        id:"2",
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"EatScreen"
    }
]
const NavOptions = () => {
    return (
        <FlatList
           // style={styles.flatList}
            data={data}
            keyExtractor={(item)=>item.id}
            horizontal // keep the data horizontally
            renderItem={({item})=>(
                <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 ml-3 w-40`} >
                    <View>
                        <Image
                            source={{
                                uri:item.image
                            }}
                            style={styles.image}
                        />
                        <Text style={[tw`mt-2 pl-4 text-lg font-semibold`]}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright"
                            color="white"
                            type='antdesign'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
        
    )
}

export default NavOptions

const styles = StyleSheet.create({
    image:{
        width:120,
        height:120,
        resizeMode:'contain'  // keep aspect ratio
    },
 

})
