import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
  Image,
  Linking
} from "react-native";
import { SafeAreaView } from "react-navigation";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Crowns from "../components/services/Crowns";
import Implants from "../components/services/Implants";
import Veneers from "../components/services/Veneers";

class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showList: true,
      showItem: "",
      showClick: true,
      showTitle: true,

      showAestheticSpa: false,
      showBleaching: false,
      showBotox: false,
      showComposites: false,
      showCrowns: false,
      showDentures: false,
      showDysport: false,
      showDermalFillers: false,
      showImplants: false,
      showOrthodontics: false,
      showPartials: false,
      showPediatric: false,
      showRootCanals: false,
      showSedation: false,
      showSleepApnea: false,
      showVeneers: false
    };
  }
  handleClick = item => {
    //hide title
    this.setState({ showTitle: false });
    //hide click on service
    this.setState({ showClick: false });
    //hide list
    this.setState({ showList: false });
    //change current item
    this.setState({ showItem: item.key });
    //reset scrollview
    this.refs._scrollView.scrollTo({ y: 0, animated: true });

    //item condition
    if (item.key == "Aesthetic Spa") {
      this.setState({ showAestheticSpa: true });
    }
    if (item.key == "Bleaching") {
      this.setState({ showBleaching: true });
    }

    if (item.key == "Botox") {
      this.setState({ showBotox: true });
    }

    if (item.key == "Composites") {
      this.setState({ showComposites: true });
    }

    if (item.key == "Crowns") {
      this.setState({ showCrowns: true });
    }

    if (item.key == "Dentures") {
      this.setState({ showDentures: true });
    }
    if (item.key == "Dermal Fillers") {
      this.setState({ showDermalFillers: true });
    }
    if (item.key == "Dysport") {
      this.setState({ showDysport: true });
    }
    if (item.key == "Implants") {
      this.setState({ showImplants: true });
    }
    if (item.key == "Orthodontics") {
      this.setState({ showOrthodontics: true });
    }
    if (item.key == "Pediatric Dentistry") {
      this.setState({ showPediatric: true });
    }
    if (item.key == "Partial Dentures") {
      this.setState({ showPartials: true });
    }
    if (item.key == "Root Canals") {
      this.setState({ showRootCanals: true });
    }
    if (item.key == "Sedation") {
      this.setState({ showSedation: true });
    }
    if (item.key == "Sleep Apnea") {
      this.setState({ showSleepApnea: true });
    }
    if (item.key == "Veneers") {
      this.setState({ showVeneers: true });
    }
  };

  resetList = () => {
    this.setState({ showList: true });
    this.setState({ showItem: "" });

    //reset
    this.setState({
      showAestheticSpa: false,
      showBleaching: false,
      showBotox: false,
      showComposites: false,
      showCrowns: false,
      showDentures: false,
      showDermalFillers: false,
      showDysport: false,
      showImplants: false,
      showOrthodontics: false,
      showPartials: false,
      showPediatric: false,
      showRootCanals: false,
      showSedation: false,
      showSleepApnea: false,
      showVeneers: false,

      showClick: true,
      showTitle: true
    });
  };

  render() {
    const { showCrowns } = this.state;
    let information;

    if (showCrowns) {
      information = <Crowns />;
    }
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollStyle} ref="_scrollView">
          <View style={styles.container}>
            {this.state.showTitle ? (
              <View style={styles.headerDiv}>
                <Text style={styles.header}>Services</Text>
              </View>
            ) : null}
            {this.state.showClick ? (
              <Text style={styles.serviceHelp}>
                Click on a service we offer for options and information
              </Text>
            ) : null}

            {/* Service List */}

            {this.state.showList ? (
              <FlatList
                style={styles.flatList}
                data={[
                  { key: "Aesthetic Spa" },
                  { key: "Bleaching" },
                  { key: "Botox" },
                  { key: "Composites" },
                  { key: "Crowns" },
                  { key: "Dentures" },
                  { key: "Dermal Fillers" },
                  { key: "Dysport" },
                  { key: "Implants" },
                  { key: "Orthodontics" },
                  { key: "Partial Dentures" },
                  { key: "Pediatric Dentistry" },
                  { key: "Root Canals" },
                  { key: "Sedation" },
                  { key: "Sleep Apnea" },
                  { key: "Veneers" }
                ]}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.listItemButton}
                    onPress={() => this.handleClick(item)}
                  >
                    <Text style={styles.listItemText}>{item.key}</Text>
                  </TouchableOpacity>
                )}
              />
            ) : null}

            {/* Service Title */}

            <View style={styles.flexRow}>
              {this.state.showAestheticSpa ? (
                <Text style={styles.itemPick}>Aesthetic Spa</Text>
              ) : null}
              {this.state.showBleaching ? (
                <Text style={styles.itemPick}>Bleaching</Text>
              ) : null}
              {this.state.showBotox ? (
                <Text style={styles.itemPick}>Botox</Text>
              ) : null}
              {this.state.showComposites ? (
                <Text style={styles.itemPick}>Composites</Text>
              ) : null}
              {this.state.showCrowns ? (
                <Text style={styles.itemPick}>Crowns</Text>
              ) : null}
              {this.state.showDentures ? (
                <Text style={styles.itemPick}>Dentures</Text>
              ) : null}
              {this.state.showDermalFillers ? (
                <Text style={styles.itemPick}>Dermal Fillers</Text>
              ) : null}
              {this.state.showDysport ? (
                <Text style={styles.itemPick}>Dysport</Text>
              ) : null}
              {this.state.showImplants ? (
                <Text style={styles.itemPick}>Implants</Text>
              ) : null}
              {this.state.showOrthodontics ? (
                <Text style={styles.itemPick}>Orthodontics</Text>
              ) : null}
              {this.state.showPartials ? (
                <Text style={styles.itemPick}>Partial Dentures</Text>
              ) : null}
              {this.state.showPediatric ? (
                <Text style={{ ...styles.itemPick }}>Pediatric Dentistry</Text>
              ) : null}
              {this.state.showRootCanals ? (
                <Text style={styles.itemPick}>Root Canals</Text>
              ) : null}
              {this.state.showSedation ? (
                <Text style={styles.itemPick}>Sedation</Text>
              ) : null}
              {this.state.showSleepApnea ? (
                <Text style={styles.itemPick}>Sleep Apnea</Text>
              ) : null}
              {this.state.showVeneers ? (
                <Text style={styles.itemPick}>Veneers</Text>
              ) : null}

              {/* Back Button */}

              <View style={styles.buttonDiv}>
                {this.state.showItem ? (
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={this.resetList}
                  >
                    <Text style={styles.buttonText}>Back</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>

            {/* Show Service image + info*/}
            {this.state.showCrowns ? <Crowns /> : null}
            {this.state.showImplants ? <Implants /> : null}
            {this.state.showVeneers ? <Veneers /> : null}

            {/* Images */}

            <View style={styles.serviceImage}>
              {this.state.showAestheticSpa ? (
                <Image
                  style={{ width: "100%", height: hp("45%") }}
                  resizeMode="contain"
                  source={{
                    uri:
                      "https://www.adcofnorton.com/images/Norton-MA-Botox-Dysport.jpg"
                  }}
                />
              ) : null}
              {this.state.showComposites ? (
                <Image
                  style={{ width: "100%", height: hp("45%") }}
                  resizeMode="contain"
                  source={{
                    uri:
                      "https://completedentalhealthmi.com/wp-content/uploads/2019/05/white-filling-vs-silver-filling.png"
                  }}
                />
              ) : null}

              {this.state.showOrthodontics ? (
                <Image
                  style={{ width: "100%", height: hp("45%") }}
                  resizeMode="contain"
                  source={{
                    uri:
                      "https://www.readersdigest.ca/wp-content/uploads/sites/14/2010/10/does-your-child-really-need-braces-1200x1200.jpg"
                  }}
                />
              ) : null}
              {this.state.showRootCanals ? (
                <Image
                  style={{
                    width: "100%",
                    height: hp("45%")
                  }}
                  resizeMode="contain"
                  source={{
                    uri:
                      "http://icondentalsf.com/wp-content/uploads/2019/01/rct-before-after.jpg"
                  }}
                />
              ) : null}
            </View>

            {/* Service Text */}

            <View style={styles.itemPickInfo}>
              {this.state.showAestheticSpa ? (
                <Text style={styles.itemPickText}>
                  Here at ADC of Norton we have an in-house Aesthetic Spa. With
                  our team of skilled nurses, we offer Botox, Dysport, and
                  Dermal Fillers.
                  {"\n"}
                  {"\n"}
                  Botox and Dysport are both safe and effective treatments for
                  moderate to severe wrinkles.
                  {"\n"}
                  {"\n"}
                  These treatments reduce the appearance of wrinkles by relaxing
                  the underlying muscles beneath the skin which results in
                  smoother skin.
                  {"\n"}
                  {"\n"}
                  Both treatments have the same active ingredient but have their
                  differences.
                  {"\n"}
                  {"\n"}
                  More information about Botox, Dysport, and Dermal Fillers can
                  be found on our list of services.
                </Text>
              ) : null}
              {this.state.showBleaching ? (
                <Text style={styles.itemPickText}>
                  Bleaching text goes here
                </Text>
              ) : null}
              {this.state.showBotox ? (
                <Text style={styles.itemPickText}>Botox text goes here</Text>
              ) : null}
              {this.state.showComposites ? (
                <Text style={styles.itemPickText}>
                  Composites are tooth colored resin fillings that are used in
                  small to midsize cavities that provide durability and
                  resistance to fractures and allow a tooth to withstand the
                  pressure that comes from chewing.
                  {"\n"}
                  {"\n"}
                  These fillings can not only be used to fill cavities but also
                  can be used to change the color of teeth and reshape
                  disfigured teeth.
                  {"\n"}
                  {"\n"}
                  Composites are a good choice for people who want their teeth
                  to look natural because the alternatives (like amalgam
                  fillings) are easy to look at and tell that work was done on
                  the tooth.
                  {"\n"}
                  {"\n"}
                  Composite fillings usually take longer to place then a metal
                  (amalgam) filling because the tooth is needed to be kept clean
                  and dry during the procedure.
                  {"\n"}
                  {"\n"}
                  Composite fillings are now used more than metal alternatives
                  because most people want fillings that match the color of
                  their natural teeth. At our office we use a shade guide to
                  match our many shades of composite resins to the natural color
                  of our patient’s teeth.
                </Text>
              ) : null}

              {this.state.showDentures ? (
                <Text style={styles.itemPickText}>Dentures text goes here</Text>
              ) : null}
              {this.state.showDermalFillers ? (
                <Text style={styles.itemPickText}>
                  Dermal Fillers text goes here
                </Text>
              ) : null}
              {this.state.showDysport ? (
                <Text style={styles.itemPickText}>Dysport text goes here</Text>
              ) : null}
              {this.state.showOrthodontics ? (
                <Text style={styles.itemPickText}>
                  At Advanced Dental Care of Norton we have our own in-house
                  orthodontist and these are the services we provide:{"\n"}
                  {"\n"}
                  <Text
                    style={{ color: "red", fontSize: 20, fontWeight: "bold" }}
                  >
                    Adult Orthodontics
                  </Text>
                  {"\n"}
                  {"\n"}
                  Orthodontic treatments today are no longer just for kids. Many
                  adults are choosing to have orthodontic treatments not only to
                  correct dental issues that may have affected their oral
                  health, but also for the cosmetic benefits of straight teeth.
                  Orthodontic treatments for adults include both traditional and
                  clear braces and, for those who want to be more discrete with
                  their treatment, clear aligners. While traditional braces for
                  adults work the same as those for children, the length of the
                  treatment time may be longer. {"\n"}
                  {"\n"}
                  <Text
                    style={{ color: "red", fontSize: 20, fontWeight: "bold" }}
                  >
                    Teen Orthodontics
                  </Text>
                  {"\n"}
                  {"\n"}The teen years are a suitable time to begin orthodontic
                  treatments. The bone in the jaw of a teenager is still
                  moldable by moving teeth because it has not yet set in its
                  shape. Gaps, crooked teeth, overcrowding of teeth and improper
                  alignment of bites can all be corrected during the teenage
                  years. While no teenager looks forward to wearing braces for a
                  year or two, there have been advances in orthodontic
                  technology that gives more choices for orthodontic teeth
                  straightening like metal vs ceramic braces and the choice of
                  the color combination of the tiny rubber bands. {"\n"}
                  {"\n"}
                  <Text
                    style={{ color: "red", fontSize: 20, fontWeight: "bold" }}
                  >
                    Traditional Braces
                  </Text>
                  {"\n"}
                  {"\n"}
                  When you hear the term braces, it is usually in reference to
                  the traditional braces that require the use of metal wires and
                  brackets. These braces are typically recommended for cases
                  requiring more severe correction as a result of their
                  durability.{"\n"}
                  {"\n"}
                  <Text
                    style={{ color: "red", fontSize: 20, fontWeight: "bold" }}
                  >
                    Six Month Smiles
                  </Text>
                  {"\n"}
                  {"\n"}
                  The Six Month Smiles Bracing System is a clear bracing system
                  for adults. Most adults do not want the hassle of having to
                  walk around with visible braces for an extended period of
                  time. With the Six Month Smiles system, clear braces are used
                  and the primary focus is on the cosmetic appearance of the
                  teeth that are visible in your smile, and not the position of
                  your bite. Therefore, one can have their teeth straightened in
                  just around six months!
                  {"\n"}
                  {"\n"}
                  <Text
                    style={{ color: "red", fontSize: 20, fontWeight: "bold" }}
                  >
                    Fastbraces®
                  </Text>
                  {"\n"}
                  {"\n"}
                  The Fastbraces® Technology straightens the teeth differently
                  from traditional braces. Unlike the latter which aligns the
                  crown of the teeth first, then addresses the positioning of
                  the root of the tooth, Fastbraces®, from the beginning of
                  treatment, works to correct the position of the root of the
                  tooth. As a result of this, treatment using the Fastbraces®
                  Technology tend to be completed faster than that of
                  traditional braces.
                  {"\n"}
                  {"\n"}
                  <Text
                    style={{ color: "red", fontSize: 20, fontWeight: "bold" }}
                  >
                    Invisalign
                  </Text>
                  {"\n"}
                  {"\n"}
                  Many adults simply do not like having to deal with wires and
                  brackets, and for them, Invisalign has been the proven choice.
                  Unlike the other bracing systems which uses either metal or
                  clear braces, Invisalign uses a series of custom-made aligners
                  that are not only so clear that they are almost invisible, but
                  they can also be removed for eating, drinking, and normal
                  brushing and flossing of the teeth!
                  {"\n"}
                  {"\n"}
                  <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    At Advanced Dental Care of Norton, we customize
                    individualized treatment plans based on our patients needs,
                    to get the best results, using the best suited system. Call
                    us today to schedule a consultation.
                  </Text>
                </Text>
              ) : null}
              {this.state.showPartials ? (
                <Text style={styles.itemPickText}>
                  Partial Dentures text goes here
                </Text>
              ) : null}
              {this.state.showPediatric ? (
                <Text style={styles.itemPickText}>
                  Pediatric Dentistry text goes here
                </Text>
              ) : null}
              {this.state.showRootCanals ? (
                <Text style={styles.itemPickText}>
                  When the pulp of a tooth is infected (either through decay or
                  injury), a root canal by an Endodontist is needed to save the
                  tooth.
                  {"\n"}
                  {"\n"}
                  At early stages of infection you may not feel any pain but it
                  is a sure sign that a root canal is needed when the tooth
                  starts to darken in color.
                  {"\n"}
                  {"\n"}
                  If a root canal is not performed, the infection can spread
                  through the root canal system of the tooth which can lead to
                  an abscess in which pus collects, swelling occurs, and the
                  tooth can be lost.
                  {"\n"}
                  {"\n"}
                  Contrary to what you may hear, root canals are not painful
                  with local anaesthetic and there should be no more pain than
                  one would feel with a normal filling be done.
                  {"\n"}
                  {"\n"}
                  First the root is cleaned to remove all infection from the
                  root canal and drain any abscesses.
                  {"\n"}
                  {"\n"}
                  Then a temporary filling is placed and after seeing the
                  Endodontist again and the infection is cleared, a permanent
                  filling is placed and the tooth is saved.
                  {"\n"}
                  {"\n"}
                  Root canals are important because once the pulp is destroyed,
                  the tooth will never be able to heal.
                </Text>
              ) : null}
              {this.state.showSedation ? (
                <Text style={styles.itemPickText}>Sedation text goes here</Text>
              ) : null}
              {this.state.showSleepApnea ? (
                <Text style={styles.itemPickText}>
                  Sleep apnea is an extremely serious condition that causes a
                  person to wake up constantly throughout the night from
                  respiratory disturbances like sleep apnea (when you stop
                  breathing).
                  {"\n"}
                  {"\n"}
                  Sleep apnea will cause medical conditions to occur, and
                  existing medical conditions to worsen or make more difficult
                  for you and your doctor to manage.
                  {"\n"}
                  {"\n"}
                  Hypertension (high blood pressure, eventually renal failure),
                  diabetes, heart failure, and stroke are very common in people
                  who suffer from sleep apnea.
                  {"\n"}
                  {"\n"}
                  <Text style={{ color: "red", fontWeight: "bold" }}>
                    Symptoms of Sleep Apnea:
                  </Text>
                  {"\n"}
                  {"\n"}
                  <Text style={{ fontSize: 14 }}>
                    Headaches, tension headaches, stress headaches, migraines,
                    lack of energy, interrupted sleep patterns, obesity issues,
                    anxiety, hypertension, tiredness, snoring, soreness in the
                    ears, clenching of the jaw, TMJ problems, trigger point
                    pain, insomnia, and fatigue.
                  </Text>
                  {"\n"}
                  {"\n"}
                  <Text
                    style={{
                      color: "blue",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "15"
                    }}
                    onPress={() =>
                      Linking.openURL(
                        "https://www.adcofnorton.com/Norton-Sleep-Apnea-Quiz.asp"
                      )
                    }
                  >
                    Click to take our Sleep Apnea Quiz
                  </Text>
                </Text>
              ) : null}
            </View>

            {/* Back Button */}

            <View style={styles.buttonDiv2}>
              {this.state.showItem ? (
                <TouchableOpacity
                  style={styles.backButton2}
                  onPress={this.resetList}
                >
                  <Text style={styles.buttonText2}>Back</Text>
                </TouchableOpacity>
              ) : null}
            </View>

            {/* add some white space */}
            <View style={{ height: 30, color: "#fff" }} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerDiv: {
    backgroundColor: "#fcec01",
    height: 90
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#114260",
    marginTop: 15
  },
  serviceHelp: {
    paddingTop: 30,
    paddingBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15
  },
  listItemButton: {},
  listItemText: {
    textAlign: "center",
    fontSize: 23,
    paddingTop: 20,
    fontWeight: "bold",
    color: "#114260"
  },
  flatList: {},
  scrollStyle: {},
  itemPick: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 23,
    color: "red",
    paddingTop: 20
  },
  backButton: {},
  buttonDiv2: {
    alignItems: "center",
    paddingTop: hp("10%")
  },
  buttonText: {
    color: "#fcec01",
    backgroundColor: "#114260",
    fontWeight: "bold",
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: "#fff",
    width: 100,
    height: 50,
    textAlign: "center",
    paddingTop: 10
  },
  buttonText2: {
    color: "#114260",
    backgroundColor: "#fcec01",
    fontWeight: "bold",
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: "#fff",
    width: 100,
    height: 50,
    textAlign: "center",
    paddingTop: 10
  },
  itemPickInfo: {
    paddingTop: 20,
    alignItems: "left",
    width: wp("95%")
  },
  itemPickText: {
    color: "#000",
    fontSize: 20,
    paddingLeft: 20
  },
  serviceImage: {
    alignItems: "center",
    paddingTop: 20
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonDiv: {
    paddingLeft: wp("8%"),
    paddingTop: hp("1%")
  }
});

export default Services;
