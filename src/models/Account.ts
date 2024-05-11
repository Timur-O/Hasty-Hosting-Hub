class Account {
  id: number
  label: string
  username: string
  password: string
  status: string
  mainDomain: string
  ipAddress: string
  hostingVolume: string
  dateCreated: string
  sqlServer: string
  verificationHash: string

  constructor(
    id: number,
    label: string,
    username: string,
    password: string,
    status: string,
    mainDomain: string,
    ipAddress: string,
    hostingVolume: string,
    dateCreated: string,
    sqlServer: string,
    verificationHash: string
  ) {
    this.id = id
    this.label = label
    this.username = username
    this.password = password
    this.status = status
    this.mainDomain = mainDomain
    this.ipAddress = ipAddress
    this.hostingVolume = hostingVolume
    this.dateCreated = dateCreated
    this.sqlServer = sqlServer
    this.verificationHash = verificationHash
  }
}

export default Account
