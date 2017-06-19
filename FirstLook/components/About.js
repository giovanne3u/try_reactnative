import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator } from 'react-native'

export default class About extends React.Component{

	render () {
		return (
			<View style={style.container}>
				<Text style={style.title}>About</Text>
				<Text>
					This app has been made by Hugo Torzuoli from Grafikart Tutorial :)
				</Text>
				<ActivityIndicator style={style.spaced} color="#FF0000" size="large" animated={true}/>
			</View>
		)
	}

}

const style = StyleSheet.create({
	title:{
		fontSize: 30,
		marginTop: 20,
		marginBottom:10
	},
	container:{
		margin:20
	},
	spaced:{
		margin:10
	}
})
