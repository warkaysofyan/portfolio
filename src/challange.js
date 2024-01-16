function filter_list(l) {
	newArr = l.map(el => typeof(el) === 'number' ? el :"" )
	newArr.shift();
	return newArr ;
}

console.log(filter_list([1, 2, 'a', 'b']))