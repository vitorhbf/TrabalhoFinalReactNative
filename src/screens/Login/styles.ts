import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  gradient: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100%",
    
  },
  riotLogo: {
    width: 120,  
    height: 120,
  },
  logoImage: {
    alignSelf: "center",
    paddingHorizontal: 30,
    marginVertical: 20,
    width: 150,  
    height: 150, 
    resizeMode: 'contain', 
  },
  text:{
    color: "#C89B3C",
    textAlign: "center",
    fontSize: 22,
    marginTop: -10,
    fontFamily: "BeaufortforLOLBold"
  },
  textInput: {
    marginTop: 20,
    height: 40,
    width: "85%",
    fontSize: 18,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#C89B3C',
    alignSelf: "center",
    fontFamily: "BeaufortforLOLBold",
  },
  icon: {
    position: 'absolute',
    width: '0%',
    right: 60,
    top: 140
  },
  textInputEntrar:{
    marginTop: 20,
    height: 40,
    padding: 10,
    width: '60%',
    color: '#C89B3C',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#C89B3C',
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: '#fff',
    
  },
  text2:{
    color: "#C89B3C",
    textAlign: "center",
    fontSize: 20,
    marginBottom: -10,
    fontWeight: "bold",
    paddingTop: 10,
    fontFamily: "BeaufortforLOLBold"
  },
  text3:{
    color: "white",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
    fontFamily: "BeaufortforLOLBold"
  },
  text4:{
    color: "white",
    fontSize: 13,
    marginLeft: 4,
    fontFamily: "BeaufortforLOLBold"
  },
  textEntrar:{
    color: "#C89B3C",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  logincontainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: 350,
    paddingBottom: 20,
    marginTop: 20,
   
  },
  gifImage:{
    alignSelf: "center",
    paddingHorizontal: 30,
    marginVertical: 20,
    width: 300,  
    height: 300, 
    resizeMode: 'contain', 
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  footer:{
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -45,
  },
  animatedLine: {
    position: 'absolute',
    width: '100%',
    height: 2,
    backgroundColor: '#00FFFF',
    zIndex: -1,
  },
});
  


export default styles;



