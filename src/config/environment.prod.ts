import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyDiAqzPWtxQ9dC40jOUdBSq3pz-MYwEApY',
    authDomain: 'yowane-b7809.firebaseapp.com',
    databaseURL: 'https://yowane-b7809.firebaseio.com',
    projectId: 'yowane-b7809',
    storageBucket: 'yowane-b7809.appspot.com',
    messagingSenderId: '473392600909',
    appId: '1:473392600909:web:ff6bca57d4d8d237804904',
    measurementId: 'G-QNF4EY714K'
  },
  settings: {
    enabledOAuthLogin: true,
    enabledOffline: true,
    appName: 'YOWANE',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
