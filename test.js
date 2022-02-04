var keyNum = 3;
if (marker.numKeys > 0 && thisProperty.numKeys > keyNum && keyNum >= 2) {
	var t1 = comp("_MAIN RENDER").layer("Text 2").marker.key(1).time - comp("_MAIN RENDER").layer("Text 2").inPoint;
	var t2 = thisProperty.key(keyNum - 1).time;
	var t3 = thisProperty.key(keyNum).time;
	if (t1 <= t2) value;
	else {
		if (time >= t2)
			if (time <= t1) {
				var newTime = linear(time, t2, t1, t2, t3);
				valueAtTime(newTime);
			} else valueAtTime(time + t3 - t1);
		else value;
	}
} else value;

while (condition) {}

for (let i = 0; i < nam1e.length; i++) {
	const element = name[i];
	for
}