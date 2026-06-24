import {test} from '../../fixtures/customFixture.ts'
import data from '../../test-data/login.json';

test('POM Login',async ({signin}) => { 
    test.slow();
    await signin.verifyHomePage(data.Homeurl);
    })