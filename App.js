import React, {Component, Fragment } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Api from "./components/Api";
import Filmes from "./components/Filmes";

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			filmes: [],
			s: ""
		}
	}

	componentDidMount(){
		if(this.state.s.length > 0){
			Api.get().then(resp =>{
				this.setState({ filmes: resp.data.Search });
			});
		}
	}

	generateData = () => {
		return ( 
			<Fragment>
			 	{ 
					this.state.filmes.map((item, key) => {
						return (
			 				<Filmes data={item}/>
						);
					})
				} 
			</Fragment>
		);
	}

	searchFull = () => {
		if(this.state.s.length > 0){
			Api.get().then(resp =>{
				this.setState({ filmes: resp.data.Search});
				console.log(this.state.filmes.length > 0);
			});
		}
		else this.setState({filmes: []});
	}

	stateHandler = (text) =>{ 
		this.setState({s: text}); 
	}

	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.titulo}>Busca Filme</Text>
				<TextInput 
					onChange={(text) => this.stateHandler(text.target.value)}
					style={styles.input}
					placeholder="Pesquisar"
				/>
				<Button title="Pesquisar" onPress={this.searchFull}/>
				{this.state.filmes.length > 0 ? this.generateData() : ""}
		  </View>
		);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    alignItems: 'center',
  },
  input: {
		top: 100,
		borderWidth: 1,
		borderColor: '#b8b8b8',
    borderRadius: 10,
		width: 200,
		height: 40,
		backgroundColor: '#fff'
  },
	titulo: {
		color: '#000000',
		marginTop: 50,
		fontWeight: 'bold',
		fontSize: 30
	}
});

export default App;
