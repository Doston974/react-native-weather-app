import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Ajoyib ob-havo",
    description: "Piyoda yuring, uyda qolishni bas qiling!",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "uyda o'tiring",
    description: "Ko'chada nima bolayotganligini ko'rmayapsizmi?",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Soyabon oling",
    description: "Ehtimol, tez orada yomg'ir ko'payadi",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1cb5e0"],
    title: "tashqarida yomg'ir yog'moqda",
    description: "Shunday qilib, tez orada kamalak paydo bo'ladi!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Tashqarida qor bor!",
    description: "Issiq kiyinib, qor odam yasang",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#b79891", "#94716b"],
    title: "Ko'chada chang",
    description: "Oynani yopish yaxshiroqdir",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Ko'chada tutun :(",
    description: "Men bekorga tashqariga chiqishni maslahat bermayman",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3e5151", "#decba4"],
    title: "Tashqarida qor bor",
    description: "Issiq kiyinib, qordan odam yasang",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "siz tuman ichida hech nimani ko'ra olmaysiz",
    description: "ko'chada nima borligini ko'ryapsizmi?",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757f9a", "#d7dde8"],
    title: "Bulutliy",
    description: "Sayrga boring, uyda qolishni to'xtating",
  },
};

const Weather = ({ temp, name, condition, setWeather }) => {
  const [query, setQuery] = useState("");

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.mainContainer}
    >
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color={"white"}
        />
        <View style={styles.flex}>
          <Text style={styles.temp}>{temp}°</Text>
          <Text style={styles.temp}>| {name}</Text>
        </View>
      </View>
      <View style={{ ...styles.container, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.description}>
          {weatherOptions[condition].description}
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Shaxar"
            style={styles.input}
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <Button
            title="Qidiruv..."
            style={styles.btn}
            onPress={() => setWeather(query)}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  flex: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 38,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    textAlign: "left",
  },
  searchContainer: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 10,
    marginTop: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  input: {
    width: "70%",
  },
  btn: {
    width: "30%",
  },
});

export default Weather;
