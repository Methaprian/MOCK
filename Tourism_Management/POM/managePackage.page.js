import { expect } from 'chai'
class ManagePackage{
    get lastCreated_TEXT(){
        return $$(`//td[@data-th='Name']`)
    }

    //Business Libraries

    async searchCreatedPackage(pkg_name){
        let text=await Promise.all(this.lastCreated_TEXT.map(async a=>await a.getText()))
        expect(text).to.contain(pkg_name)

    }

}