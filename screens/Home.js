import React, { useState } from "react";
import {
  View, Text, StyleSheet, TextInput, ScrollView,
  TouchableOpacity, Image, StatusBar,
} from "react-native";
import coffeeData from "../data.json";

const CATEGORIES = ["All Coffee", "Machiato", "Latte", "Americano"];

const imageMap = {
  "2.png": require("../assets/2.png"),
  "3.png": require("../assets/3.png"),
  "4.png": require("../assets/4.png"),
  "5.png": require("../assets/5.png"),
};

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Coffee");

  const filtered = coffeeData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All Coffee" || item.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1C1C1E" />
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#1C1C1E" }}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.locationLabel}>Location</Text>
            <TouchableOpacity style={styles.locationRow}>
              <Text style={styles.locationText}>Bilzen, Tanjungbalai</Text>
              <Text style={styles.arrow}> ▾</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>NA</Text>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search coffee"
              placeholderTextColor="#888"
              value={search}
              onChangeText={setSearch}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <View style={styles.promoLeft}>
            <View style={styles.promoTag}>
              <Text style={styles.promoTagText}>Promo</Text>
            </View>
            <Text style={styles.promoTitle}>Buy one get{"\n"}one FREE</Text>
          </View>
          <View style={styles.promoImageContainer}>
            <Image
              source={require("../assets/Banner 1.png")}
              style={styles.promoImage}
            />
          </View>
        </View>

        {/* Categories + Grid — nền trắng */}
        <View style={styles.bottomSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesScroll}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => setActiveCategory(cat)}
                style={[styles.categoryBtn, activeCategory === cat && styles.categoryBtnActive]}
              >
                <Text style={[styles.categoryText, activeCategory === cat && styles.categoryTextActive]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.grid}>
            {filtered.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => navigation.navigate("Detail", { item })}
                activeOpacity={0.9}
              >
                <Image source={imageMap[item.image]} style={styles.cardImage} resizeMode="cover" />
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingStar}>⭐</Text>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardName}>{item.name}</Text>
                  <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                  <View style={styles.cardBottom}>
                    <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.addBtn}>
                      <Text style={styles.addBtnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ height: 30 }} />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1C1C1E" },
  header: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    paddingHorizontal: 20, paddingTop: 50, paddingBottom: 16,
  },
  locationLabel: { fontSize: 12, color: "#aaa", marginBottom: 2 },
  locationRow: { flexDirection: "row", alignItems: "center" },
  locationText: { fontSize: 14, color: "#fff", fontWeight: "600" },
  arrow: { color: "#C67C4E", fontSize: 14 },
  avatar: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: "#C67C4E", alignItems: "center", justifyContent: "center",
  },
  avatarText: { color: "#fff", fontWeight: "bold", fontSize: 13 },
  searchRow: {
    flexDirection: "row", paddingHorizontal: 20, marginBottom: 20, gap: 10,
  },
  searchBox: {
    flex: 1, flexDirection: "row", alignItems: "center",
    backgroundColor: "#2C2C2E", borderRadius: 14, paddingHorizontal: 14, height: 50,
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, color: "#fff", fontSize: 14 },
  filterBtn: {
    width: 50, height: 50, backgroundColor: "#C67C4E",
    borderRadius: 14, alignItems: "center", justifyContent: "center",
  },
  filterIcon: { fontSize: 20 },
  promoBanner: {
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#A0785A",
    overflow: "hidden",
    flexDirection: "row",
    height: 140,
    marginBottom: 24,
  },
  promoLeft: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    zIndex: 1,
  },
  promoTag: {
    backgroundColor: "#C67C4E",
    paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: 8, alignSelf: "flex-start", marginBottom: 10,
  },
  promoTagText: { color: "#fff", fontSize: 11, fontWeight: "600" },
  promoTitle: { color: "#fff", fontSize: 22, fontWeight: "bold", lineHeight: 30 },
  promoImageContainer: {
    width: 160,
    height: 140,
    overflow: "hidden",
  },
  promoImage: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 280,
    height: 140,
    resizeMode: "cover",
  },
  bottomSection: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
  },
  categoriesScroll: { marginBottom: 20 },
  categoryBtn: {
    paddingHorizontal: 20, paddingVertical: 8,
    borderRadius: 20, marginRight: 10, backgroundColor: "#F0F0F0",
  },
  categoryBtnActive: { backgroundColor: "#C67C4E" },
  categoryText: { color: "#888", fontSize: 13, fontWeight: "600" },
  categoryTextActive: { color: "#fff" },
  grid: {
    flexDirection: "row", flexWrap: "wrap",
    paddingHorizontal: 16, gap: 16,
  },
  card: { width: "47%", backgroundColor: "#F5F5F5", borderRadius: 20, overflow: "hidden" },
  cardImage: { width: "100%", height: 130 },
  ratingBadge: {
    position: "absolute", top: 8, right: 8, flexDirection: "row", alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.55)", borderRadius: 20, paddingHorizontal: 8, paddingVertical: 3,
  },
  ratingStar: { fontSize: 10 },
  ratingText: { color: "#fff", fontSize: 11, marginLeft: 3, fontWeight: "600" },
  cardInfo: { padding: 12 },
  cardName: { color: "#1C1C1E", fontSize: 14, fontWeight: "700" },
  cardSubtitle: { color: "#aaa", fontSize: 12, marginTop: 2, marginBottom: 10 },
  cardBottom: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  cardPrice: { color: "#1C1C1E", fontSize: 15, fontWeight: "bold" },
  addBtn: {
    width: 30, height: 30, borderRadius: 10,
    backgroundColor: "#C67C4E", alignItems: "center", justifyContent: "center",
  },
  addBtnText: { color: "#fff", fontSize: 20, lineHeight: 24, fontWeight: "bold" },
});