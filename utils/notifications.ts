import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function sendPushNotification(expoPushToken: string) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Queue Update',
    body: 'You have been ejected from the queue.',
    data: { type: 'ejection' },
  };

    await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'accept-encoding': 'gzip, deflate',
        'content-Type': 'application/json',
    },
    body: JSON.stringify(message),
    })
    .then(response => response.json())
    .then(data => console.log("Push response:", data))
    .catch(error => console.error("Push error:", error));

}

export async function registerForPushNotificationsAsync() {
  let token;

  if (!Device.isDevice) {
    alert('Must use physical device for Push Notifications');
    return null;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  console.log("Existing permission status:", existingStatus);
  
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
    console.log("Requested permission status:", status);
  }

  if (finalStatus !== 'granted') {
    alert('Permission for push notifications was not granted');
    return null;
  }

  try {
    const expoToken = await Notifications.getExpoPushTokenAsync();
    token = expoToken.data;
    console.log("Expo Push Token:", token);
  } catch (error) {
    console.error("❌ Error getting Expo Push Token:", error);
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

