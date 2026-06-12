import {test} from '../../fixtures/customFixture.js'
import contact1 from '../../test-data/contact.json'
import {Randomnumber} from '../../utilities/Randomnumber.js'

test('Create contact', async ({contacts}) => {
    test.slow();
    let randname= Randomnumber();
    let contactname=contact1.firstname+randname;
    //login
    await contacts.createContact(contactname, contact1.lastname, contact1.salutationtype);
    await contacts.verifycontact(contactname);
})