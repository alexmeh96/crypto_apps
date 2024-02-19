import {config} from "./config";
import {getAccount} from '@wagmi/core'


export async function getNonce() {
    const {address} = getAccount(config)
    const res = await fetch(`http://localhost:8085/api/nonce/${address}`, {
        // credentials: 'include',
    })

    return await res.text()
}

export async function validateMessage({message, signature}: any) {
    const res = await fetch('http://localhost:8085/api/verify', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({message, signature}),
        // credentials: 'include',
    })

    return true
}

export async function getSession() {
    const {address, chainId} = getAccount(config)

    return {address, chainId}
}

export async function valid() {
    try {
        const res = await fetch('http://localhost:8085/api/validate', {
            credentials: 'include',
        })

        console.log(await res.text())
    } catch (err) {

        console.log(err)
    }
}

export async function signOut() {

}
