function callAdi() {
	let a = "first data";
	let b = "second data";

    {
        let c = "third data";
	    let d = "fourth data";
        console.log(`c in local scope is: ${c}`);
        console.log(`d in local scope is: ${d}`);
    }

    console.log(`a : ${a}`);  
    console.log(`b : ${b}`);
    console.log(`c : ${c}`);
    console.log(`d : ${d}`);
}

callAdi();