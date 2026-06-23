import {test as base} from './loginfixture.ts'
import {ContactPage} from '../pages/contact.js';
import {invoicePage} from '../pages/invoice.js';
import {LeadPage} from '../pages/Lead.js';
import {opportunitiesPage} from '../pages/oppurtunities.js';
import {organizationPage} from '../pages/Organization.js';
import {productsPage} from '../pages/products.js';
import {quotePage} from '../pages/quote.js';
import {salePage} from '../pages/sale.js';
import {Login } from '../pages/login.ts';
type customfix = {
  signin:Login,
  contacts:ContactPage,
  leads:LeadPage,
  opportunities:opportunitiesPage,
  orgLogin:organizationPage,
  products:productsPage,
  invoices:invoicePage,
  quotes:quotePage,
  sales:salePage
};
export let test= base.extend<customfix>({
    signin:async({loginPage},use)=>{
        let lp=new Login(loginPage);
        await use(lp);
    },
    contacts: async({loginPage},use)=>{
        let con=new ContactPage(loginPage);
        await use(con);
    },
    leads: async({loginPage},use)=>{
        let lead=new LeadPage(loginPage);
        await use(lead);
    },
    opportunities: async({loginPage},use)=>{
        let opp=new opportunitiesPage(loginPage);
        await use(opp);
    },
    orgLogin: async({loginPage},use)=>{
        let organi=new organizationPage(loginPage);
        await use(organi);
    },
    products: async({loginPage},use)=>{
        let pro=new productsPage(loginPage);
        await use(pro);
    },
    invoices: async({loginPage},use)=>{
        let inv=new invoicePage(loginPage);
        await use(inv);
    },
    quotes: async({loginPage},use)=>{
        let quo=new quotePage(loginPage);
        await use(quo);
    },
    sales: async({loginPage},use)=>{
        let sal=new salePage(loginPage);   
        await use(sal);
    }
});