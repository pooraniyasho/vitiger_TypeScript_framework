import { Locator } from "@playwright/test";

export async function selectByValue(element:Locator, value:string) {
    await element.selectOption(value);
}

export async function selectByLabel(element:Locator, text:string) {
    await element.selectOption({ label: text });
}

export async function selectByIndex(element:Locator, index:number) {
    await element.selectOption({ index: index });
}