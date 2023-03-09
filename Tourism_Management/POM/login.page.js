import expect from "chai"

class LoginPage{
    
    get username_TF(){
        return $(`[name='username']`)
    }

    get password_TF(){
        return $(`[name='password']`)
    }

    get signIn_BTN(){
        return $(`[nmae='login']`)
    }

    get bac_to_home_LINK(){
        return $(`//a[.='Back to home']`)
    }

    // Business Libraries

    async admin_Login(un,pwd) {
        await browser.maximizeWindow()
        await browser.url(`http://testingserver/domain/Online_Tourism_Management_System/admin/index.php`)

        expect(browser.getTitle()).to.contain(`Admin Sign in`)

        expect(await this.username_TF.waitForDisplayed({timeout:3000})).to.be.true
        await this.username_TF.setValue(un)

        expect(await this.password_TF.waitForDisplayed({timeout:3000})).to.be.true
        await this.password_TF.setValue(pwd)

        expect(this.signIn_BTN.waitForClickable({timeout:3000})).to.be.true
        await this.signIn_BTN.click()

        expect(browser.getTitle()).to.contain(`Admin Dashboard`)
    }
}

export default new LoginPage()