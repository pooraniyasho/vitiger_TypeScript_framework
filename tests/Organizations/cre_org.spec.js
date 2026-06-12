import {test} from '../../fixtures/customFixture.js'
import {Randomnumber} from '../../utilities/Randomnumber.js'
import data from '../../test-data/Organization.json'

test('org_create',async ({orgLogin}) => {
    test.slow()
      let randname= Randomnumber();
    let orgNames=data.OrganizationName+randname
    await orgLogin.clickOnOrganizationTab();
    await orgLogin.verifyOrganizationTab();
    await orgLogin.clickOnCreateOrganization();
    await orgLogin.verifyCreateOrganization();
    await orgLogin.createOrganization(orgNames,data.industry,data.accountType)
    await orgLogin.verifyCreateOrganization();
})