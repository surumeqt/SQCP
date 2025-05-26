import { useEffect } from 'react';
import { Alert } from 'react-native';
import { registerForPushNotificationsAsync } from '@/utils/notifications';
import { useAuth, useSession } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

/**
 * Custom hook to register for push notifications and handle logout on failure.
 */
export const usePushNotificationsWithLogout = () => {
  const { signOut } = useAuth();
  const { isLoaded, isSignedIn } = useSession();
  const router = useRouter();

  useEffect(() => {
    const setupNotifications = async () => {
      // Function to perform the actual logout and redirect
      const performLogoutAndRedirect = async () => {
        if (isLoaded && isSignedIn) {
          try {
            await signOut();
            router.replace('/login');
          } catch (error) {
            console.error("Error during logout after push token failure:", error);
            Alert.alert("Logout Error", "Failed to log out properly. Please restart the app.");
          }
        } else {
          console.log("Not signed in or Clerk not loaded, redirecting to login directly.");
          router.replace('/login');
        }
      };

      // Callback passed to registerForPushNotificationsAsync
      // This will trigger an Alert, and then logout after user dismisses it.
      const handleTokenRetrievalFailure = (alertMessage: string) => {
        Alert.alert(
          'Push Notifications',
          alertMessage,
          [
            {
              text: 'Okay',
              onPress: () => {
                performLogoutAndRedirect();
              }
            }
          ],
          { cancelable: false }
        );
      };

      // Call the registration function, passing our failure handler
      const token = await registerForPushNotificationsAsync(handleTokenRetrievalFailure);

      if (token) {
        console.log("Expo Push Token:", token);
      } else {
        console.warn("Push notification token could not be retrieved or permissions denied.");
      }
    };

    if (isLoaded && isSignedIn) {
      setupNotifications();
    }
  }, [isLoaded, isSignedIn, signOut, router]);
};