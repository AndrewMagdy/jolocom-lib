import { CredentialParser } from '../credentials/credential/credentialParser'
import { SignedCredentialParser } from '../credentials/signedCredential/signedCredentialParser'
import { CredentialRequestParser } from '../interactionFlows/credentialRequest/credentialRequestParser'
import { CredentialResponseParser } from '../interactionFlows/credentialResponse/credentialResponseParser'
import { JSONWebTokenParser } from '../interactionFlows/JSONWebTokenParser'
import { CredentialsReceiveParser } from '../interactionFlows/credentialsReceive/credentialsReceiveParser'
import { AuthenticationParser } from '../interactionFlows/authentication/authenticationParser'
import { CredentialOfferReqParser } from '../interactionFlows/credentialOfferRequest/credentialOfferRequestParser';

export const parse = {
  interactionJSONWebToken: JSONWebTokenParser,
  credential: CredentialParser,
  credentialRequest : CredentialRequestParser,
  credentialResponse: CredentialResponseParser,
  credentialsReceive: CredentialsReceiveParser,
  signedCredential : SignedCredentialParser,
  authentication: AuthenticationParser,
  credentialOfferRequest: CredentialOfferReqParser
}
