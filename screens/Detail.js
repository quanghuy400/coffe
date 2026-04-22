import React, { useState } from "react";
import {
  View, Text, StyleSheet, Image,
  TouchableOpacity, ScrollView, StatusBar,
} from "react-native";

const imageMap = {
  "2.png": require("../assets/2.png"),
  "3.png": require("../assets/3.png"),
  "4.png": require("../assets/4.png"),
  "5.png": require("../assets/5.png"),
};

export default function Detail({ route, navigation }) {
  const { item } = route.params;
  const [selectedSize, setSelectedSize] = useState("M");
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail</Text>
        <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.heartBtn}>
          <Text style={styles.heartIcon}>{liked ? "❤️" : "🤍"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={imageMap[item.image]} style={styles.coffeeImage} resizeMode="cover" />

        <View style={styles.content}>
          {/* Title */}
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.coffeeName}>{item.name}</Text>
              <Text style={styles.coffeeType}>{item.type}</Text>
            </View>
            <View style={styles.iconsRow}>
              <View style={styles.iconBox}><Text style={styles.iconEmoji}>🍃</Text></View>
              <View style={styles.iconBox}><Text style={styles.iconEmoji}>☕</Text></View>
              <View style={styles.iconBox}><Text style={styles.iconEmoji}>🥛</Text></View>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Rating */}
          <View style={styles.ratingRow}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.ratingScore}>{item.rating}</Text>
            <Text style={styles.ratingCount}>({item.reviews})</Text>
          </View>

          <View style={styles.divider} />

          {/* Description */}
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description} numberOfLines={expanded ? undefined : 3}>
            {item.description}
          </Text>
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <Text style={styles.readMore}>{expanded ? "Show Less" : "Read More"}</Text>
          </TouchableOpacity>

          {/* Size */}
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeRow}>
            {["S", "M", "L"].map((s) => (
              <TouchableOpacity
                key={s}
                style={[styles.sizeBtn, selectedSize === s && styles.sizeBtnActive]}
                onPress={() => setSelectedSize(s)}
              >
                <Text style={[styles.sizeBtnText, selectedSize === s && styles.sizeBtnTextActive]}>
                  {s}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>${item.price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.buyBtn} activeOpacity={0.85}>
          <Text style={styles.buyBtnText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingHorizontal: 20, paddingTop: 50, paddingBottom: 12, backgroundColor: "#fff",
  },
  backBtn: {
    width: 38, height: 38, borderRadius: 12,
    borderWidth: 1, borderColor: "#E5E5EA", alignItems: "center", justifyContent: "center",
  },
  backIcon: { fontSize: 26, color: "#1C1C1E", lineHeight: 30 },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#1C1C1E" },
  heartBtn: {
    width: 38, height: 38, borderRadius: 12,
    borderWidth: 1, borderColor: "#E5E5EA", alignItems: "center", justifyContent: "center",
  },
  heartIcon: { fontSize: 18 },
  coffeeImage: {
  width: "100%",
  height: 250,
  resizeMode: "contain",
  backgroundColor: "#1C1C1E",
},
  content: { padding: 20 },
  titleRow: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "flex-start", marginBottom: 16,
  },
  coffeeName: { fontSize: 22, fontWeight: "bold", color: "#1C1C1E" },
  coffeeType: { fontSize: 13, color: "#888", marginTop: 4 },
  iconsRow: { flexDirection: "row", gap: 8 },
  iconBox: {
    width: 34, height: 34, backgroundColor: "#F5EFE6",
    borderRadius: 8, alignItems: "center", justifyContent: "center",
  },
  iconEmoji: { fontSize: 16 },
  divider: { height: 1, backgroundColor: "#F0F0F0", marginVertical: 14 },
  ratingRow: { flexDirection: "row", alignItems: "center" },
  star: { fontSize: 18 },
  ratingScore: { fontSize: 16, fontWeight: "bold", color: "#1C1C1E", marginLeft: 6 },
  ratingCount: { fontSize: 13, color: "#888", marginLeft: 4 },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: "#1C1C1E", marginBottom: 10, marginTop: 4 },
  description: { fontSize: 13, color: "#666", lineHeight: 20 },
  readMore: { color: "#C67C4E", fontSize: 13, fontWeight: "600", marginTop: 4, marginBottom: 20 },
  sizeRow: { flexDirection: "row", gap: 12 },
  sizeBtn: {
    flex: 1, height: 44, borderRadius: 12,
    borderWidth: 1.5, borderColor: "#E5E5EA", alignItems: "center", justifyContent: "center",
  },
  sizeBtnActive: { borderColor: "#C67C4E", backgroundColor: "#FFF5EE" },
  sizeBtnText: { fontSize: 15, color: "#888", fontWeight: "600" },
  sizeBtnTextActive: { color: "#C67C4E" },
  bottomBar: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingHorizontal: 24, paddingVertical: 16, paddingBottom: 30,
    borderTopWidth: 1, borderTopColor: "#F0F0F0", backgroundColor: "#fff",
  },
  priceLabel: { fontSize: 12, color: "#888" },
  priceValue: { fontSize: 22, fontWeight: "bold", color: "#C67C4E" },
  buyBtn: {
    backgroundColor: "#C67C4E", borderRadius: 16,
    paddingHorizontal: 50, height: 54, alignItems: "center", justifyContent: "center",
  },
  buyBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});