import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
} from "react-native";

export default function Navbar(props) {
  var title_search = ""
  if (props.name != 'Review du lịch có tâm') {
    var title_search = "Kết quả tìm kiếm cho: ";
  } else {
    var title_search = "";
  }
  return (
    <View style={{ marginTop: 45, zIndex: 2 }}>
      <View style={styles.navbar}>
        <View style={[styles.layoutBack, styles.shadow]}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={props.onPress}
            style={styles.ButtonBack}
          >
            <Image
              source={require("../../assets/icon/back.png")}
              style={styles.back}
            />
          </TouchableHighlight>
          <Text style={styles.welcome}>
            {title_search}
            <Text style={styles.name}>{props.name}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
  navbar: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    backgroundColor: "#fff",
  },
  layoutBack: {
    width: DEVICE_WIDTH - 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  ButtonBack: {
    width: 60,
    height: 24,
    alignItems: "flex-end",
    position: "relative",
    left: -30,
  },
  back: {
    width: 15,
    height: 24,
    borderRadius: 10,
    marginRight: 10,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  welcome: {
    fontSize: DEVICE_WIDTH / 24,
    marginLeft: -30
  },
  name: {
    fontWeight: "600",
  },
});
