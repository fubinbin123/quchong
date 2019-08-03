// const arr=[1,3,7,3,2,6,1,8,3,9]
// let newArr=arr.filter((item,index)=>{
// 	 return arr.indexOf(item) ===index
// })
// let Arr=[]
// for(let i of arr){
// 	!Arr.includes(i)&&Arr.push(i)
// }
// console.log(newArr,Arr)
// console.log(Array.from(new Set(arr)))
module.exports = {
	arr(arr) {
		let newArr = arr.filter((item, index) => {
			return arr.indexOf(item) === index
		})
		return newArr
	}
}