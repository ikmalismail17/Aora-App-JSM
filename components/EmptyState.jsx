import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({title, subtitle}) => {
  return (
    <View className='justify-center items-center px-4'>
        <Image
            source={images.empty}
            className='w-[270px] h-[215px]'
            resizeMode='contain'
        />

        <Text className='text-xl text-center font-psemibold text-white mt-2'>{title}</Text>
        <Text className='font-pmedium text-sm text-gray-100'>{subtitle}</Text>

        <CustomButton
            title='Create a video'
            handlePress={()=> router.push('/create')}
            containerStyles='my-5 w-full'
        />
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({})