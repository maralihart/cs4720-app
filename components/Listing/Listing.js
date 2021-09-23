// TODO: Alan

//
//  Listing
//  Bazaar 13-Sep-2021-233539
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import {SafeAreaView, FlatList, Image, StyleSheet, Text, View } from "react-native"


export default class Listing extends React.Component {

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
      
    render(data){
        var data = this.props.data;
        return (
        <SafeAreaView>
            <Text style={styles.Logo}>B</Text>
            <FlatList
              data={data}
              renderItem={({item}) => <View><Text style={styles.item}>{item.Title}</Text>
                                            <Text style={styles.description}>{item.Content}</Text></View>}
              keyExtractor = {item => item.key.toString()}
              style={styles.container}
            />
        </SafeAreaView>
        );
	}
}

const styles = StyleSheet.create({
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
        container: {
         marginTop: 100,
         marginBottom: 200,
        },
        item: {
          marginLeft: 10,
          fontSize: 18,
          height: 24,
        },
        description: {
            padding: 0,
            fontSize: 14,
            height: 40,
            marginLeft: 10,
        }
	/**blogPostView: {
		backgroundColor: "white",
		flex: 1,
	},
	blogPostBackgroundMaskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 813,
	},
	Title: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 176,
	},
	authorText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 294,
		marginTop: 9,
	},
	content: {
		color: "rgb(102, 102, 102)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},*/
})
