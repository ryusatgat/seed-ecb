# seed-ecb
KISA-SEED node.js implementation

## How to install
```js
npm i seed-ecb
```

## How to use
```js
const seed = require('seed-ecb')
const key = '0123456789012345'

seed.setKey(key)

const cryptoText = seed.encryptBase64('abcd')
console.log(cryptoText, seed.decryptBase64(cryptoText))

const plainBytes = Buffer.from('abcd')
const cryptoBytes = seed.encrypt(plainBytes)
console.log(Buffer.from(cryptoBytes).toString('base64'), cryptoBytes, seed.decrypt(cryptoBytes))
```
## Test online
[https://www.ryugod.com](https://www.ryugod.com/pages/ide/javascript/source:eJxlT89PgzAUvvNXvFvbBMnUOV3IPHD1qHcD5TEbWYuvJRlZ+N8txUnJ3uX1a79flUZbBxfAM0oY4QCEP70i5Ex+qbb+7MhItJaJPJkonOnuBAosYn2HsmIpcCRKwbra9C5sjwUcXuGSgB_VBIb4g9MQup50HvCYhCVDjck1rvCfIiLSNw6ewzb3D4_bp93zy34+sdlokmQW3RsO3DNFbC9p6Jz5wLPzBoGIOtwVpcXdlrOyknWUZVrMWnPkiy6dZTXGsuVZrOK6tlS6GBxaH1f0TYOUNWRONznXZlduXI0vLrfFYtPIQmTOvDtS+shZFToykcYZ62+spCIZRf4LJKGqwg==)
