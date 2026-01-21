window.onload = () => {
 'use strict';
 if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('./sw.js')
 .then(() => console.log('Service Worker registered successfully.'))
 .catch((error) => console.error('Service Worker registration failed:', error));
 }
};

// Implementacja powiadomień frontend
Notification.requestPermission().then(permission => {
 if (permission === 'granted') {
   console.log('Notifications allowed');
 }
});
