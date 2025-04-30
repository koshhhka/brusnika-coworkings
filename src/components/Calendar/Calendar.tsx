import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';

export default function Calendar() {
    return (
        <DayPicker
            mode="single"
            style={{
                '--rdp-accent-color': '#EF3B24',
            } as React.CSSProperties}
        />
    )
};