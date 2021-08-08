import { shallow } from "enzyme";
import { Title } from "../components";

describe("Title Component Unit Test", () => {
    test("Title component should include 'Welcome to PerfAnalytics.js Dashboard'", () => {
        const wrapper = shallow(<Title />);

        expect(wrapper.find("h1").at(0).text()).toBe("Welcome to PerfAnalytics.js Dashboard");
    });
});
