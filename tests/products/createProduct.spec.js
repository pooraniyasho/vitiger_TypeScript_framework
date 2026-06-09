import { test } from '../../fixtures/customFixture.js'
import productde from '../../test-data/Products.json'
import {Randomnumber} from '../../utilities/Randomnumber.js'

test('Create product',async ({products}) => {
    test.slow();
    let randomname= new Randomnumber();
    let proName=productde.productname+randomname.randomnumber();
    await products.createproductdetail(proName,productde.unitPrice,productde.usageunit,productde.qtyinstock,productde.path,productde.path,productde.uploadpath);
    await products.verifyproduct(proName);
});