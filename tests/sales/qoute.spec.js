import{test} from '../../fixtures/customFixture.js'
import quote from '../../test-data/Quote.json'
import{Randomnumber} from '../../utilities/Randomnumber.js'

test('Create quote',async ({quotes}) => {
    test.slow();
  let randname= Randomnumber();
let Quotename=quote.subject+randname;

await quotes.createQuote(Quotename,quote.bill_street,quote.ship_street,quote.quoteheader);
await quotes.verifyQuoteCreation(Quotename);


})