import { defineStore } from 'pinia'

export const useNewAccountStore = defineStore({
  id: 'newAccount',
  state: () => ({
    type: null as string | null,
    label: null as string | null,
    password: null as string | null,
    domain: null as string | null,
    domainParent: null as string | null,
    cnameHash: null as string | null
  }),
  actions: {
    saveStep1(
      type: string,
      label: string,
      password: string,
      domain: string,
      domainParent: string = ''
    ) {
      this.type = type
      this.label = label
      this.password = password
      this.domain = domain
      this.domainParent = domainParent
      this.cnameHash = null
      // TODO - Get hash from server
    },
    clear() {
      this.type = null
      this.label = null
      this.password = null
      this.domain = null
      this.domainParent = null
      this.cnameHash = null
    }
  }
})
