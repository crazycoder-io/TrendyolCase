import React from "react";
import { shallow } from "enzyme";
import IndexPage from "../pages/index";

describe("Index page unit test", () => {
    test("Index page title should be expected", () => {
        const wrapper = shallow(<IndexPage />);
        const titleComponent = wrapper.find(".title");
        expect(titleComponent.text()).toEqual("Welcome to PerfAnalytics.js Dashboard");
    });
});