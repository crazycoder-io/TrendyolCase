import { mount } from "enzyme";
import { CHARTS_DATA } from "../utils/SampleDate";
import { Chart } from "../components";

describe("Chart component unit test", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(<Chart title={"Test"} loading={false} chart={CHARTS_DATA.ttfb} />);
    });
    test("Chart component title should be string", () => {
        expect(typeof wrapper.props().title).toBe("string");
        expect(wrapper.props().title).toBe("Test");

        const titleComponent = wrapper.find(".chart_title");
        expect(titleComponent.text()).toEqual("Test");
    });

    test("Chart props should be defined well", () => {
        expect(typeof wrapper.props().loading).toBe("boolean");
        expect(wrapper.props().loading).toBe(false);

        expect(typeof wrapper.props().chart).toBe("object");
        expect(wrapper.props().chart).toBe(CHARTS_DATA.ttfb);
    });
});