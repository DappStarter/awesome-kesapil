require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note pulse purpose gesture local force gift'; 
let testAccounts = [
"0xa0f8c568d099a12920d104bd7df52dbe74bd69f605de289741879fe9818b0f40",
"0x960716244ecd41fd91b9b83eac1754a9a2a44e816e3b78e25719a617fa44aa2a",
"0xe6acd383fe6f0f420752e95c1e0242f7679802be1d4a15af715264dd6220349b",
"0x045cd742a75c49e557534aa4624aa85d5c0a74bcf09c6d69e59fa1ecc69e6bc6",
"0x96ec26fe573e8bae0e5ed239030fd6fb731bad57b6e4381f6902266e0b1795b7",
"0x8ccb30e70337e4034ed698d1bedcc9c42f3a619f9ef6811c4150903ec973e6d8",
"0x35fa40ffcd9bb3abbcce590db6a3364f0290070ce603af7965ab57dc4b9ae142",
"0x1be49a0867fd4254654e536430aea7a0187d0cd486a16465347d1b0e2a1c4682",
"0xbe21b2665ec646b9a90872f58f3593ed2f620bd1ccd29daed1f67e6ba06003ce",
"0x5ace0680ebc89f73cb816561b570a48a64d0f86d4959394039e83a51c1b8b19c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
