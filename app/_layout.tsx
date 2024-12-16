import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  let tabs=["index","AvailableFoodList"]

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="+not-found" />
        <Stack.Screen options={{headerShown:false}} name="index" />
        <Stack.Screen options={{headerShown:false}} name="AvailableFoodList" />
        <Stack.Screen options={{headerShown:false}} name="RequestedFoodDetails" />
        <Stack.Screen options={{headerShown:false}} name="ReqFoodDetails" />
        <Stack.Screen options={{headerShown:false}} name="SignUpInfo" />
        <Stack.Screen options={{headerShown:false}} name="SubmissionSuccess" />
        <Stack.Screen options={{headerShown:false}} name="PremiumPage" />
        <Stack.Screen options={{headerShown:false}} name="NewRoleSelectScreen" />
        <Stack.Screen options={{headerShown:false}} name="BookingSuccess" />
        <Stack.Screen options={{headerShown:false}} name="AddFoodDetails" />
        <Stack.Screen options={{headerShown:false}} name="PremBookingSuccess" />
        <Stack.Screen options={{headerShown:false}} name="HomeScreenProvider" />
        <Stack.Screen options={{headerShown:false}} name="Map" />
        <Stack.Screen options={{headerShown:false}} name="PremiumSub" />



      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
