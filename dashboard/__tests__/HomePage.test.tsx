import { shallow } from "enzyme";
import { act, renderHook } from "@testing-library/react-hooks";
import { ChartHook } from "../hooks";
import { CHARTS_DATA, METRICS } from "../utils/SampleDate";
import IndexPage from "../pages/index";

describe("Index page unit test", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<IndexPage chartsData={CHARTS_DATA} metrics={METRICS} />);
    });
    test("Index page components should be defined well", () => {
        
        expect(wrapper).toMatchSnapshot();

        const HeaderComponent = wrapper.find("Header");
        const TitleComponent = wrapper.find("Title");
        const ChartsComponent = wrapper.find("Charts");
        const FooterComponent = wrapper.find("Footer");
        const DatePickerComponent = wrapper.find("DatePicker");
        
        expect(HeaderComponent).toBeDefined();
        expect(TitleComponent).toBeDefined();
        expect(ChartsComponent).toBeDefined();
        expect(FooterComponent).toBeDefined(); 
        expect(DatePickerComponent).toBeDefined(); 
    });

    test("Mocking 'Update Charts' function", () => {
        const { result } = renderHook(() => ChartHook(CHARTS_DATA));
        const myMockFn = jest
            .fn()
            .mockImplementationOnce(result.current.updateChartsData);
        
        act(() => myMockFn());
        expect(myMockFn).toHaveBeenCalledTimes(1);
    });

    test("'Update Charts' button simulate 'click' without error", () => {
        const UpdateChartsButton = wrapper.find(".dateButton");
        ;
        UpdateChartsButton.simulate("click");
    });
});