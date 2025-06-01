// Define isEdge function directly since we're in MAIN world
window.isEdge = function () {
	return true;
};

// Make it non-configurable and non-writable
try {
	Object.defineProperty(window, "isEdge", {
		value: window.isEdge,
		configurable: false,
		writable: false,
		enumerable: true,
	});
} catch (e) {
	console.log("Failed to make isEdge non-writable:", e);
}
