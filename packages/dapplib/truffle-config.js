require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note spider unknown imitate prize foster toss'; 
let testAccounts = [
"0x11d2e1b9a15604c0efff15e41d028d16eca92c939cb32f6bbc473651e7aca1d3",
"0x803dbe700bc52a3dcfa8b04857b06822e4fab43ba7dadff1d243234929439ac1",
"0x6469ead6c4acad37db803934cf48f9508e5a5c300cf2a4dd989ac55764ba0632",
"0xf67f93487ad1cebd29e66ef2c1a0ba0b84506a2d04a845337e970cef4252d0a8",
"0xd5eba420ef2a38daaebd7d9a6164136c735079bfb7fd65c9f6e509a75aa6ada1",
"0x2dd9376d81b22e62d58061c4f40a5e51e3c1f21d094e6c32f0b8d75c72498177",
"0x10ad707a1e5a7605360616662113d52a88805824af98d795ffb866cd7c4e4394",
"0xdad2e67683ba7299e5f1af7ed34292eb760129844e1f895796c81c4ec1f0fbb5",
"0x98da0648a0c51b5d7dd3a294a4ea5036ea0ae1d0d307b0dbfb0bbfaa33e87956",
"0x08af81f6e6a5819e2018c93c83d57bf68c6139fb13c3257efea8e47c428ba1da"
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
            version: '^0.8.0'
        }
    }
};

