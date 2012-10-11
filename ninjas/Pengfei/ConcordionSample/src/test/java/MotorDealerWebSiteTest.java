import org.concordion.integration.junit4.ConcordionRunner;
import org.junit.runner.RunWith;

@RunWith(ConcordionRunner.class)
public class MotorDealerWebSiteTest {

	private int pageIndex = 0;
	private String[] fakePageNames = { "select your car", "driver details" };

	public String getCurrentPageName() {
		return getPageNameFromSeleniumWebDriver();
	}

	public void selectCar(String year, String make, String details) {
		fillFieldsWithSeleniumWebDriver(year, make, details);
	}

	public void clickContinueButton() {
		// in a real test, this method should call the selenium webdriver to
		// click the "continue" button.
		clickContinueButtonWithSeleniumWebDriver();
	}

	private void clickContinueButtonWithSeleniumWebDriver() {
		pageIndex++;
//		pageIndex++;
	}

	private void fillFieldsWithSeleniumWebDriver(String year, String make,
			String details) {
		// in a real test, this method should call the selenium webdriver to
		// fill in the text boxes.
		System.out.println("filling in fields: year: " + year + " make: "
				+ make + " details: " + details);
	}

	private String getPageNameFromSeleniumWebDriver() {
		// in a real test, this method should call the selenium webdriver to get
		// the page name.
		return fakePageNames[pageIndex];
	}
}
