import { expect } from "chai"
import {Key} from "webdriverio"
class CreatePackage{
    get pkg_name_TF(){
        return $(`#packagename`)
    }

    get pkg_type_TF(){
        return $(`#packagetype`)
    }

    get pkg_location_TF(){
        return $(`#packagelocation`)
    }

    get pkg_price_TF(){
        return $(`#packageprice`)
    }

    get pkg_feature_TF(){
        return $(`#packagefeatures`)
    }

    get pkg_details_TA(){
        return $(`#packagedetails`)
    }

    get pkg_imgUpload_BTN(){
        return $(`#packageimage`)
    }

    get pkg_create_BTN(){
        return $(`[name="submit"]`)
    }

    get pkg_reste_BTN(){
        return $(`//button[.='Reset']`)
    }

    get success_TEXT(){
        return $(`//div[@class='succWrap']`)
    }

    // Business Libraries

    async createPackage(pkg_name,pkg_type,pkg_location,pkg_price,pkg_features,pkg_details){

        expect(await this.pkg_name_TF.waitForDisplayed({timeout:3000})).to.be.true
        await this.pkg_name_TF.setValue(pkg_name)

        expect(await this.pkg_type_TF.waitForDisplayed({timeout:3000})).to.be.true
        await this.pkg_type_TF.setValue(pkg_type)

        expect(await this.pkg_location_TF.waitForDisplayed({timeout:3000})).to.be.true
        await this.pkg_location_TF.setValue(pkg_location)

        expect(await this.pkg_price_TF.waitForDisplayed({timeout:3000})).to.be.true
        await this.pkg_price_TF.setValue(pkg_price)

        expect(await this.pkg_feature_TF.waitForDisplayed({timeout:3000})).to.be.true
        await this.pkg_feature_TF.setValue(pkg_features)

        expect(await this.pkg_details_TA.waitForDisplayed({timeout:3000})).to.be.true
        await this.pkg_details_TA.setValue(pkg_details)

        expect(await this.pkg_imgUpload_BTN.waitForClickable({timeout:3000})).to.be.true
        await this.pkg_imgUpload_BTN.click()
        
        await browser.keys([Key.Ctrl,'v'])

        expect(await this.pkg_create_BTN.waitForClickable({timeout:3000})).to.be.true
        await this.pkg_create_BTN.click()

        expect(await this.success_TEXT.getText()).to.contain(`Package Created Successfully`)

    }
}
export default new CreatePackage()