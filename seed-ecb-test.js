const assert = require('assert');
const seed = require('./seed-ecb')
 
const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let result = '';
   
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
 
    return result;
}
 
for (const i of Array.from([0,1])) {
    switch (i) {
    case 0:
        console.log('\n-- String key TEST --')
        seed.setKey('0123456789012345')
        break
    case 1:
        console.log('\n-- Base64 key TEST --')
        seed.setKey('MDEyMzQ1Njc4OTAxMjM0NQ==', 'base64')
        break
    }
 
    // echo -ne "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0" | openssl enc -seed-ecb -nosalt -e -base64 -K $(echo -n "0123456789012345" | xxd -p) -nopad
    assert(seed.encryptBase64('\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0') === 'v3A06JAzGdz7yndL2bArjQ==');
    // echo -ne "abcd\0\0\0\0\0\0\0\0\0\0\0\0" | openssl enc -seed-ecb -nosalt -e -base64 -K $(echo -n "0123456789012345" | xxd -p) -nopad
    assert(seed.encryptBase64('abcd\0\0\0\0\0\0\0\0\0\0\0\0') === '8F9Kcat9NTe9SINJa9NNSw==');
    // echo -ne "0123456789abcdef" | openssl enc -seed-ecb -nosalt -e -base64 -K $(echo -n "0123456789012345" | xxd -p) -nopad
    assert(seed.encryptBase64('0123456789abcdef') === 'QE8iZdTEUjKCjB7t9P/4pw==');
    console.log('Encryption Test: OK')
 
    // UTF8
    // echo -ne "가나다라마!" | openssl enc -seed-ecb -nosalt -e -base64 -K $(echo -n "0123456789012345" | xxd -p) -nopad
    assert(seed.decryptBase64('4+Ii7NEklHlgjg+edacG3Q==', 'utf8') === '가나다라마!');
    console.log('Decryption Test: OK')
 
    console.log('testing endcrypt/decrypt for randome string...')
    for (let i=0; i<100000; i++) {
        const str = generateRandomString(Math.floor(Math.random()*100)+1)
       
        assert(str === seed.decryptBase64(seed.encryptBase64(str)))
    }
    console.log('random string test: OK')
}
