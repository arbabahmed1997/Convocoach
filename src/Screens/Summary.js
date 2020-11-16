import React, { Component } from 'react';
import { StyleSheet, ScrollView, Icon, View, Image } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import NormalText from '../AppAssets/NormalText'

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: 1,
          amount: 50,
          svg: { fill: '#600080' },
        },
        {
          key: 2,
          amount: 50,
          svg: { fill: '#9900cc' }
        },
        {
          key: 3,
          amount: 40,
          svg: { fill: '#c61aff' }
        },
        {
          key: 4,
          amount: 95,
          svg: { fill: '#d966ff' }
        },
        {
          key: 5,
          amount: 35,
          svg: { fill: '#ecb3ff' }
        }
      ],
      
    }
  }
  render() {

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <Text
            key={index}
            x={pieCentroid[0]}
            y={pieCentroid[1]}
            fill={'white'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={12}
            stroke={'black'}
            strokeWidth={0.2}
          >
            {data.amount}
          </Text>
        )
      })
    }
    return (
      <ScrollView>
        <View style={styles.header}>
          <View style={{ width: '20%', }}>
            <Ionicons name='arrow-back-outline' style={{ margin: 20 }} size={40} color='white' />
          </View>
          <View style={{ width: '60%', }}>
            <Image
              source={require("../assets/logo-2W.png")}
              resizeMode="contain"
              style={{ width: 90, height: 90, alignSelf: 'center' }}
            />
          </View>
          <View style={{ width: '20%', }}>
            <Feather name='star' style={{ margin: 20 }} size={40} color='white' />
          </View>
        </View>
        <View style={styles.container}>
          <View gradientImage="Gradient_WI76XYo.png" style={styles.rect}>
            <NormalText
              style={styles.summary}
              text={'Summary'}
            />
          </View>
          <View gradientImage="Gradient_MhuPmfm.png" style={styles.rect2}>
            <View gradientImage="Gradient_irFifjU.png" style={styles.rect3}>
              <View style={styles.iconRow}>
                <IoniconsIcon
                  name="ios-radio-button-on"
                  style={styles.icon}
                ></IoniconsIcon>
                <NormalText
                  style={styles.crutchWords}
                  text={'Crutch Words:'}
                />
              </View>
            </View>
            {/* <Image
              source={require("../assets/images/class-standing-2012.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image> */}
            <PieChart
              style={{ height: 200 }}
              outerRadius={'70%'}
              valueAccessor={({ item }) => item.amount}
              innerRadius={10}
              data={this.state.data}
            >
              <Labels />
            </PieChart>
          </View>
          <View style={styles.rect4Stack}>
            <View gradientImage="Gradient_h1gn7X2.png" style={styles.rect4}>
              <View gradientImage="Gradient_uoGssVe.png" style={styles.rect5}>
                <View style={styles.icon2Row}>
                  <IoniconsIcon
                    name="ios-radio-button-on"
                    style={styles.icon2}
                  ></IoniconsIcon>
                  <NormalText
                    style={styles.conversationShare}
                    text={'Conversation Share:'}
                  />
                </View>
              </View>
              {/* <Image
                source={require("../assets/images/Reading-Pie-Chart.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image> */}
              <PieChart
                style={{ height: 200 }}
                outerRadius={'70%'}
                valueAccessor={({ item }) => item.amount}
                innerRadius={10}
                data={this.state.data}
              >
                <Labels />
              </PieChart>
            </View>
            <View gradientImage="Gradient_PJMXTcX.png" style={styles.rect6}></View>
            <View gradientImage="Gradient_tg0h2Kq.png" style={styles.rect7}>
              <View style={styles.icon3Row}>
                <IoniconsIcon
                  name="ios-radio-button-on"
                  style={styles.icon3}
                ></IoniconsIcon>
                <NormalText
                  style={styles.loremIpsum}
                  text={'Pace WPM(Words Per Minute)'}
                />
              </View>
            </View>
            <View gradientImage="Gradient_tg0h2Kq.png" style={styles.rect8}>
              <View style={styles.icon4Row}>
                <IoniconsIcon
                  name="ios-radio-button-on"
                  style={styles.icon4}
                ></IoniconsIcon>
                <NormalText
                  style={styles.voaclVariability}
                  text={'Voacl variability'}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: '#4FA9DC',
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    top: -15
  },
  rect: {
    width: 375,
    height: 48,
    backgroundColor: "#fff",
    marginTop: 17
  },
  summary: {

    color: "rgba(61,140,195,1)",
    fontSize: 25,
    marginTop: 9,
    marginLeft: 123,
    fontWeight: "700"
  },
  rect2: {
    width: 375,
    height: 306,
    backgroundColor: "#fff",
    marginTop: 2
  },
  rect3: {
    width: 375,
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 9
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 33,
    width: 24
  },
  crutchWords: {

    color: "#121212",
    fontSize: 22,
    marginLeft: 14,
    fontWeight: "700"
  },
  iconRow: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 189,
    marginLeft: 9,
    marginTop: 12
  },
  image: {
    width: 323,
    height: 200,
    marginTop: 21,
    marginLeft: 33
  },
  rect4: {
    top: 0,
    left: 0,
    width: 375,
    height: 307,
    position: "absolute",
    backgroundColor: "#fff"
  },
  rect5: {
    width: 375,
    height: 64,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 10
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 33,
    width: 24
  },
  conversationShare: {

    color: "#121212",
    fontSize: 22,
    marginLeft: 14,
    marginTop: 3,
    fontWeight: "700"
  },
  icon2Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 132,
    marginLeft: 9,
    marginTop: 13
  },
  image2: {
    width: 335,
    height: 200,
    marginTop: 23,
    marginLeft: 21
  },
  rect6: {
    top: 306,
    left: 1,
    width: 375,
    height: 122,
    position: "absolute",
    backgroundColor: "#fff"
  },
  rect7: {
    top: 319,
    left: 0,
    width: 375,
    height: 48,
    position: "absolute",
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 33,
    width: 24
  },
  loremIpsum: {

    color: "#121212",
    fontSize: 22,
    marginLeft: 6,
    marginTop: 4,
    fontWeight: "700"
  },
  icon3Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 41,
    marginLeft: 8,
    marginTop: 7
  },
  rect8: {
    top: 371,
    left: 0,
    width: 375,
    height: 48,
    position: "absolute",
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 33,
    width: 24
  },
  voaclVariability: {

    color: "#121212",
    fontSize: 22,
    marginLeft: 12,
    marginTop: 2,
    fontWeight: "700"
  },
  icon4Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 179,
    marginLeft: 7,
    marginTop: 6
  },
  rect4Stack: {
    width: 376,
    height: 428,
    marginTop: 8
  }
});

export default Summary;