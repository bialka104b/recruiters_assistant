export class LevelObject {
	level: string;
	objectArr: Array<string>;

	constructor(level: string = "Clear", objectArr: Array<string> = []) {
		this.level = level;
		this.objectArr = objectArr;
	}
}
