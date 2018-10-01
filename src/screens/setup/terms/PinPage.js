import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Text, Keyboard, Dimensions, SafeAreaView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { FormInput, Card } from 'react-native-elements';
import { setWalletPassword } from '../../../actions/AppConfig';
import LinearButton   from '../../../components/LinearGradient/LinearButton';
import BoxShadowCard from '../../../components/ShadowCards/BoxShadowCard';
import BackWithMenuNav from '../../../components/customPageNavs/BackWithMenuNav';
import RF from "react-native-responsive-fontsize"

const ethers = require('ethers');

/**
 * Initial setup screen used to allow the user to give their wallet a name after
 * a new wallet has been created
 */
class PinPage extends Component {
  /**
     * A new wallet is created, the wallet name is passed in along with usersWallets, which will be an 
     * empty array when user initially creates a wallet in setup.
     */

  navigate = () => {

    const { nextScreenToNavigate, wallet } = this.props.navigation.state.params;
    console.log('next screen is', nextScreenToNavigate);
    console.log('wallet is', wallet);

    const navigateToCreateOrRestore = NavigationActions.navigate({
      routeName: nextScreenToNavigate,
      params: { 'wallet': wallet },
    });
    this.props.navigation.dispatch(navigateToCreateOrRestore);
  };

  /**
     * The wallet name is stored in a temporary state.
     */
  setPassword(password) {
    this.props.setWalletPassword(password);
    console.log(password);
  }

  render() {
    return (
        <SafeAreaView style={styles.safeAreaView}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.mainContainer} >
              <View style={styles.navContainer}>
                <BackWithMenuNav
                  showMenu={false}
                  showBack={true}
                  navigation={this.props.navigation}
                  backPage={'createOrRestore'}
                />
              </View>
              <Text style={styles.textHeader} >Set Wallet Password</Text>
              <View style={styles.boxShadowContainer}>
                <View style={styles.contentContainer}>
                  <BoxShadowCard>
                    <Text style={styles.cardText}>
                      Create a password for wallet, for example: xxTen!!
                    </Text>
                    <View style={styles.formInputContainer}>
                      <FormInput
                        placeholder={'xxTEM!!!'}
                        onChangeText={this.setPassword.bind(this)}
                        inputStyle={styles.txtWalletName}
                      />
                    </View>
                  </BoxShadowCard>
                </View>
              </View>
              <View style={styles.btnContainer}>
                <LinearButton
                  onClickFunction={this.navigate}
                  buttonText="Next"
                  customStyles={styles.button}
                  buttonStateEnabled= { this.props.testWalletName === null && this.props.tempWalletName === null }
                />
                <View style={styles.footerGrandparentContainer} >
                  <View style={styles.footerParentContainer} >
                    <Text style={styles.textFooter} >Powered by ChainSafe </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fafbfe',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fafbfe',
    width: '100%',
  },
  navContainer: {
    flex: 0.65,
  },
  boxShadowContainer: {
    alignItems: 'center',
    flex: 2.5,
  },
  textHeader: {
    fontFamily: 'Cairo-Light',
    fontSize: RF(4),
    letterSpacing: 0.8,
    paddingLeft: '9%',
    color: '#1a1f3e',
    flex: 0.75,
  },
  contentContainer: {
    flex: 1,
    width: '82%',
  },
  cardText: {
    paddingBottom: '15%',
    paddingTop: '10%',
    paddingLeft: '10%',
    paddingRight: '10%',
    fontFamily: 'WorkSans-Light',
    letterSpacing: 0.4,
    lineHeight: RF(3.9),
    color: '#000000',
    fontSize: RF(2.4),
  },
  txtWalletName: {
    width: '100%',
    flexWrap: 'wrap',
    color: '#12c1a2',
    letterSpacing: 0.4,
    fontSize: 16,
    fontFamily: 'WorkSans-Regular',
    borderBottomWidth: 0.001,
  },
  formInputContainer: {
    width: '90%',
    marginLeft: '5%',
  },
  btnContainer: {
    flex: 2.5,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    width: '100%',
  },
  button: {
    width: '82%',
    height: Dimensions.get('window').height * 0.082,
  },
  footerGrandparentContainer: {
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '5%',
  },
  footerParentContainer: {
    alignItems: 'center',
  },
  textFooter: {
    fontFamily: 'WorkSans-Regular',
    fontSize: RF(1.7),
    color: '#c0c0c0',
    letterSpacing: 0.5,
  },
  defaultGreenColor: {
    color: '#12c1a2',
  },
})

export default connect(null, {
  setWalletPassword,
})(PinPage);