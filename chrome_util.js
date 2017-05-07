//
// utility functions that use the chrome.* api
//

function navigate(new_url) {
  chrome.tabs.query({active: true}, function(active_tab) {
		chrome.tabs.update(active_tab.id, {url : new_url});
	});
}



function storage_read_int(varname, succeed, fail) {
    console.log("storage_read_int(): calling chrome.storage.sync.get(). varname = " + varname);
    
    chrome.storage.sync.get(varname, function(result) {
	if (chrome.runtime.lastError) {
	    console.log("storage_read_int(): chrome.storage.sync.get() caused chrome.runtime.lastError");
	    fail();
	} else {
	    if (typeof result === 'undefined' || result === null) {
		console.log("storage_read_int(): result is undefined or null");
		fail();
	    } else {
		var value_str = result[varname];
		
		if (typeof value_str === 'undefined' || value_str === null) {
		    console.log("storage_read_int(): result[varname] undefined or null");
		    fail();
		} else {
		    var value = parseInt(value_str);
		    
		    if (isNaN(value)) {
			console.log("storage_read_int(): NaN on value");
			fail();
		    } else {
			console.log(value);
			succeed(value);
		    }
		}
	    }
	}
    });
}

function storage_write_int(varname, varvalue, succeed, fail) {
    console.log("storage_write_int(): calling chrome.storage.sync.set(). varname = " + varname);
    console.log(varvalue);

    var obj = {};		// we can't use literal object notation
    obj[varname] = varvalue;
    
    chrome.storage.sync.set(obj, function() {
	if (chrome.runtime.lastError) {
	    console.log("storage_write_int(): chrome.storage.sync.set() caused chrome.runtime.lastError");
	    fail();
	} else {
	    succeed();
	}
    });
}

function storage_read_string(varname, succeed, fail) {
    console.log("storage_read_string(): calling chrome.storage.sync.get(). varname = " + varname);
    
    chrome.storage.sync.get(varname, function(result) {
	if (chrome.runtime.lastError) {
	    console.log("storage_read_string(): chrome.storage.sync.get() caused chrome.runtime.lastError");
	    fail();
	} else {
	    if (typeof result === 'undefined' || result === null) {
		console.log("storage_read_string(): result is undefined or null");
		fail();
	    } else {
		var value_str = result[varname];
		
		if (typeof value_str === 'undefined' || value_str === null) {
		    console.log("storage_read_string(): result[varname] undefined or null");
		    fail();
		} else {
		    console.log(value_str);
		    succeed(value_str);
		}
	    }
	}
    });
}

function storage_write_string(varname, varvalue, succeed, fail) {
    console.log("storage_write_string(): calling chrome.storage.sync.set(). varname = " + varname);
    console.log(varvalue);

    var obj = {};		// we can't use literal object notation
    obj[varname] = varvalue;
    
    chrome.storage.sync.set(obj, function() {
	if (chrome.runtime.lastError) {
	    console.log("storage_write_string(): chrome.storage.sync.set() caused chrome.runtime.lastError");
	    fail();
	} else {
	    succeed();
	}
    });
}

