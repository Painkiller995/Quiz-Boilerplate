import 'expo-router/entry';

import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// Must be exported or Fast Refresh won't update the context
export function App() {
  // @ts-ignore
  const ctx = require.context('./screens');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
