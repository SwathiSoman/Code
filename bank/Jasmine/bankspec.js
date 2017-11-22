
describe('Basic check for the source code', () => {
	describe('Bank', () => {
		let theBank
		beforeEach(() => {
			theBank = new Bank()
			let money.dollar
		})
		
	describe('the test Multiplication', () => {
		it('should test Multiplication for 10 and 2', () => {
			/*expect(Money.dollar(10), five.times(2)).toBeEquals()*/
			expect((money.dollar(10).(money.dollar(2)).toBeEquals()
		})
		it('should test multiplication for 15 and 3', () => {
			/*expect(Money.dollar(15), five.times(3)).toBeEquals()*/
			expect((money.dollar(15).(money.dollar(3)).toBeEquals()
		})
	})
		
	describe('the test Equality', () => {
		it('should test equality if 5 is equal to 5', () => {
			expect((money.dollar(5).equals(money.dollar(5))).toBeTruthy()
		})
		it('should test if the given two numbers are not equal', () => {
			expect((money.dollar(5).equals(money.dollar(6))).toBeFalsy()
        })
		it('should test if both the dollar and franc are equal', () => {
			expect((money.franc(5).equals(money.dollar(5))).toBeFalsy()
		})
	})

	describe('the testCurrency', () => {
		it('should test the dollar "USD"', () => {
			expect(money.dollar(1).getcurrency()).toBeEquals()
		})
		it('should test the franc "CHF"', () => {
			expect(money.franc(1).getcurrency()).toBeEquals()
		})
    })
	
	
	describe('the test Simple Addition', () => {
		it('should test for the addition', () => {
		let five = new moneyDollar(5)
		let expressionSum = new five.plus(five)
        let bank = new Bank()
		reduce = bank.reduce(sum,"USD")
		expect(money.dollar(10).bank.reduce()).toBeEquals()
		})
	})


	describe('the test mixed addition',() => {
		it('should test for the mixed addition', () => {
			let expressionFiveBucks = new moneyDollar(5)
			let expressionTenFrancs = new moneyFranc(10)
			let bank = new Bank()
			bank.addRate("USD","CHF",2)
		    result = bank.reduce(fiveBucks.plus(tenFrancs), "USD")
			expect(money.dollar(10).bank.result()).toBeEquals()
		})
	})
	 
	
	describe('the test sum plus money',() => {
		it('should test for the sum plus money', () => {
			let expressionFiveBucks = new moneyDollar(5)
			let expressionTenFrancs = new moneyFranc(10)
			let bank = new bank()
			bank.addRate("USD","CHF",2)
			expressionSum = new Sum(fiveBucks,tenFrancs).plus(fiveBucks)
			money.result = bank.reduce(sum,"USD")
			expect(money.dollar(15).bank.result()).toBeEquals()
		})
	})
			
  
	describe('the test sum times', () => {
		it('should test the sum of times', () => {
			let expressionfiveBucks = new moneyDollar(5)
			let expressiontenFrancs = new moneyFranc(10)
			let bank = new Bank()
			bank.addRate("USD", "CHF", 2);
			expressionSum = new Sum(fiveBucks, tenFrancs).times(2);
			moneyResult = bank.reduce(sum, "USD");
			expect(money.dollar(20).bank.result()).toBeEquals()
		})
	})
	
	describe('the test Plus Returns Sum', () => {
        it('should test and return sum', () => {
			let moneyFive = new moneyDollar(5)
			let expressionResult = new fivePlus(five)
			let sum = (Sum).result
			expect(five, sum(augend)).toBeEquals()
			expect(five, sum(added)).toBeEquals()
		})
	})
 
    describe('the test Reduce Sum', () => {
	    it('should reduce sum', () => {
			let expressionSum = new Sum(Money.dollar(3), Money.dollar(4))
			let bank = new Bank()
			result = bank.reduce(sum, "USD");
			expect(money.dollar(7), bank.result).toBeEquals()
		})
    })
	
    describe('the test Reduce Money', () => {
		it('should reduce the amount', () => {
			let bank = new Bank()
			moneyResult = bank.reduce(Money.dollar(1), "USD");
			expect(money.dollar(1), bank.result).toBeEquals()
		})
	})
	
	describe('test identity rate', () => {
		expect(1,new bank().rate("USD","USD"))
	})
	
	describe('the test Reduce Money Different Currency', () => {
		it('should reduce the money different currency', () => {
			let bank = new Bank()
			bank.addRate("USD", "CHF", 2);
			result = bank.reduce(money.franc(2), "USD");
			expect(money.dollar(1), money.result).toBeEquals()
		})
	})

/*	
	describe('Test array equals', () => {
		it('should test if all the array are equal', () => {
			expect(newObject[] {"abc"}, newObject[] {"abc"})
		})
	})
*/

  
})
   
})