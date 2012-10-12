import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.is;

public class OldFashionedMotorDealerTest {

	private int pageIndex = 0;
	private String[] fakePageNames = { "select your car", "driver details" };

	public void completeQuote() {
		startWebDriver();
		selectACar();
		clickContinue();
		assertThat(fakePageNames[pageIndex], is("driver details"));
	}

	private void clickContinue() {
		//use selenium to click the button
		pageIndex++;
	}

	private void selectACar() {
		// use selenium to fill in test data
	}

	private void startWebDriver() {
		// start selenium web driver
		assertThat(fakePageNames[pageIndex], is("select your car"));
	}
}
