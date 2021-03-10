import { ApiPromise, WsProvider } from '@polkadot/api';

const init = async () => {
    // Initialise the provider to connect to the local node
    // Feel free to change to a local node
    const provider = new WsProvider('wss://rpc.polkadot.io');

    // Create the API and wait until ready
    const api = await ApiPromise.create({ provider });

    // Retrieve the chain & node information information via rpc calls
    const [chain, nodeName, nodeVersion] = await Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.name(),
        api.rpc.system.version()
    ]);

    console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
}

init().catch(console.log).finally(() => process.exit(0));
