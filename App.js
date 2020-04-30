import React, { useState } from 'react';
import {
  StyleSheet,
  Text, View, TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView
} from 'react-native';
const { width, height } = Dimensions.get("window");
var goal_text = "";
export default App = () => {
  const [text, setText] = useState("");
  const keyPressed = (key) => {
    if (key === "AC") {
      goal_text = text
      setText("")
    }
    else if (key === "+/-")
      setText("-" + text)
    else if (key === "=")
      setText(goal_text)
    else
      setText(text + key)

  }
  return (
    <View style={styles.main}>
      <Text
        style={styles.text}
        numberOfLines={1}
        ellipsizeMode='head'
      >{text}</Text>
      <View style={styles.number_container}>
        {
          [["AC", "+/-", "%", "/"],
          ["7", "8", "9", "*"],
          ["4", "5", "6", "-"],
          ["1", "2", "3", "+"],
          ["", "0", ".", "="],
          ].map((item, index) => {
            return (
              <View key={index} style={styles.row_container}>
                {item.map((item, index) => {
                  return (
                    <View style={{
                      height: width / 4,
                      width: width / 4,
                      paddingLeft: 1,
                      paddingBottom: 1,
                    }}
                      key={item}>
                      <TouchableOpacity
                        onPress={() => { keyPressed(item) }}
                        style={[
                          styles.button,
                          { backgroundColor: index == 3 ? "#f99012" : "#ddd" }
                        ]}
                      >
                        <View style={styles.text_container}>
                          <Text style={styles.button_text}>{item}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )
                })}
              </View>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222"
  },
  row_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold"
  },
  button: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  number_container: {
    position: "absolute",
    bottom: 0,
    height: width / 4 * 5,
    width: width
  },
  text: {
    position: "absolute",
    width: "100%",
    height: width / 4,
    bottom: width * 1.5,
    textAlign: "right",
    color: "#ddd",
    fontSize: 70,
    paddingRight: 10
  }
});
