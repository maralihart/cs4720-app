// TODO: Alan
//
//  BarterListing
//  Bazaar 13-Sep-2021-233539
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//
import * as firebase from 'firebase';
import React from "react"
import { ScrollView, Image, StyleSheet, Text, View } from "react-native"


export default function BarterListing(props){
		React.useEffect(()=>{
			setupListingListener(props.ID)
		}, [])
		const [listingTitle, setTitle] = React.useState()
		const [listingContent, setContent] = React.useState()
		const [listingHeader, setHeader] = React.useState() 
	   
		function setupListingListener(listingID){
			firebase.database().ref('listings/'+listingID).on('value', (snapshot)=>{
			setTitle(snapshot.val().Title)
			setContent(snapshot.val().Content)
			setHeader(snapshot.val().Header)
			})
		}
		return <ScrollView>
					<Text
						style={styles.ListingTitle}>{listingTitle}</Text>
					<Text
						style={styles.Header}>{listingHeader}</Text>
						<Text style={styles.Content}>
                            {listingContent}
                   		</Text>
				</ScrollView>
}

const styles = StyleSheet.create({
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
