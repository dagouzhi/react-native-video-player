# react-native-shortcuts

## Getting started

`$ npm install @hongtangyun/react-native-shortcuts --save`

### Mostly automatic installation

`$ react-native link @hongtangyun/react-native-shortcuts`

## Usage
```javascript
import shortcuts from '@hongtangyun/react-native-shortcuts';

shortcuts.AddPinnedShortcut({
  id: '001',
  icon: 'https://dummyimage.com/114x114/02adea&text=icon',
  label: '测试',
  link: 'hongtangyun://platformapi/startapp?appId=test',
})
```
