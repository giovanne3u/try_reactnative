import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

export default class About extends React.Component{

	render () {
		return (
			<View style={style.container}>
				<Text style={style.title}>About</Text>
				<Text>
					This app has been made by Hugo Torzuoli from Grafikart Tutorial :)
				</Text>
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
	}
})
