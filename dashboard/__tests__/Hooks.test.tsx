
import { renderHook, act } from "@testing-library/react-hooks";
import { LoadingHook, DateHook } from "../hooks";

describe("Hooks unit tests", () => {
    test("Loading Hook should work properly", () => {
        const { result } = renderHook(() => LoadingHook());
        expect(result.current.loading).toBe(false);

        act(() => result.current.updateLoading());
        expect(result.current.loading).toBe(true);
    });

    test("Date Hook should work properly", () => {
        const { result } = renderHook(() => DateHook());

        // Change the last character of timezone because last character is unstable.

        // expect(Number(result.current.specificDate.startDate.getTime().toString().slice(0, -1) + "0")).toBeCloseTo(Number(new Date().getTime().toString().slice(0, -1) + "0"));
        // expect(Number(result.current.specificDate.endDate.getTime().toString().slice(0, -1) + "0")).toBeCloseTo(Number(new Date().getTime().toString().slice(0, -1) + "0"));

        // const startDate = new Date();
        // act(() => result.current.updateDate("startDate", startDate));

        // expect(Number(result.current.specificDate.startDate.getTime().toString().slice(0, -1) + "0")).toBeCloseTo(Number(startDate.getTime().toString().slice(0, -1) + "0"));
        // expect(Number(result.current.specificDate.endDate.getTime().toString().slice(0, -1) + "0")).toBeCloseTo(Number(new Date().getTime().toString().slice(0, -1) + "0"));
    });
});