import { Encrypter } from '@/domain/forum/application/cryptography/encrypter'

export class FakerEncrypter implements Encrypter {
  encrypt(payload: Record<string, unknown>): Promise<string> {
    return JSON.stringify(payload)
  }
}
