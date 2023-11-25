import { ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#091428',
        padding: 10,
    },
    logoImage: {
        alignSelf: "center",
        paddingHorizontal: 30,
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "#C89B3C",
        fontFamily: "BeaufortforLOLBold"
    },
    placeholder: {
        color: '#fff',
        opacity: 10,
    },
    input: {
        height: 40,
        width: '85%',
        borderColor: '#C89B3C',
        borderWidth: 2,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 18,
        fontFamily: "BeaufortforLOLBold",
        color: 'white'
    },
    registerButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 18,
        width: '55%',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#C89B3C',
    },
    buttonText: {
        color: '#C89B3C',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "BeaufortforLOLBold"
    },
    clearButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "BeaufortforLOLBold"
    },
    storedDataContainer: {
        marginTop: 20,
    },
    storedDataTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    invalidInput: {
        borderColor: 'red',
    },
    statusText: {
        color: 'red',
        marginBottom: 10,
        fontFamily: "BeaufortforLOLBold"
    },
    loginText: {
        color: "white",
        fontSize: 15,
        marginTop: 5,
        marginLeft: 4,
        marginBottom: -10,
        fontFamily: "BeaufortforLOLBold"
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    footerImage: {
        marginTop: -30,
        width: 120,
        height: 120,
    },
    jinxImage: {
        marginTop: -20,
        width: 150,
        height: 150,
        display: "flex",
        alignSelf: "flex-end",
        marginRight: -28,
    },
    
});

export default styles;




