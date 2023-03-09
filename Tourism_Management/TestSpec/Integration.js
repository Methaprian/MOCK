import loginPage from "../POM/login.page.js";

describe('Integration testing',async ()=>{

    let username='admin'
    let password='Test@123'

    it('Login into Application',async ()=>{
        await loginPage.admin_Login(username,password)
    })
})