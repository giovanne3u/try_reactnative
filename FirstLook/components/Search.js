import React from 'react'
import { TextInput } from 'react-native'

export default class Search extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			city: 'Nancy'
		}
	}

	setCity(c){
		this.setState({
			city: c
		})
	}

	render () {
		return(
			<TextInput
				style={{height:40 , borderColor: 'gray' , borderWidth: 1, padding:5}}
				onChangeText={(text) => this.setCity(text)}
				value={this.state.city}
			/>
		)
	}
}
