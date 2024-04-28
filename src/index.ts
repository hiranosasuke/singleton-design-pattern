import { TableServers } from "./TableServers";

class Program {
  host1List: TableServers = TableServers.GetTableServers();
  host2List: TableServers = TableServers.GetTableServers();

  constructor() {
    this.main();
  }

  public main() {
    for (let i = 0; i < 5; i++) {
      this.Host1GetNextServer();
      this.Host2GetNextServer();
    }
  }

  Host1GetNextServer() {
    console.log("The next server is: " + this.host1List.GetNextServer());
  }

  Host2GetNextServer() {
    console.log("The next server is: " + this.host2List.GetNextServer());
  }
}

const program: Program = new Program();
