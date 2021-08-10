
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

        // We send -1 split-second cause function works 1 split-second before the test
        expect(result.current.specificDate).toEqual({
            startDate: new Date(new Date().getTime() - 1),
            endDate: new Date(new Date().getTime() - 1)
        });

        const startDate = new Date();
        act(() => result.current.updateDate("startDate", startDate));

        // We use -1 cause we mock the function
        expect(result.current.specificDate).toEqual({
            startDate,
            endDate: new Date(new Date().getTime() - 1)
        });
    });
});