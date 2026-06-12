import{test} from '../../fixtures/customFixture.js'
import Oppurdet from '../../test-data/Oppurtunities.json'
import {Randomnumber} from '../../utilities/Randomnumber.js'

test('create Opportunities',async ({opportunities}) => {
    test.slow();
      let randname= Randomnumber();
    let oppname=Oppurdet.OpportunityName+randname;
    //create Opportunities
    await opportunities.createOpportunities(oppname);
   //validation
    await opportunities.verifyOppurtunity(oppname);

})