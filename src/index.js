
exports.min = function min (array) {
   let result = 0;
  	if (arguments.length == 0){
  	result = 0;	
  }
  else{
	for (let i = 0; i <= array.length; i ++) {
  		if(result > array[i] ){
  			result = array[i]
  		}
  	}
  }
  return result;
}

exports.max = function max (array) {
  let result = 0;
  if (arguments.length == 0){
  	result = 0;	
  }
  else{
	for (let i = 0; i <= array.length; i ++) {
  		if( result < array[i] ){
  			result = array[i]
  		}
  	}
  }
  return result;
}

exports.avg = function avg (array) {
  let result = 0;
  if (arguments.length == 0){
  	result = 0;	
  }
  else{
	for (let i = 0; i < array.length; i ++) {
  		result = result + array[i];
  	}
  }
  return result == 0 ? 0 : result / array.length;
}
