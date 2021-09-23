// TODO: Alan
//
//  BarterListing
//  Bazaar 13-Sep-2021-233539
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


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
		return <View
				style={styles.background}>
				<Image
					source={require("./../../assets/images/barter-listing-background-mask.png")}
					style={styles.Image}/>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 15,
						right: 30,
						top: 19,
						bottom: -554,
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.Logo}>B</Text>
					<Text
						style={styles.ListingTitle}>{Title}</Text>
					<Text
						style={styles.Header}>{Header}</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text style={styles.Content}>
                            {Content}
                    </Text>
				</View>
			</View>
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
		top: 0,
		height: 642,
	},
	Logo: {
		color: "rgb(231, 111, 81)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		marginLeft: 119,
		marginRight: 118,
	},
	ListingTitle: {
		color: "black",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 257,
	},
	Header: {
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
	},
})
