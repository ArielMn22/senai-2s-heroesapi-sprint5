import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// constructor(props)
// {
//     super(props);

//     this.state = {
//         listaHerois : []
//     }
// }

class Heroes extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/imgs/thor-hammer-branco.png")}
        style={styles.tabNavigatorIconHome}
      />
    )
  };

  render() {
    return (
      <View>
        <View style={styles.title__area}>
          <Text style={styles.title__area__text}>Marvel Heroes</Text>
        </View>
        <View style={styles.list__heroes__container}>
            <View style={styles.list__heroes__item}>
            {/* Imagem do herói */}
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabNavigatorIconHome: {
    width: 25,
    height: 25,
    // tintColor: "purple"
    tintColor: "#FFFFFF"
  },
  title__area: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title__area__text: {
    fontSize: 31,
    color: 'black'
  },
  list__heroes__container : {
      
  },
  list__heroes__item : {

  }
});

export default Heroes;
