import { View, Text } from 'react-native'
import React from 'react'
import NomoiTest from './NomoiTest'
import questions1 from '../../data/questions1'

const NomoiTest1 = () => {
  return (
    <View>
      <NomoiTest questions={questions1} nomoiResults={"NomoiResult1"}/>
    </View>
  )
}

export default NomoiTest1