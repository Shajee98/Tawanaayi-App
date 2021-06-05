import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    background:{
        backgroundColor: '#000000',
        flex: 1,
        justifyContent: 'space-between'
    },
    backgroundRest:{
        backgroundColor: '#000000',
        flex: 1,
        justifyContent: 'center'
    },
    backgroundProfile:{
      backgroundColor: '#000000',
      flex: 1,
      justifyContent: 'center',
      height: '100%'
  },
    backgroundLogIn:{
      backgroundColor: '#000000',
      flex: 1,
      height: '100%'
  },
    inYellow: {
        backgroundColor: "#fff700",
        borderRadius: 360,
        alignItems: "center",
        fontFamily: "Open Sans",
        fontSize: 16,
        padding: 10,
        width: 200,
        marginBottom: 45,
        flex: 1, flexDirection: 'column', alignSelf: 'center', paddingTop: 10,
      },
      inBlue: {
        flex: 0,
        backgroundColor: "#73E6FD",
        borderRadius: 360,
        alignItems: "center",
        fontFamily: "Open Sans",
        fontSize: 16,
        padding: 10,
        width: 200,
        marginBottom: 45,
        flex: 1, flexDirection: 'column', alignSelf: 'center', paddingTop: 10,
      },
      in: {
        height: 65,
        textAlign: "center",
        width: "80%",
        fontSize: 23,
        marginTop: 34,
        color: "#FFFFFF",
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10
        //"#FFCB1F"
      },
})

export default styles