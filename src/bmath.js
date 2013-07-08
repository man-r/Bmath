

function bAdd(a, b) {
    var al = a.length;
    var bl = b.length;

    if (al < bl)
        return bAdd(b, a);

    var c = 0;
    var r[];
    var n = 0;

	while(n < bl) {
        temp = a[n] + b[n] + c;
		
		if (temp == 3) {
			r[n] = 1;
			c = 1;
		}
		else if (temp == 2){
			r[n] = 0;
			c = 1
		}
		else {
			r[n] = a[n] | b[n];
			c = 0;
		}
        n++;
    }
	
	return r;
}

function bMul(a, b) {
	var al = a.length;
	var bl = b.length;
	
	if (al < bl)
        return bAdd(b, a);

	var r[]; //result
	var rr[]; //holds the mult mid result to be added
	
	var i;
	for(i = 0; i < (al + bl); i++)
		r[i] = 0;
	
	for(i = 0; i < bl; i++) {
		if(b[i]) {
			rr[i] = bLShift(a, i);
		}
		else {
			rr[i] = bLShift(z, i);
		}
	}
	
	for(i = 0; i < rr.length; i++) {
		bAdd(r[], rr[i]);
	}
	
	return r;
}

function bLShift(a, n) {
	var r[];
	var nl = a.length + n;
	
	for(var i = (nl - 1); i >= 0; i--) {
		if(i < n) {
			r[i] = 0;
		}
		else {
			r[i] = a[i - n];
		}
	}
	
	return r;
}



















