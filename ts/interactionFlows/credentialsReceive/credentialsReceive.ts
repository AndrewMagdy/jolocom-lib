import { plainToClass, classToPlain } from 'class-transformer'
import { SignedCredential } from '../../credentials/signedCredential/signedCredential';
import { ICredentialsReceiveAttrs } from './types'

export class CredentialsReceive {
  public signedCredentials: SignedCredential[]

  public static create(signedCredentials: SignedCredential[]): CredentialsReceive {
    const credentialsReceive = new CredentialsReceive() 
    credentialsReceive.signedCredentials = signedCredentials

    return credentialsReceive
  }
  // TODO: add method
  // public async validateCredentials(did: string): Promise<boolean> {
  // }

  public getSignedCredentials(): SignedCredential[] {
    return this.signedCredentials
  }

  public toJSON(): ICredentialsReceiveAttrs {
    return classToPlain(this) as ICredentialsReceiveAttrs
  }

  public static fromJSON(json: ICredentialsReceiveAttrs): CredentialsReceive {
    const credentialsReceive = plainToClass(CredentialsReceive, json)
    credentialsReceive.signedCredentials = json.signedCredentials
      .map(sCred => plainToClass(SignedCredential, sCred))

    return credentialsReceive
  }

}