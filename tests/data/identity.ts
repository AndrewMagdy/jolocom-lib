export default {
  testUserPublicKey: '04334f990cdc1281c6fed73dcc6de3db520c075a41ce2b93f36f85dbd5e0dc0b05975c51acb0bec9747fb3f52fd0146d1dc39d6077db0be1bd6579fd66ac144442',
  testUserDID:'did:jolo:b2tpLeBvvdPPgiwQQpSe3',
  expectedDdoJson: '{' +
    '"@context":"https://w3id.org/did/v1",' +
    '"id":"did:jolo:b2tpLeBvvdPPgiwQQpSe3",' +
    '"authenticationCredential":{' +
      '"id":"did:jolo:b2tpLeBvvdPPgiwQQpSe3#keys/generic/1",' +
      '"type":["CryptographicKey","EcDsaSAKey"],' +
      '"owner":"did:jolo:b2tpLeBvvdPPgiwQQpSe3",' +
      '"curve":"secp256k1",' +
      '"publicKeyBase64":"04334f990cdc1281c6fed73dcc6de3db520c075a41ce2b93f36f85dbd5e0dc0b05975c51acb0bec9747fb3f52fd0146d1dc39d6077db0be1bd6579fd66ac144442"' +
    '},' +
      '"created":"2018-01-24T15:42:15.882Z"' +
  '}'
}