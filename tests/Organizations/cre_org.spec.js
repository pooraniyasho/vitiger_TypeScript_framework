import {test} from '../../fixtures/customFixture.js'
import {Randomnumber} from '../../utilities/Randomnumber.js'
import data from '../../test-data/Organization.json'

test('org_create',async ({orgLogin}) => {
    let ran= new Randomnumber();
    let nameRan=ran.randomnumber();
    let orgNames=data.OrganizationName+nameRan
    await orgLogin.clickOnOrganizationTab();
    await orgLogin.verifyOrganizationTab();
    await orgLogin.clickOnCreateOrganization();
    await orgLogin.verifyCreateOrganization();
    await orgLogin.createOrganization(orgNames,data.industry,data.accountType)
    await orgLogin.verifyCreateOrganization();
})