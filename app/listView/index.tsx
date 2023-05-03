import { StyleSheet, View, Text, ScrollView, useColorScheme, Button } from "react-native";
import { EdgeInsets, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { TripsButton } from "../../components/TripButton";
import { WishButton } from "../../components/WishButton";
import { useState } from "react";

import { Header } from "../../components/Header";
import { Trips, getCurrentTrips } from "../../data/trips";
import { WishList, getCurrentWishList } from "../../data/wishList";

export default function () {
    const isLightMode: boolean = useColorScheme() === "light";
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions

    const [TripsArray, setTripsArray] = useState<Trips[]>(getCurrentTrips());
    const [WishArray, setWishArray] = useState<WishList[]>(getCurrentWishList());

    const styles = StyleSheet.create({
        scrollView: {
            borderRadius: 8,
            marginHorizontal: 16,
            marginTop: 16,
            overflow: "hidden",
        },
        rowContainer: {
            flexDirection: "column",
            rowGap: 8,
        },
        summaryTitle: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 27,
        },
        summarySubtitle: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontSize: 16,
            lineHeight: 22,
            fontWeight: "600",
        },
        subtitle: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontWeight: "600",
            fontSize: 16,
            lineHeight: 22,
        },
        marginBottom: {
            marginBottom: 32,
        },
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 8,
            paddingVertical: 8,
        },
        view: {
            flexDirection: "column",
            rowGap: 8,
            marginBottom: insets.bottom,
        },
    });

    return (
        <SafeAreaProvider>
            <Header title={"Expenses"} hasBackButton={true} hasAddButton={true} />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Summary */}
                <View style={styles.container}>
                    <View style={{ alignSelf: "flex-start" }}>
                        <Text style={styles.summaryTitle}>List View</Text>
                    </View>
                </View>
                {/* Latest expenses */}

                <View style={[styles.rowContainer, styles.marginBottom]}>
                    {TripsArray.length > 0 ? (
                        <View style={styles.view}>
                            {TripsArray.map((item: any, index: number) => {
                                return (
                                    <TripsButton
                                        date={item.date}
                                        city={item.city}
                                        nPhotos={item.nPhotos}
                                        nNotes={item.nNotes}
                                        newNavigation={"../"}
                                    />
                                );
                            })}
                        </View>
                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>
                                No Trips
                            </Text>
                            <Text style={{ fontWeight: "300" }}>
                                Add one by pressing the + icon.
                            </Text>
                        </View>
                    )}
                </View>
                {/* Latest expenses */}
                <View style={{ alignSelf: "flex-start" }}>
                    <Text style={styles.summarySubtitle}>Wish List</Text>
                </View>
                <View style={[styles.rowContainer, styles.marginBottom]}>
                    {WishArray.length > 0 ? (
                        <View style={styles.view}>
                            {WishArray.map((item: any, index: number) => {
                                return <WishButton city={item.city} newNavigation={"../"} />;
                            })}
                        </View>
                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>
                                No Trips
                            </Text>
                            <Text style={{ fontWeight: "300" }}>
                                Add one by pressing the + icon.
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}
