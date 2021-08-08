import React from "react";
import { mount } from "enzyme";
import { Chart } from "../components";

describe("Chart component unit test", () => {
    test("Chart component title should be string", () => {
        const wrapper = mount(<Chart title={"Test"} />);

        expect(typeof wrapper.props().title).toBe("string");
        expect(wrapper.props().title).toBe("Test");

        const titleComponent = wrapper.find(".chart_title");
        expect(titleComponent.text()).toEqual("Test");
    });
});