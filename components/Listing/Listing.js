import * as firebase from 'firebase';
import React, { useEffect, useState } from "react"
import {SafeAreaView, FlatList, Image, StyleSheet, Text, View } from "react-native"

export default function BarterListing() {
      const [data, setData] = useState(null)
      function setupListListener(){
        firebase.database().ref('listings').on('value', (snapshot)=> {
          setData(snapshot.val());
          console.log(data + "listener");
        })
      }
      useEffect(()=>{
        setupListListener()
      }, [])
      function renderBarterItem({item}){
        console.log(item + "renderBarterItem");
        return(
        <View style = {styles.view}>
          <Text style={styles.item}>{item.Title}</Text>
          <Text style={styles.description}>{item.Content}</Text>
        </View>)
      }

      return (
      <SafeAreaView>
          <Text style={styles.Logo}>B</Text>
          {Array.isArray(data) &&
          <FlatList
            data={data}
            renderItem={renderBarterItem}
            keyExtractor = {item => {
                item.key.toString();
            }
          }
            style={styles.container}
          />}
      </SafeAreaView>
      );
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
            height: 36,
            marginLeft: 10,
        },
        view: {
          marginBottom: 10
        }
})
