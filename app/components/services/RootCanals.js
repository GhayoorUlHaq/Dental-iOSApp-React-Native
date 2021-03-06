import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class RootCanals extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Root Canals</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/9/93/Blausen_0774_RootCanal.png"
            }}
          />
          <Text style={styles.itemPickText}>
            {"\n"}
            When the pulp of a tooth is infected (either through decay or
            injury), a root canal by an Endodontist is needed to save the tooth.
            {"\n"}
            {"\n"}
            At early stages of infection you may not feel any pain but it is a
            sure sign that a root canal is needed when the tooth starts to
            darken in color.
            {"\n"}
            {"\n"}
            If a root canal is not performed, the infection can spread through
            the root canal system of the tooth which can lead to an abscess in
            which pus collects, swelling occurs, and the tooth can be lost.
            {"\n"}
            {"\n"}
            Contrary to what you may hear, root canals are not painful with
            local anaesthetic and there should be no more pain than one would
            feel with a normal filling be done.
            {"\n"}
            {"\n"}
            First the root is cleaned to remove all infection from the root
            canal and drain any abscesses.
            {"\n"}
            {"\n"}
            Then a temporary filling is placed and after seeing the Endodontist
            again and the infection is cleared, a permanent filling is placed
            and the tooth is saved.
            {"\n"}
            {"\n"}
            Root canals are important because once the pulp is destroyed, the
            tooth will never be able to heal.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#114260",
    fontSize: 20
  },
  itemPick: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#114260",
    marginTop: 20,
    backgroundColor: "#fcec01",
    marginBottom: 10
  },
  imgSizer: {
    width: "100%",
    height: hp("45%"),
    marginTop: 15
  },
  itemHeader: {
    color: "#114260",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#fcec01"
  }
});

export default RootCanals;
