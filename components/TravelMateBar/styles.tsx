import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
modalContent: {
    borderRadius: 50,
    overflow: "hidden",
    width: "100%",
    borderWidth: 1,
    borderColor: "#60BBB6",
    shadowRadius: 4,
},
chat: {
    width: 70,
    height: 70,
    alignItems: "flex-start",
    left: -19
},
blur: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    width: '100%',
    height: 60,
    position: 'absolute',
    borderColor: '#BDF4F1',
    borderWidth: 2,
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 20,
  },
roundshape:  {
    backgroundColor: 'white',
    height: 38, //any of height
    width: 38, //any of width
    justifyContent:"center",
    borderRadius: 22,   // it will be height/2
    alignItems: 'center',
    left: 125,
    borderWidth: 1,
    borderColor: "#60BBB6",
}

});

