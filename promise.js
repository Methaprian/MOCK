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