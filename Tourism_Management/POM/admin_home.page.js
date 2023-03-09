const { expect } = require("chai")

class AdminHomePage{
    get dashboard_LINK(){
        return $(`//span[.='Dashboard']`)
    }

    get tour_Packages_Option(){
        return $(`//span[contains(.,'Tour Packages')]`)
    }

    get createPackage_LINK(){
        return $(`//a[.='Create']`)
    }

    get managePackage_LINK(){
        return $(`//a[.='Manage']`)
    }

    get manage_Users_LINK(){
        return $(`//span[.='Manage Users']`)
    }

    get manage_Bookings_LINK(){
        return $(`//span[.='Manage Booking']`)
    }

    get mannage_Issues_LINK(){
        return $(`//span[.='Manage Issues']`)
    }

    get manage_Enquiries_LINK(){
        return $(`//span[.='Manage Enquiries']`)
    }

    get manage_Pages_LINK(){
        return $(`//span[.='Manage Pages']`)
    }

    get admin_Settings_OPTION(){
        return $(`//span[.='Administrator']`)
    }

    get admin_Profile_LINK(){
        return $(`//a[contains(.,'Profile')]`)
    }

    get admin_Logout_LINK(){
        return $(`//a[contains(.,'Logout')]`)
    }

    //Business Libraries
    async navigate_Create_TourPackage(){
        
        expect(await this.tour_Packages_Option.waitForDisplayed({timeout:5000})).to.be.true
        await  this.tour_Packages_Option.moveTo()

        expect(await this.createPackage_LINK.waitForDisplayed({timeout:5000})).to.be.true
        await this.createPackage_LINK.click()

        expect(browser.getTitle()).to.contain(`Admin Package Creation`)
    }

    async navigate_Manage_TourPackage(){
        expect(await this.tour_Packages_Option.waitForDisplayed({timeout:5000})).to.be.true
        await  this.tour_Packages_Option.moveTo()

        expect(await this.managePackage_LINK.waitForDisplayed({timeout:5000})).to.be.true
        await this.managePackage_LINK.click()

        expect(browser.getTitle()).to.contain(`admin manage packages`)
    }


}
export default new AdminHomePage()