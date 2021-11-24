import * as firebase from 'firebase';
import React, { useEffect, useState } from "react"
import { Button, ScrollView, StyleSheet, Text } from "react-native"
// import { Text } from '../Essentials/Essentials'

export default function Listing({ route, navigation }) {
	useEffect(() => {
		setupListingListener(route.params.key)
	}, [])
	const [listingTitle, setTitle] = useState(null)
	const [listingContent, setContent] = useState(null)
	const [listingHeader, setHeader] = useState(null)
	const [listingUser, setUser] = useState(null);
	const [listingPoster, setPoster] = useState(null);
	const [listingDate, setDate] = useState(null);
	const [isOwner, setIsOwner] = useState(false);

	function setupListingListener(listingID) {

		firebase.database().ref('listings/' + listingID).on('value', (snapshot) => {
			if (snapshot.val() != null) {
				setTitle(snapshot.val().Title)
				setContent(snapshot.val().Content)
				setHeader(snapshot.val().Header)
				setUser(snapshot.val().User)
				setPoster(snapshot.val().Poster)
				setDate(snapshot.val().Date)
			}
		})
	}

	const auth = firebase.auth();
  auth.onAuthStateChanged(user => {
		console.log(user)
    if (user) {
			setIsOwner(user.email == listingUser)
			console.log("user is owner")
		};
  });

	console.log("isOwner: ", isOwner)

	return <ScrollView>
		<Text style={styles.ListingTitle}>{!!(listingTitle) && listingTitle}</Text>
		{isOwner && <Button 
			onPress={() => {
				firebase.database().ref('listings/' + route.params.key).remove()
				navigation.navigate('Feed');
			}}
			title="Delete"/>}
		<Text style={styles.Header}>{!!(listingHeader) && listingHeader}</Text>
		<Text>{listingHeader && listingHeader == "Event" && listingDate}</Text>
		<Text>{listingPoster && listingPoster}</Text>
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
