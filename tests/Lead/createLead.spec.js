import { test } from '../../fixtures/customFixture.js'
import Leaddetails from '../../test-data/lead.json'
import {Randomnumber} from '../../utilities/Randomnumber.js'


test('Create leads', async ({ leads }) => {
test.slow();
    let randnum= new Randomnumber();
    let randname=randnum.randomnumber();
    let leadname=Leaddetails.firstname+randname;
    await leads.createLead(leadname, Leaddetails.salutationtype, Leaddetails.lastname, Leaddetails.company, Leaddetails.mobile, Leaddetails.email);
    await leads.verifyLead(leadname);
    await leads.convertLead(Leaddetails.closingdate);
    await leads.verifycomp(Leaddetails.company);
});