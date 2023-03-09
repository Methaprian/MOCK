async function admin(){
	var p=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Logout In Progress")
			reject("Rejected/Failed")
		},3000)
	})
	
	await p.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)})
	
	var p=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("login in Progress")
			reject("Rejected/Failed")
		},1000)
	})
	
	await p.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)})

	var p=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Operation Progress")
			reject("Rejected/Failed")
		},2000)
	})
	
	await p.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)})
	
}

admin()

/*


===============================
	Allure Report
===============================

1. Add dependency in package.json ---> "allure-reporter":^8.5.0
2. npm install
	
	cmd ---> allure rifraf allure-report	 // to remove the old allure results folder
	Run a test spec
	cmd ---> allure generate allure-report     // to generate the report 
	
	cmd ---> allure open

===============================================================================

export default new LoginPage()
import loginPage from './POM/login.page.js'

export default new Activities()
import activitiesPage from './POM/activities.page.js'

import {expect} from chai

export default new Expenses()
import ExpensesPage from './POM/expenses.page.js'

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let obj=Object.create
obj.username='SKM'
obj.password='123456'
obj.email='skm@gmail.com'
obj.stud=function(){
		console.log('Student Details')
         }
obj.phone={
          	phone_number:"9876543210"
	    }

console.log(obj)


*/


















