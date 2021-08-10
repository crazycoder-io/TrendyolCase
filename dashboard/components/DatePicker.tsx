import PickerDate from "react-datepicker";
import { DatePickerProps } from "../types"
import "react-datepicker/dist/react-datepicker.css";

const DatePicker: React.FC<DatePickerProps> = (props): JSX.Element => {
    const { specificDate, setDate, keyword } = props;

    const onChangeDate = (date) => {
        if (keyword === "endDate" && date < specificDate.startDate) {
            alert("You cannot set the end date lower than the start date!");
        } else {
            setDate(keyword, date);
        }
    };

    return (
        <div style={{ margin: "5px" }}>
            <PickerDate
                showTimeSelect
                dateFormat="Pp"
                selected={specificDate[keyword]}
                onChange={onChangeDate} />
        </div>
    );
};

export default DatePicker;
