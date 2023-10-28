import { Console, Random } from '@woowacourse/mission-utils';
import { Car } from './Car.js';
class App {
  async play() {
    const carList = [];

    const carNames = await this.inputCarNames();
    const carNameList = carNames.split(',');

    carNameList.forEach(carName => {
      if (!this.isValidCarName(carName))
        throw new Error('[ERROR] 자동차 이름이 5자를 초과하였습니다.\n');
      carList.push(new Car(carName));
    });

    const tryNum = await this.inputTryNum();
    if (!this.isValidTryNum(tryNum))
      throw new Error('[ERROR] 숫자가 아닌 문자가 포함되어 있습니다.\n');
  }

  async inputCarNames() {
    try {
      const carNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );
      return carNames;
    } catch (error) {
      Console.print(error.message);
    }
  }

  async inputTryNum() {
    try {
      const tryNum =
        await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      return tryNum;
    } catch (error) {
      Console.print(error.message);
    }
  }

  isValidTryNum(tryNum) {
    const regex = /[^0-9]/;
    //Q. 시도횟수에 대한 제한은? ex) n < 10000 조건을 넣어야 할지 말지고민
    if (regex.test(tryNum)) {
      return false;
    }
    return true;
  }
  isValidCarName(carName) {
    if (carName.length > 5) {
      return false;
    }
    return true;
  }
}
export default App;