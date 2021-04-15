import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Filmes extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const content = this.props.data;
		return(
			<View style={cards.cardFilme}>
				<Text>Título: {content.Title} <br/>Ano: {content.Year} <br/>Tipo (série/Filme): {content.Type}<br/></Text>
				<Image source={content.Poster}/>
			</View>
		);
	}
}

const cards = StyleSheet.create({
	cardFilme: {
		display: "flex",
		backgroundColor: "#e2e2e2",
		borderWidth: 2,
		marginBottom: 10,
		width: 400,
		height: 200
	}
});

export default Filmes;
