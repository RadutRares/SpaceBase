

export class StatRoll {

	getStat(): number {
		var sum = 0;
		for (var i = 0; i < 6; i++){
			sum += Math.floor(Math.random()*6+1);
		}
		return Math.floor(sum / 10);
	}
}