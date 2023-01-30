import { View, Text, SafeAreaView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {ChevronDownIcon } from "@heroicons/react/24/outline";
import * as Icons from "react-native-heroicons/solid";

const Homescreen = () => {
  const nvgn = useNavigation();


  useLayoutEffect(() => {
    nvgn.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <SafeAreaView  >
      <Text className="text-green-800"  >

        <View className=" flex-row items-center mx-4 space-x-2">
          <Image alt='milkmocha'
           source={{
            uri: "https://you.com/proxy?url=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8AccLqwPLfHMXTUlHvr1nwHaHa%26pid%3DApi",
           }}
           className="h-7 w-7 bg-gray-300 p-6 rounded-full mt-6 ml-6 "
          />
          <View className="pt-6 pl-2 " >
            <Text className="text-gray-400">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location
             <ChevronDownIcon size={20}  />
             {/* <Icons.SparklesIcon /> */}
            </Text>
          </View>
        </View>

      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Homescreen
