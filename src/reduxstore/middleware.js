/*export function FirstMiddleWare(store){
	return function(next){
		return function(action){
			console.log("Before Action",action.type,store.getState())

			var result=next(action)
			console.log(".......",store.getState())
			return result
		}
	}
}*/

//ES 6 Middleware Syntax

export let logger = store=>next=>action=>{
    console.log("Before Action",action.type,store.getState())
	var result=next(action)
	console.log(".......",store.getState())
	return result	
}