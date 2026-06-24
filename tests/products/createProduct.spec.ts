import { test } from '../../fixtures/customFixture.ts'
import productde from '../../test-data/Products.json'
import {Randomnumber} from '../../utilities/Randomnumber.js'

test('Create product',async ({products}) => {
    test.slow();
    let randname= Randomnumber();
    let proName=productde.productname+randname;
    await products.createproductdetail(proName,productde.unitPrice,productde.usageunit,productde.qtyinstock,productde.path,productde.path,productde.uploadpath);
    await products.verifyproduct(proName);
});