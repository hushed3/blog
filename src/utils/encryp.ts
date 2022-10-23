import JsEncrypt from 'jsencrypt'

const publicKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAwgN8YBHI4MEBIlGR+JQs
6enE3Fz6bu66b5d6gXTyBi++Qj9C3og3q9pmqMJp2mGlRCoxXXfjvhCl2H1T0JHh
Zl7o6U9nnXWSVweivtr2x2r3q6FXOJeb9JcfPruOM6Q5AbkhCyM3G7oUnsxy00h6
CB+dG32rxN/ZWP6LeeevIPhsd6gSP5hx4ce0OJol3Y7zk6vasOliNVkK3iNdnTTz
6ZypmlOKGhY/2UjSUMl1/fWHFXHdraUWCVCBuVXL7vf+4En/ky7QYW+cpGtcZhfk
CD5Y0Js0Y4C8+iAV1ySNXSXkKVVqmwj5cMa6k1IYvi//1b86nqc9nzJJHtVfZHn2
BtxgMETge4SHrkJEQOpRfcZUWwS41pHi+tdPjFOVeInbgc5TNAJGReect5wyqjbu
0X255B4u81Oq8OdJzWhMMxIlMj90/RgZNu6oizE8cXsVoDYUXXofxIljLIXMmgYu
qiv+OJNyL4pmIPclRxO2qL7jEwdVwDQN9XSY0l4SCUlmknyHmClZhsBBzSIJuvBj
NR2J6UNjBgTojghjFTJ15oK/Xwpwjrtpjy4CWAgrXdtiweZPFCNIpOLcmUwTnAXQ
vu8w9FGyx9EgmyzKMhNAUZNtMmDMohZotvRJ6hkGplOH6x3ALrMuh9BR717o5/CW
ksPE8YYWJIvmR3EgBWtVBrsCAwEAAQ==
-----END PUBLIC KEY-----
`

// 加密
export const encryp = (data: string) => {
  const encryptor = new JsEncrypt()
  encryptor.setPublicKey(publicKey)
  const encryptData = encryptor.encrypt(data)

  return encryptData
}
