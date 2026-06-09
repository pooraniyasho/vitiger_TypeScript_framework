import {test} from '../../fixtures/customFixture.js'
import salesorder from '../../test-data/salesorder.json'
import {Randomnumber} from '../../utilities/Randomnumber.js'


test('Create invoice', async ({ sales }) => {
    test.slow();
  let randomnum= new Randomnumber();
  let randname=randomnum.randomnumber();
  let salesub=salesorder.subject+randname;
  await sales.createsales(salesorder.salesheader,salesub, salesorder.billStreet, salesorder.shipStreet, salesorder.qty);
  await sales.verifysalesinfo(salesub);
  await sales.generateinvoice(salesorder.invoiceheader);

})