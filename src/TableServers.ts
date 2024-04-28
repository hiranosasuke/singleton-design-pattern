export class TableServers {
  private static readonly _instance: TableServers = new TableServers();
  private servers: string[] = [];
  private nextServer: number = 0;

  private constructor() {
    console.log("constructor");
    this.servers.push("Tim");
    this.servers.push("Sue");
    this.servers.push("Mary");
    this.servers.push("Bob");
  }

  public static GetTableServers(): TableServers {
    return this._instance;
  }

  public GetNextServer(): string {
    const output = this.servers[this.nextServer];

    this.nextServer++;

    if (this.nextServer >= this.servers.length) {
      this.nextServer = 0;
    }

    return output;
  }
}
