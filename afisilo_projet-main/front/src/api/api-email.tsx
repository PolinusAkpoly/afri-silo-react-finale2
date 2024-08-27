import { request } from "./environement"

export const sendEmail = async (data: any) => {
    const response = await fetch(request + "send/email", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify({ contact: data })
    })
    return response.json()
}