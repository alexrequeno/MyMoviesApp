import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    homeTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    inputSearch: {
        fontSize: 14,
        color: 'white',
        width: '30%',
        justifyContent: 'center',
    },
    searchHeader: {
        position: 'absolute',
        backgroundColor: '#333',
        width: '100%',
       height: '20%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        //padding: 100
    },
    containerGreyLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        top: '30%'
    }
});

export const loginStyle = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        top: 100
    },
    loginHeader: {
        position: 'absolute',
        backgroundColor: '#333',
        width: '100%',
        height: '45%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center'
    
    },
    logo: {
        alignItems: 'center'
    },
    logoImg: {
        width: 100,
        height: 100,
        //marginTop: 35        
    },
    loginTitle: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    label: {
        //marginTop: '300',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    input: {
        fontSize: 20,
        color: 'black',
        
    },
    btnContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    btnLogin: {
        borderWidth:2,
        borderColor: '#333',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    btnLoginTxt: {

    }


});