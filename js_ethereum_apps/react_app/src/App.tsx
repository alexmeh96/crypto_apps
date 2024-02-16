import {WagmiProvider} from 'wagmi'

import {config} from "./config";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./index";
import {ConnectWallet} from "./components/ConnectWallet";


export const App = () => {
    return (
        <div>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <ConnectWallet />
                </QueryClientProvider>
            </WagmiProvider>
        </div>
    );
};
