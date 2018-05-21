import { Service } from 'typedi'

@Service()
export abstract class BaseService<T extends any> {
  public registry: T[]

  async find(): Promise<T[]> {
    return await Promise.resolve(this.registry)
  }

  async findOne(id: string): Promise<T | undefined> {
    return await Promise.resolve(
      this.registry.find((conf: any) => conf.id === id),
    )
  }

  async add(conference: T): Promise<T> {
    conference.id = conference.id || Date.now().toString()
    this.registry = [ ...this.registry, conference ]
    return Promise.resolve(conference)
  }

  async update(conference: T): Promise<T> {
    this.registry = this.registry.map(
      existing => (existing.id === conference.id ? conference : existing),
    )
    return Promise.resolve(conference)
  }

  async delete(conference: T): Promise<boolean> {
    const beforeLength = this.registry.length
    this.registry = this.registry.filter(
      (existing: any) => existing.id !== conference.id,
    )
    return Promise.resolve(Boolean(beforeLength - this.registry.length))
  }

}
