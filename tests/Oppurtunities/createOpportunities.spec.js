import{test} from '../../fixtures/customFixture.js'
import Oppurdet from '../../test-data/Oppurtunities.json'
import {Randomnumber} from '../../utilities/Randomnumber.js'

test('create Opportunities',async ({opportunities}) => {
    test.slow();
    let randnum= new Randomnumber();
    let ranname=randnum.randomnumber();
    let oppname=Oppurdet.OpportunityName+ranname;
    //create Opportunities
    await opportunities.createOpportunities(oppname);
   //validation
    await opportunities.verifyOppurtunity(oppname);

})