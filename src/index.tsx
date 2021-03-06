import React, { PureComponent } from 'react'
import { Platform, SafeAreaView, ViewStyle, View, StatusBar } from 'react-native'

interface SafeViewProps {
  style?: ViewStyle
}

export default class SafeView extends PureComponent<SafeViewProps>{
  render() {
    const { style, ...rest } = this.props
    if (Platform.OS === 'ios') {
      const isHighVersion = parseInt(String(Platform.Version), 10) >= 11
      return <SafeAreaView
        style={[style, {
          marginTop: isHighVersion ? 0 : 22,
          flex: 1,
          width: '100%'
        }]}
        {...rest}
      >
        {this.props.children}
      </SafeAreaView>
    }
    return <View style={[style, {
      marginTop: StatusBar.currentHeight,
      flex: 1,
      width: '100%'
    }]}
      {...rest}
    >
      {this.props.children}
    </View>
  }
}
