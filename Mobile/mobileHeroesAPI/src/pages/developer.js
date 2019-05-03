import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class Developer extends Component {
    // static navigationOptions = {
    //     drawerLabel: "Desenvolvedor",
    //     drawerIcon: ({ tintColor }) => (
    //       <Image
    //         source={require("../assets/imgs/developer-branco.png")}
    //         // style={[styles.icon, { tintColor: tintColor }]}
    //       />
    //     )
    //   };

      static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/imgs/developer-branco.png")}
            style={styles.tabNavigatorIconHome}
          />
        )
      };

    render()
    {
        return(
            <View>
                <Text>Desenvolvedor</Text>
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
    // conteúdo da main
    main: {
      flex: 1,
      backgroundColor: "#F1F1F1"
    },
    // cabecalho
    mainHeaderRow: {
      flexDirection: "row"
    },
    mainHeader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
      // backgroundColor: "red"
    },
    // imagem do cabeçalho
    mainHeaderImg: {
      width: 22,
      height: 22,
      tintColor: "#cccccc",
      marginRight: -9,
      marginTop: -9
    },
    // texto do cabecalho
    mainHeaderText: {
      fontSize: 16,
      letterSpacing: 5,
      color: "#999999",
      fontFamily: "OpenSans-Regular"
    },
    // linha de separacao do cabecalho
    mainHeaderLine: {
      width: 170,
      paddingTop: 10,
      borderBottomColor: "#999999",
      borderBottomWidth: 0.9
    },
    // corpo do texto
    mainBody: {
      // backgroundColor: "blue",
      flex: 4
    },
    // conteúdo da lista
    mainBodyConteudo: {
      paddingTop: 30,
      paddingRight: 50,
      paddingLeft: 50
    },
    // dados do evento de cada item da linha
    flatItemLinha: {
      flexDirection: "row",
      borderBottomWidth: 0.9,
      borderBottomColor: "gray"
    },
    flatItemContainer: {
      flex: 7,
      marginTop: 5
    },
    flatItemTitulo: {
      fontSize: 14,
      color: "#333",
      fontFamily: "OpenSans-Light"
    },
    flatItemData: {
      fontSize: 10,
      color: "#999",
      lineHeight: 24
    },
    flatItemImg: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center"
    },
    flatItemImgIcon: {
      width: 22,
      height: 22,
      tintColor: "#B727FF"
    }
  });
export default Developer;