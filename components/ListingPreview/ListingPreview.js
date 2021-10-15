import * as firebase from 'firebase';
import React, { useEffect, useState } from "react"
import { Animated, ScrollView, Image, StyleSheet, Text, View } from "react-native"

export default function Listing({ route, navigation }) {
	useEffect(() => {
		setupListingListener(route.params.key)
	}, [])
	const [listingTitle, setTitle] = useState(null)
	const [listingContent, setContent] = useState(null)
	const [listingHeader, setHeader] = useState(null)

	function setupListingListener(listingID) {
		firebase.database().ref('listings/' + listingID).on('value', (snapshot) => {
			setTitle(snapshot.val().Title)
			setContent(snapshot.val().Content)
			setHeader(snapshot.val().Header)
		})
	}
	return <ScrollView>
		<Text style={styles.ListingTitle}>{!!(listingTitle) && listingTitle}</Text>
		<Text style={styles.Header}>{!!(listingHeader) && listingHeader}</Text>
		<Text style={styles.Content}>
			{!!(listingContent) && listingContent}
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
