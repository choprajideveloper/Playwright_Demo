import {test as baseTest} from '../fixtures/pom-fixture'
import CommonUtils from '../utils/common-utils'


type CommonFixtureType = {
    commonUtils : CommonUtils
}
export const test  = baseTest.extend<CommonFixtureType>(
    {
        commonUtils: async({},use)=>{
          await use(new CommonUtils())
        }
    }
)
