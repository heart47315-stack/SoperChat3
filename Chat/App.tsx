// Root entry for Expo Router. This import registers the router
// and provides the proper App entrypoint expected by Expo.
//
// การทำงาน: การเรียก `expo-router/entry` จะลงทะเบียนระบบ routing
// ที่อ่านโฟลเดอร์ `app/` เพื่อสร้างหน้าต่าง ๆ อัตโนมัติ (file-based routing).
// ไฟล์นี้มีไว้เพียงเพื่อให้ `node_modules/expo/AppEntry.js` พบโมดูล App.

import 'expo-router/entry';
