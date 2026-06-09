import{test} from '../../fixtures/customFixture.js'
import quote from '../../test-data/Quote.json'
import{Randomnumber} from '../../utilities/Randomnumber.js'

test('Create quote',async ({quotes}) => {
    test.setTimeout(60000);
let randomnumber=new Randomnumber();
let ranName = randomnumber.randomnumber();
let Quotename=quote.subject+ranName;

await quotes.createQuote(Quotename,quote.bill_street,quote.ship_street,quote.quoteheader);
await quotes.verifyQuoteCreation(Quotename);


})