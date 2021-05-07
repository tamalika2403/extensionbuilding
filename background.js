let color = '#82CAFF';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default Background Color set to %cSky_Blue', `color: ${color}`);
});