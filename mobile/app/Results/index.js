import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect } from 'expo-router'

export default function index() {

  return (
    <Redirect href={'Results/1'}/>
  )
}