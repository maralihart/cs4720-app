// TODO: Alan
//
//  BarterListing
//  Bazaar 13-Sep-2021-233539
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { ScrollView, Image, StyleSheet, Text, View } from "react-native"


export default class BarterListing extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render(Title, Content, Header) {
        var Title = this.props.Title;
        var Content = this.props.Content;
        var Header = this.props.Header;
		return <ScrollView>
				<Image
					source={require("./../../assets/images/barter-listing-background-mask.png")}
					style={styles.Image}/>
					<Text
						style={styles.ListingTitle}>{Title}</Text>
					<Text
						style={styles.Header}>{Header}</Text>
						<Text style={styles.Content}>
                            {Content}
                   		</Text>
				</ScrollView>
	}
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: "white",
		flex: 1,
	},
	Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 65,
		height: 442,
	},
	ListingTitle: {
		left: 15,
		color: "black",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 257,
	},
	Header: {
		left: 15,
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 9,
	},
	Content: {
		color: "rgb(102, 102, 102)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 330,
		paddingBottom: 10,
		left: 15,
	},
})
