/**
 * @param type Loại ghế
 * @param seatStatus "booked" (đã đặt), "reserved" (đã giữ chỗ)
 * @returns
 */
export default function Seat({type, seatStatus}: any) {

    return (
        <div>
            Ghế {type}
            <br/>
            Trạng thái {seatStatus}
        </div>
    )
}