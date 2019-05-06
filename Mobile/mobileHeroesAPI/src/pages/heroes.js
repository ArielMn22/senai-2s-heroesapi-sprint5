import React, { Component } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

import api from "../services/api";
import Axios from "axios";
// import console = require("console");

class Heroes extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/imgs/thor-hammer-branco.png")}
        style={styles.tabNavigatorIconHome}
      />
    )
  };

  constructor(props) {
    super(props);

    this.state = {
      listaHerois: [
        // {
        //   id: 1,
        //   nome: "Homem-Aranha",
        //   lancamento: "Amazing Fantasy #15 (1962)",
        //   urlImagem:
        //     "http://supercinemaup.com/wp-content/uploads/2017/05/homem-aranha.jpg"
        // },
        // {
        //   id: 2,
        //   nome: "O Incrível Hulk",
        //   lancamento: "O Incrível Hulk #1 (1962)",
        //   urlImagem:
        //     "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/596c94c8b3db2bfde430c771/1500288203275/?format=2500w"
        // },
        // {
        //   id: 3,
        //   nome: "Homem de Ferro",
        //   lancamento: "Tales of Suspense #39 (1963)",
        //   urlImagem:
        //     "https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg"
        // }
      ]
    };
  }

  componentDidMount()
  {
    this.carregarHerois();
  }

  // carregarHerois = async () => {
  //   const resposta = await api.get("/personagens");
  //   const dadosDaApi = resposta.data;

  //   this.setState({ listaHerois: dadosDaApi });
  // };

  carregarHerois = async () => {
    // const resposta = await api.get("/personagens");
    // const dadosDaApi = resposta.data;
    // this.setState({ listaHerois : dadosDaApi });

    //Axios local
    Axios.get("https://salty-atoll-57329.herokuapp.com/personagens")
    .then(data => {
      this.setState({ listaHerois : data.data })
    })
  };

  renderizaItem = ({ item }) => (
    <View style={styles.flatItemLinha}>
      <View style={styles.flatItemImg}>
        <Image
          source={{ uri: item.urlImagem }}
          style={styles.flatItemImgIcon}
        />
      </View>
      <View style={styles.flatItemContainer}>
        <Text style={styles.flatItemTitulo}>{item.nome}</Text>
        <Text style={styles.flatItemData}>{item.lancamento}</Text>
        <View style={styles.flatItemDivisor} />
      </View>
    </View>
  );

  render() {
    return (
      <View>
        <View style={styles.title__area}>
          <Text style={styles.title__area__text}>Marvel Heroes</Text>
        </View>
        <View>
          <FlatList
            contentContainerStyle={styles.mainBodyConteudo}
            data={this.state.listaHerois}
            keyExtractor={item => item.id}
            renderItem={this.renderizaItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title__area: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title__area__text: {
    fontSize: 31,
    color: "black"
  },
  list__heroes__container: {},
  list__heroes__item: {},
  list__heroes__item__img: {},
  list__heroes__item__text: {},

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
    paddingTop: 50,
    paddingRight: 20,
    paddingLeft: 20
  },
  // dados do evento de cada item da linha
  flatItemLinha: {
    flexDirection: "row"
  },
  flatItemDivisor: {
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    marginBottom: 20,
    marginTop: 20
  },
  flatItemContainer: {
    marginLeft: 10,
    flex: 7,
    marginTop: 5
  },
  flatItemTitulo: {
    fontSize: 25,
    color: "#333",
    fontFamily: "OpenSans-Light"
  },
  flatItemData: {
    fontSize: 20,
    color: "#999",
    lineHeight: 24
  },
  flatItemImg: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  flatItemImgIcon: {
    borderRadius: 5,
    width: 100,
    height: 100
  }
});

export default Heroes;
