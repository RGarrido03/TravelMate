import React, { useState, useCallback, useMemo, useRef } from "react";
import { StyleSheet, View, Text, ScrollView, useColorScheme, Pressable, Image, Platform } from "react-native";
import { EdgeInsets, SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Trips, getCurrentTrips, loadInitialTrips } from "../data/trips";
import { WishList, getCurrentWishList, loadInitialWishList } from "../data/wishList";
import { getCurrentPOIs, loadInitialPOIs, POIs } from "../data/pois";
import { WishButton } from "../components/WishButton";
import { TripsButton } from "../components/TripButton";
import { loadImagesByKey } from "../data/images";
import { loadNotesByIdx } from "../data/notes";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faAdd,
    faCamera,
    faList,
    faLocationPin,
    faMoneyBill,
    faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { POIsButton } from "../components/POIsButton";
import { LinkButton } from "../components/LinkButton";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import BSHandle from "../components/BSHandle";
import TravelMateBar from "../components/TravelMateBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from "react-native-maps";
import { ModalTrip } from "../components/ModalTrip";

export default function App() {
    loadInitialPOIs();
    loadInitialTrips();
    loadInitialWishList();

    const isLightMode: boolean = useColorScheme() === "light";
    const insets: EdgeInsets = useSafeAreaInsets(); // SafeAreaView dimensions
    const navigation = useRouter();

    const [TripsArray, setTripsArray] = useState<Trips[]>(getCurrentTrips());
    const [POIsArray] = useState<POIs[]>(getCurrentPOIs());
    const [WishArray] = useState<WishList[]>(getCurrentWishList());

    // Modal props
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    // Bottom sheet
    const bottomSheetModalRef = useRef<BottomSheetModal>(null); // ref
    const snapPoints: (string | number)[] = useMemo(() => [200, "99%"], []); // variables
    const [isListView, setIsListView] = useState<boolean>(true);

    // Trip details
    const [tripID, setTripID] = useState<number>(0);
    const [city, setCity] = useState<string>(TripsArray[tripID].city);
    const [date, setDate] = useState<string>(TripsArray[tripID].date);
    const [nPhotos, setNPhotos] = useState<number>(loadImagesByKey(tripID).length);
    const [nNotes, setNNotes] = useState<number>(loadNotesByIdx(tripID).length);

    const handlePresentModalListView = useCallback((): void => {
        setIsListView(true);
        bottomSheetModalRef.current?.present();
    }, []);

    const handlePresentModalTripDetails = useCallback(
        (index: number = 0): void => {
            setTripID(index);
            const trip: Trips = TripsArray[index];
            setCity(trip.city);
            setDate(trip.date);
            setNPhotos(loadImagesByKey(index).length);
            setNNotes(loadNotesByIdx(index).length);
            setIsListView(false);
            bottomSheetModalRef.current?.present();
        },
        [TripsArray]
    );

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
        summarySubtitle: {
            color: isLightMode ? "#3B4949" : "#fff",
            fontSize: 20,
            fontWeight: "600",
            marginBottom: 10,
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
        },
        bsContentContainer: {
            flex: 1,
            paddingHorizontal: 16,
        },
        listViewButtonShape: {
            backgroundColor: isLightMode ? "#ffffffcc" : "#3B494977",
            height: 48,
            width: 48,
            borderRadius: 24, // it will be height/2
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
        },
        addButtonShape: {
            backgroundColor: isLightMode ? "#3B494977" : "#3B4949cc",
            height: 48,
            width: 48,
            borderRadius: 12, // it will be height/4
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
        },
        listButtonShadow: {
            shadowRadius: 4,
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 4 },
            borderWidth: 1,
            borderColor: "#00000033",
            borderRadius: 50,
        },
        addButtonShadow: {
            shadowRadius: 4,
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 4 },
            borderWidth: 1,
            borderColor: "#00000033",
            borderRadius: 13,
        },
        bottomButtonsView: {
            position: "absolute",
            bottom: insets.bottom + 16,
            right: 16,
            flexDirection: "column",
            rowGap: 8,
        },
        map: {
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: -1,
        },
    });

    const tripDetailsStyles = StyleSheet.create({
        photo: {
            width: "100%",
            height: 200,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#60BBB6",
        },
        view: {
            marginBottom: 16,
        },
        topView: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        topView2: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
        },
        scrollView: {
            borderRadius: 8,
        },
        buttonsView: {
            marginBottom: insets.bottom,
        },
        column: {
            flexDirection: "column",
            rowGap: 8,
        },
        title: {
            fontSize: 16,
            fontWeight: "600",
            color: isLightMode ? "#3B4949" : "#fff",
            marginBottom: 4,
        },
        mainTitle: {
            fontSize: 26,
            fontWeight: "800",
            color: isLightMode ? "#3B4949" : "#fff",
            marginBottom: 4,
            letterSpacing: -1,
        },
        mainSubtitle: {
            fontSize: 16,
            fontWeight: "400",
            lineHeight: 22,
            marginRight: 4,
            color: isLightMode ? "#3B4949" : "#fff",
        },
        icon: {
            color: isLightMode ? "#3B4949" : "#fff",
        },
        notes: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
        },
    });

    const listView = () => {
        return (
            <ScrollView style={{ borderRadius: 8 }}>
                <Text style={styles.summarySubtitle}>List View</Text>

                {/* Trips */}
                <View style={[styles.rowContainer, styles.marginBottom]}>
                    {TripsArray.length > 0 ? (
                        <View style={styles.view}>
                            {TripsArray.map((item: any, index: number) => {
                                return (
                                    <TripsButton
                                        date={item.date}
                                        city={item.city}
                                        nPhotos={loadImagesByKey(index).length}
                                        nNotes={loadNotesByIdx(index).length}
                                        onPress={handlePresentModalTripDetails.bind(this, index)}
                                        key={index}
                                    />
                                );
                            })}
                        </View>
                    ) : (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 20,
                                    marginBottom: 8,
                                }}
                            >
                                No Trips
                            </Text>
                            <Text style={{ fontWeight: "300" }}>
                                Add one by pressing the + icon.
                            </Text>
                        </View>
                    )}
                </View>

                {/* Wish List */}
                {WishArray.length > 0 && (
                    <>
                        <Text style={styles.summarySubtitle}>Wish List</Text>
                        <View style={[styles.rowContainer, { marginBottom: insets.bottom }]}>
                            <View style={styles.view}>
                                {WishArray.map((item: any, index: number) => {
                                    return (
                                        <WishButton
                                            city={item.city}
                                            newNavigation={"./"}
                                            key={index}
                                        />
                                    );
                                })}
                            </View>
                        </View>
                    </>
                )}
            </ScrollView>
        );
    };

    const tripDetails = () => {
        return (
            <>
                <ScrollView
                    style={tripDetailsStyles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={tripDetailsStyles.topView}>
                        <Text style={tripDetailsStyles.mainTitle}>{city}</Text>
                        <View style={tripDetailsStyles.notes}>
                            <Text style={tripDetailsStyles.mainSubtitle}>{nPhotos}</Text>
                            <FontAwesomeIcon icon={faCamera} style={tripDetailsStyles.icon} />
                        </View>
                    </View>
                    <View style={tripDetailsStyles.topView2}>
                        <Text style={tripDetailsStyles.mainSubtitle}>{date}</Text>
                        <View style={tripDetailsStyles.notes}>
                            <Text style={tripDetailsStyles.mainSubtitle}>{nNotes}</Text>
                            <FontAwesomeIcon icon={faNoteSticky} style={tripDetailsStyles.icon} />
                        </View>
                    </View>
                    <Pressable
                        onPress={() =>
                            navigation.push("photos/photo?id=" + 0 + "&tripID=" + tripID)
                        }
                    >
                        <View style={tripDetailsStyles.view}>
                            <Text style={tripDetailsStyles.title}>Featured photo</Text>
                            <Image
                                style={tripDetailsStyles.photo}
                                source={require("../assets/images/one.png")}
                            />
                        </View>
                    </Pressable>
                    <View style={tripDetailsStyles.view}>
                        <Text style={tripDetailsStyles.title}>Last visited POI</Text>
                        <POIsButton
                            date={POIsArray[0].date}
                            icon={POIsArray[0].icon}
                            title={POIsArray[0].title}
                            image={POIsArray[0].image}
                            newNavigation={"../pois/poi?id=" + 0}
                            key={"poi2"}
                        />
                    </View>

                    <View style={tripDetailsStyles.buttonsView}>
                        <Text style={tripDetailsStyles.title}>Main options</Text>
                        <View style={tripDetailsStyles.column}>
                            <LinkButton
                                title={"Photos"}
                                newNavigation={"photos?id=" + tripID}
                                icon={faCamera}
                            />
                            <LinkButton
                                title={"Notes"}
                                newNavigation={"notes?tripId=" + tripID}
                                icon={faNoteSticky}
                            />
                            <LinkButton
                                title={"POIs"}
                                newNavigation={"pois"}
                                icon={faLocationPin}
                            />
                            <LinkButton
                                title={"Expenses"}
                                newNavigation={"expenses?id=" + tripID}
                                icon={faMoneyBill}
                            />
                        </View>
                    </View>
                </ScrollView>
            </>
        );
    };

    return (
        <SafeAreaProvider>
            <BottomSheetModalProvider>
                {/* Add trip modal */}
                <ModalTrip
                    visible={modalVisible}
                    onClose={(): void => {
                        setModalVisible(false);
                    }}
                    tripsArray={TripsArray}
                    setTripsArray={setTripsArray}
                />

                <View style={styles.bottomButtonsView}>
                    {/* List view button */}
                    <View style={styles.listButtonShadow}>
                        <TouchableOpacity onPress={handlePresentModalListView}>
                            <BlurView style={styles.listViewButtonShape} blurReductionFactor={2}>
                                <FontAwesomeIcon
                                    icon={faList}
                                    size={22}
                                    color={isLightMode ? "#000" : "#fff"}
                                />
                            </BlurView>
                        </TouchableOpacity>
                    </View>

                    {/* Add trip button */}
                    <View style={styles.addButtonShadow}>
                        <TouchableOpacity onPress={(): void => setModalVisible(true)}>
                            <BlurView style={styles.addButtonShape} blurReductionFactor={2}>
                                <FontAwesomeIcon icon={faAdd} size={22} color={"#fff"} />
                            </BlurView>
                        </TouchableOpacity>
                    </View>
                </View>
                <TravelMateBar />

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 50,
                        longitude: 10,
                        latitudeDelta: 30,
                        longitudeDelta: 30,
                    }}
                    provider={Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                >
                    {TripsArray.map((trip: Trips, index: number) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: trip.lat, longitude: trip.lon }}
                            onPress={handlePresentModalTripDetails.bind(this, index)}
                            icon={require("../assets/pin.png")}
                        />
                    ))}
                    {WishArray.map((wish: Trips, index: number) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: wish.lat, longitude: wish.lon }}
                            title={wish.city}
                            description={"Wish list"}
                            icon={require("../assets/pin_plus.png")}
                        />
                    ))}
                </MapView>

                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    topInset={insets.top + 32 + 60}
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        borderRadius: 16,
                        backgroundColor: "transparent",
                    }}
                    backgroundStyle={{
                        backgroundColor: isLightMode ? "#ffffff77" : "#00000077",
                    }}
                    handleComponent={BSHandle}
                >
                    <BlurView
                        style={styles.bsContentContainer}
                        blurReductionFactor={2}
                        tint={isLightMode ? "light" : "dark"}
                    >
                        {isListView ? listView() : tripDetails()}
                    </BlurView>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </SafeAreaProvider>
    );
}
