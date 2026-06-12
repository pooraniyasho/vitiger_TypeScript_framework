import{test} from '../../fixtures/customFixture.js'
import invo from '../../test-data/invoice.json'
import {Randomnumber} from '../../utilities/Randomnumber.js'

test('Create invoice',async ({invoices}) => {
test.slow();
    let randname= Randomnumber();
    let invoiceSubject=invo.subject+randname;
    await invoices.createInvoice(invoiceSubject,invo.billStreet,invo.ShipStreet,invo.qty,invo.invoheader);
    await invoices.verifyInvoice(invoiceSubject);
})