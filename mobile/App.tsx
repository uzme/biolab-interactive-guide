import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Linking, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { WebView, type WebViewNavigation } from 'react-native-webview';

const CANONICAL_BIOLAB_URL = 'https://biolabguide-fbcitqyf.manus.space/';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const allowNavigation = (request: WebViewNavigation) => {
    if (request.url.startsWith(CANONICAL_BIOLAB_URL) || request.url.startsWith('about:blank')) return true;
    Linking.openURL(request.url).catch(() => undefined);
    return false;
  };

  if (hasError) return <SafeAreaView style={styles.errorScreen}>
    <StatusBar style="light" />
    <View style={styles.errorCard}>
      <View style={styles.logo}><Text style={styles.logoText}>BL</Text></View>
      <Text style={styles.errorKicker}>BIO.LAB / LAB-01</Text>
      <Text style={styles.errorTitle}>Saytga ulanish amalga oshmadi</Text>
      <Text style={styles.errorBody}>BioLab Mobile original saytning aynan o‘z interfeysini ko‘rsatadi. Internetni tekshirib, qayta urinib ko‘ring.</Text>
      <Pressable onPress={() => { setHasError(false); setIsLoading(true); setReloadKey(value => value + 1); }} style={({ pressed }) => [styles.retry, pressed && styles.retryPressed]}><Text style={styles.retryText}>Qayta urinish ↗</Text></Pressable>
    </View>
  </SafeAreaView>;

  return <SafeAreaView style={styles.screen}>
    <StatusBar style="dark" />
    <WebView
      key={reloadKey}
      source={{ uri: CANONICAL_BIOLAB_URL }}
      originWhitelist={[CANONICAL_BIOLAB_URL, 'https://*', 'http://*']}
      onShouldStartLoadWithRequest={allowNavigation}
      onLoadStart={() => setIsLoading(true)}
      onLoadEnd={() => setIsLoading(false)}
      onError={() => { setIsLoading(false); setHasError(true); }}
      cacheEnabled
      cacheMode="LOAD_DEFAULT"
      domStorageEnabled
      javaScriptEnabled
      sharedCookiesEnabled
      thirdPartyCookiesEnabled
      allowsBackForwardNavigationGestures
      setSupportMultipleWindows={false}
      injectedJavaScriptBeforeContentLoaded={'window.__BIOLAB_EXPO_GO__ = true; true;'}
      style={styles.webView}
    />
    {isLoading && <View pointerEvents="none" style={styles.loadingOverlay}><View style={styles.loadingCard}><View style={styles.loadingLogo}><Text style={styles.loadingLogoText}>BL</Text></View><ActivityIndicator color="#14b8a6" size="small" style={styles.spinner} /><Text style={styles.loadingText}>BioLab yuklanmoqda…</Text></View></View>}
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f7fbfa' },
  webView: { flex: 1, backgroundColor: '#f7fbfa' },
  loadingOverlay: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f7fbfa' },
  loadingCard: { alignItems: 'center' },
  loadingLogo: { width: 52, height: 52, borderRadius: 17, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a5358' },
  loadingLogoText: { color: '#ffffff', fontSize: 15, fontWeight: '900' },
  spinner: { marginTop: 14 },
  loadingText: { marginTop: 10, color: '#5b7c77', fontSize: 13, fontWeight: '700' },
  errorScreen: { flex: 1, backgroundColor: '#081c1d', alignItems: 'center', justifyContent: 'center', padding: 24 },
  errorCard: { width: '100%', maxWidth: 360, borderWidth: 1, borderColor: '#2d5756', borderRadius: 22, backgroundColor: '#102a2c', padding: 22 },
  logo: { width: 48, height: 48, borderRadius: 16, backgroundColor: '#0f7774', alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#ffffff', fontSize: 15, fontWeight: '900' },
  errorKicker: { marginTop: 18, color: '#8ce9d7', fontSize: 10, fontWeight: '900', letterSpacing: 1.5 },
  errorTitle: { marginTop: 6, color: '#eefaf6', fontSize: 23, fontWeight: '900', lineHeight: 29, letterSpacing: -0.6 },
  errorBody: { marginTop: 9, color: '#b6d3cb', fontSize: 13, lineHeight: 20 },
  retry: { marginTop: 20, alignItems: 'center', borderRadius: 12, backgroundColor: '#9ce9d6', paddingVertical: 12 },
  retryPressed: { opacity: 0.78, transform: [{ scale: 0.98 }] },
  retryText: { color: '#123b3a', fontSize: 13, fontWeight: '900' },
});
