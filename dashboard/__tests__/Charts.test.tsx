import { mount } from "enzyme";
import { CHARTS_DATA } from "../utils/SampleDate";
import { Charts } from "../components";

describe("Charts component unit test", () => {
    let wrapper, ChartComponent;

    beforeAll(() => {
        wrapper = mount(<Charts loading={false} chartsData={CHARTS_DATA} />);
        ChartComponent = wrapper.find("Chart");
    });

    test("Charts component contain div class should be 'charts'", () => {
        const div = wrapper.find("div").at(0);

        expect(div.hasClass("charts")).toBe(true);
    });
    test("The children of the Charts component must consist of 4 Chart components", () => {
        expect(ChartComponent.length).toEqual(4);
    });

    test("The parameters of first and third element of Charts component should be expected", () => {        
        expect(ChartComponent.at(0).prop("title")).toBe("TTFB");
        expect(ChartComponent.at(2).prop("title")).toBe("Window Load");
    });

    test("Charts component props should be defined well", () => {        
        expect(typeof wrapper.props().loading).toBe("boolean");
        expect(wrapper.props().loading).toBe(false);

        expect(typeof wrapper.props().chartsData).toBe("object");
        expect(wrapper.props().chartsData).toBe(CHARTS_DATA);
    });
});