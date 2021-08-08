import React from "react";
import { shallow } from "enzyme";
import IndexPage from "../pages/index";

describe("Index page unit test", () => {
    test("Index page components should be defined well", () => {
        const wrapper = shallow(<IndexPage />);
        
        const HeaderComponent = wrapper.find("Header");
        const TitleComponent = wrapper.find("Title");
        const ChartsComponent = wrapper.find("Charts");
        const FooterComponent = wrapper.find("Footer");
        
        expect(HeaderComponent).toBeDefined();
        expect(TitleComponent).toBeDefined();
        expect(ChartsComponent).toBeDefined();
        expect(FooterComponent).toBeDefined(); 
    });
});