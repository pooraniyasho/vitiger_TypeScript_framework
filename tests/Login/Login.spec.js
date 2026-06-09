import {test} from '../../fixtures/customFixture.js'
import {LoginPage} from '../../pages/login.js'
import data from '../../test-data/login.json';

test('POM Login',async ({signin}) => { 
    await signin.verifyHomePage(data.Homeurl);
    })