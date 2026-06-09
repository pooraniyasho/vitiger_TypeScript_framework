import{test} from '../../fixtures/customFixture.js'
import invo from '../../test-data/invoice.json'
import {Randomnumber} from '../../utilities/Randomnumber.js'

test('Create invoice',async ({invoices}) => {
test.slow();
    let randomnum = new Randomnumber();
    let inName=randomnum.randomnumber();
    let invoiceSubject=invo.subject+inName;
    await invoices.createInvoice(invoiceSubject,invo.billStreet,invo.ShipStreet,invo.qty,invo.invoheader);
    await invoices.verifyInvoice(invoiceSubject);
})