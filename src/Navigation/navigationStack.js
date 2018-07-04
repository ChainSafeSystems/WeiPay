import { StackNavigator, DrawerNavigator, TabNavigator, DrawerItems } from 'react-navigation';

import TermsScreen from '../Screens/Setup/ViewTerms';
import CreateOrRestore from '../Screens/Setup/CreateOrRestore';
import CreateWalletName from '../Screens/Setup/CreateWalletName';
import GeneratePassphrase from '../Screens/Setup/GeneratePassphrase';
import ConfirmPassphrase from '../Screens/Setup/ConfirmPassphrase';
import CreateWalletNameRecovered from '../Screens/Setup/CreateWalletNameRecovered';
import RecoverWallet from '../Screens/Setup/RecoverWallet';
import EnableTokens from '../Screens/Setup/EnableTokens';
import QrScannerWindow from '../Screens/Main/PortfolioTabs/QrCodeScanner';

import Drawer from '../drawer';
import PortfolioCoin from '../Screens/Main/PortfolioTabs/PortfolioCoin';
import PortfolioToken from '../Screens/Main/PortfolioTabs/PortfolioToken';
import addContact from '../Screens/Main/SettingsSubPages/addContact';
import contacts from '../Screens/Main/Contacts';
import ContactAddresses from '../Screens/Main/SettingsSubPages/ContactAddresses';
import QrCodeScanner from '../Screens/Main/PortfolioTabs/QrCodeScanner';
import CoinSend from '../Screens/Main/PortfolioTabs/CoinSend'
import AddContactComponent from '../Components/AddContactList'

/**
 * Constant contains all the screens that can be navigated to using the 
 * navigate method from any class
 */
const navigator = StackNavigator({

  terms: {
    screen: TermsScreen
  },
  addContact: {
    screen: addContact
  },
  contacts: {
    screen: contacts
  },
  createOrRestore: {
    screen: CreateOrRestore
  },
  createWalletName: {
    screen: CreateWalletName
  },
  generatePassphrase: {
    screen: GeneratePassphrase
  },
  confirmPassphrase: {
    screen: ConfirmPassphrase
  },
  createWalletNameRecovered: {
    screen: CreateWalletNameRecovered
  },
  recoverWallet: {
    screen: RecoverWallet
  },
  enableTokens: {
    screen: EnableTokens
  },
  Drawer: {
    screen: Drawer
  },
  PortfolioCoin: {
    screen: PortfolioCoin
  },
  PortfolioToken: {
    screen: PortfolioToken
  },
  QCodeScanner: {
    screen: QrCodeScanner
  },
  CoinSend: {
    screen: CoinSend
  },
  contactAddresses: {
    screen: ContactAddresses
  }
}, {

    headerStyle: {
      borderBottomWidth: 0
    },
    lazy: true
  });


export default navigator;


// header: ({ navigate }) => {
//   return {
//     style: {
//       headerStyle: { shadowColor: 'transparent'}
//     }
//   }
// }
