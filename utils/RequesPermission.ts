import { PermissionsAndroid } from 'react-native';

const RequestPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Mjolo Phone App Contacts Permission',
            message: 'Mjolo Phone App needs access to your contacts ' +
                'so you can start blocking those numbers.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cansel',
            buttonPositive: 'Ok'
        }).then(() => {
            
         });
        // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //     console.log('You can use contacts');
        //     // PermissionsAndroid.

        // } else {
        //     console.log('Permission denied');
        // }
    } catch (error) {
        console.warn(error)
    }
}

export default RequestPermission;