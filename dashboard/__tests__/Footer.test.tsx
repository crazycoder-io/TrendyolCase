import { shallow } from "enzyme";
import { Footer } from "../components";

describe("Footer Component Unit Test", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Footer />);
    });
    test("Footer component should include 'Powered by Mesut KILINCASLAN' text", () => {
        expect(wrapper.find("a").at(0).text()).toBe("Powered by Mesut KILINCASLAN");
    });

    test("Footer component should has 'footer' class", () => {
        expect(wrapper.find("footer").at(0).hasClass("footer")).toBe(true);
    });
});
