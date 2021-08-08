import { shallow } from "enzyme";
import { Header } from "../components";

describe("Header Component Unit Tests", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Header />);
    });
    test("Header Component title should be 'PerfAnalytics Dashboard'", () => {
        expect(wrapper.find("title").text()).toBe("PerfAnalytics Dashboard");
    });

    test("Header Component meta tag description should be expected", () => {
        expect(wrapper.find("meta").prop("content")).toBe("PerfAnalytics.js Dashboard panel made by Mesut KILINCASLAN");
    });
});

