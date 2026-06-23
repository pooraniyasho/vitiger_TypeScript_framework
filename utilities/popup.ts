import { Page } from "@playwright/test"

export async function switchToPopup(page:Page, action:any) {

    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        action()
    ])

    await popup.waitForLoadState()

    return popup
} 