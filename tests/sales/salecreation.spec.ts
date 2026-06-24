import {test} from '../../fixtures/customFixture.ts'
import salesorder1 from '../../test-data/salesOrder.json'
import {Randomnumber} from '../../utilities/Randomnumber.js'


test('Create invoice', async ({ sales }) => {
    test.slow();
   let randname= Randomnumber();
  let salesub=salesorder1.subject+randname;
  await sales.createsales(salesorder1.salesheader,salesub, salesorder1.billStreet, salesorder1.shipStreet, salesorder1.qty);
  await sales.verifysalesinfo(salesub);
  await sales.generateinvoice(salesorder1.invoiceheader);

})